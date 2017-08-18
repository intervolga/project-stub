const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackAssetTemplatePlugin =
  require('@intervolga/html-webpack-asset-template-plugin');
const HtmlIndexPlugin = require('@intervolga/html-index-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const pkg = require('./package.json');

const isProd = 'production' === process.env.NODE_ENV;

// Read source directory and gerate entry points object
const srcPath = path.resolve(__dirname, 'src');
const entries = fs.readdirSync(srcPath)
  .filter((file) => {
    return /\.js$/i.test(file);
  }).map((file) => {
    return path.join(srcPath, file);
  }).reduce(function(res, curr) {
    if (isProd) {
      res['dist'] = res['dist'] || [];
      res['dist'].push(curr);
    } else {
      const key = path.basename(curr, '.js');
      res[key] = curr;
    }

    return res;
  }, {});

module.exports = {
  entry: entries,

  output: {
    path: path.resolve(__dirname, isProd ? 'dist' : 'build'),
    filename: '[name].bundle.js',
  },

  devtool: isProd ? 'source-map' : 'cheap-source-map',

  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff)(\?v=[\d+\.]+)?$/,
        include: /\/node_modules\//,
        loader: 'file-loader',
        options: {name: 'assets/[1]', regExp: /node_modules\/(.*)/},
      },
      {
        test: /\.woff2(\?v=[\d+\.]+)?$/,
        include: /\/node_modules\//,
        loader: 'url-loader',
        options: {
          name: 'assets/[1]',
          regExp: /node_modules\/(.*)/,
          limit: 4096,
        },
      },
      {
        test: /\.svg(\?v=[\d+\.]+)?$/,
        include: /\/node_modules\//,
        loader: 'svg-url-loader',
        options: {
          name: 'assets/[1]',
          regExp: /node_modules\/(.*)/,
          limit: 4096,
        },
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        include: /\/node_modules\//,
        loader: 'url-loader',
        options: {
          name: 'assets/[1].[ext]',
          regExp: /node_modules\/(.*)/,
          limit: 4096,
        },
      },
      {
        test: /\.(ttf|eot|woff)(\?v=[\d+\.]+)?$/,
        exclude: /\/node_modules\//,
        loader: 'file-loader',
        options: {name: 'assets/[path][name].[ext]'},
      },
      {
        test: /\.woff2(\?v=[\d+\.]+)?$/,
        exclude: /\/node_modules\//,
        loader: 'url-loader',
        options: {name: 'assets/[path][name].[ext]', limit: 4096},
      },
      {
        test: /\.svg(\?v=[\d+\.]+)?$/,
        exclude: /\/node_modules\//,
        loader: 'svg-url-loader',
        options: {name: 'assets/[path][name].[ext]', limit: 4096},
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: /\/node_modules\//,
        loader: 'url-loader',
        options: {name: 'assets/[path][name].[ext]', limit: 4096},
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {importLoaders: 1, minimize: isProd, sourceMap: isProd},
            },
            {
              loader: 'postcss-loader',
              options: {sourceMap: false},
            },
          ],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {minimize: isProd, sourceMap: isProd},
            },
            {
              loader: 'postcss-loader',
              options: {sourceMap: isProd},
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                // includePaths: ['absolute/path/a', 'absolute/path/b']
                sourceMap: isProd,
              },
            },
          ],
        }),
      },
      {
        test: /\.bemjson\.js$/,
        use: [
          '@intervolga/bemrequire-loader',
          '@intervolga/bembh-loader',
          {
            loader: '@intervolga/bemdeps-loader',
            options: {
              levels: pkg.bemLevels,
              techMap: pkg.bemTechs,
              bhFilename: path.resolve(path.join('lib', 'bh.js')),
            },
          },
          {
            loader: '@intervolga/bemdecl-loader',
            options: {levels: pkg.bemLevels},
          },
          '@intervolga/bemjson-loader',
          '@intervolga/eval-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],

    noParse: [
      /\/node_modules\/jquery\/dist\/jquery\.min\.js/,
    ],
  },

  plugins: [
    // Common plugins
    new CleanWebpackPlugin(['dist', 'build']),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
      'LANG': JSON.stringify('ru'),
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery/dist/jquery.min.js',
      'jQuery': 'jquery/dist/jquery.min.js',
      'modules': 'ym',
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[name].bundle.css',
      disable: !isProd,
    }),
    new HtmlWebpackPlugin({
      chunks: [isProd ? 'dist' : 'index.bemjson'],
      filename: 'index.bemjson.html',
      xhtml: true,
    }),
    new HtmlWebpackPlugin({
      chunks: [isProd ? 'dist' : 'text.bemjson'],
      filename: 'text.bemjson.html',
      xhtml: true,
    }),
    new HtmlWebpackAssetTemplatePlugin(),
    new HtmlIndexPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(srcPath, '**', '*.{jpeg,jpg,png,gif,svg}'),
      context: srcPath,
    }]),

    // TODO: link-media-html-webpack-plugin

    // Production plugins
    ...isProd ? [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        extractComments: true,
      }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'common',
      //   filename: 'bundle.js',
      //   // minChunks: 2,
      // }),
      new OptimizeCssnanoPlugin({
        sourceMap: true,
        cssnanoOptions: {
          preset: ['default', {discardComments: {removeAll: true}}],
        },
      }),
      new PreloadWebpackPlugin({
        fileBlacklist: [/\.css$/i, /\.map$/i],
        include: 'all',
        rel: 'preload',
      }),
      new FaviconsWebpackPlugin({
        logo: path.join(srcPath, 'favicon.png'),
        prefix: 'favicons/',
        title: 'BEM',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      }),

      // TODO: https://www.npmjs.com/browse/keyword/imageminplugin
      new ImageminPlugin({
        svgo: null,
      }),
    ] : [],
  ],

  devServer: {
    contentBase: path.resolve(__dirname, isProd ? 'dist' : 'build'),
    host: 'localhost',
    overlay: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};
