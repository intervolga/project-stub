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
const imageminMozjpeg = require('imagemin-mozjpeg');
const pkg = require('./package.json');

const isProd = 'production' === process.env.NODE_ENV;
const srcPath = path.resolve(__dirname, 'src', 'bundles');
const bemJsonEntries = fs.readdirSync(srcPath)
  .filter((file) => {
    return /\.bemjson\.js$/i.test(file);
  }).map((file) => {
    return path.join(srcPath, file);
  });
const moduleEntries = bemJsonEntries.reduce(function(res, curr) {
  if (isProd) {
    res['merged'] = res['merged'] || [];
    res['merged'].push(curr);
  } else {
    const key = path.basename(curr, '.js');
    res[key] = curr;
  }

  return res;
}, {});

module.exports = {
  entry: moduleEntries,

  output: {
    path: path.resolve(__dirname, isProd ? 'dist' : 'build'),
    filename: 'assets/[name].js',
  },

  devtool: isProd ? 'source-map' : 'cheap-source-map',

  module: {
    rules: [
      // Fonts except WOFF2
      ...[
        {
          test: /\.(ttf|eot|woff)(\?v=[\d+\.]+)?$/,
          include: /\/node_modules\//,
          loader: 'file-loader',
          options: {name: 'assets/[1]', regExp: /node_modules\/(.*)/},
        },
        {
          test: /\.(ttf|eot|woff)(\?v=[\d+\.]+)?$/,
          exclude: /\/node_modules\//,
          loader: 'file-loader',
          options: {name: 'assets/[path][name].[ext]'},
        },
      ],

      // WOFF2 as most compact font format may be inlined
      ...[
        {
          test: /\.woff2(\?v=[\d+\.]+)?$/,
          include: /\/node_modules\//,
          loader: 'url-loader',
          options: {
            name: 'assets/[1]',
            regExp: /node_modules\/(.*)/,
            limit: 3072,
          },
        },
        {
          test: /\.woff2(\?v=[\d+\.]+)?$/,
          exclude: /\/node_modules\//,
          loader: 'url-loader',
          options: {name: 'assets/[path][name].[ext]', limit: 3072},
        },
      ],

      // Images except SVG
      ...[
        {
          test: /\.(jpe?g|png|gif)$/,
          include: /\/node_modules\//,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'assets/[1].[ext]',
                regExp: /node_modules\/(.*)/,
                limit: 3072,
              },
            },
            {
              loader: 'imagemin-loader',
              options: {
                enabled: isProd,
                plugins: [
                  {use: 'imagemin-optipng'},
                  {use: 'imagemin-gifsicle'},
                  {use: 'imagemin-jpegtran'},
                  {use: 'imagemin-svgo'},
                  {
                    use: imageminMozjpeg,
                    options: {
                      quality: 85, // Default from Google PageSpeed
                      progressive: true,
                    },
                  },
                ],
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          exclude: /\/node_modules\//,
          use: [
            {
              loader: 'url-loader',
              options: {name: 'assets/[path][name].[ext]', limit: 3072},
            },
            {
              loader: 'imagemin-loader',
              options: {
                enabled: isProd,
                plugins: [
                  {use: 'imagemin-optipng'},
                  {use: 'imagemin-gifsicle'},
                  {use: 'imagemin-jpegtran'},
                  {use: 'imagemin-svgo'},
                  {
                    use: imageminMozjpeg,
                    options: {
                      quality: 85, // Default from Google PageSpeed
                      progressive: true,
                    },
                  },
                ],
              },
            },
          ],
        },
      ],

      // SVG images may may be inlined in a clever way
      ...[
        {
          test: /\.svg(\?v=[\d+\.]+)?$/,
          include: /\/node_modules\//,
          loader: 'svg-url-loader',
          options: {
            name: 'assets/[1]',
            regExp: /node_modules\/(.*)/,
            limit: 3072,
          },
        },
        {
          test: /\.svg(\?v=[\d+\.]+)?$/,
          exclude: /\/node_modules\//,
          loader: 'svg-url-loader',
          options: {name: 'assets/[path][name].[ext]', limit: 3072},
        },
      ],

      // Styles
      ...[
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  minimize: isProd,
                  sourceMap: isProd,
                },
              },
              {
                loader: 'postcss-loader',
                options: {sourceMap: isProd ? 'inline' : false},
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
                options: {sourceMap: isProd ? 'inline' : false},
              },
              {
                loader: 'sass-loader',
                options: {outputStyle: 'expanded', sourceMap: isProd},
              },
            ],
          }),
        },
      ],

      // BEM
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
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      // },
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
      // '$': 'jquery/dist/jquery.min.js',
      // 'jQuery': 'jquery/dist/jquery.min.js',
      // 'modules': 'ym',
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'assets/[name].css',
      disable: !isProd,
    }),
    ...bemJsonEntries.map((bemJsonName) => {
      const base = path.basename(bemJsonName, '.js');
      return new HtmlWebpackPlugin({
        chunks: [isProd ? 'merged' : base],
        filename: base + '.html',
        xhtml: true,
      });
    }),
    new HtmlWebpackAssetTemplatePlugin(),
    new HtmlIndexPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(srcPath, '**', '*.{jpeg,jpg,png,gif,svg,ico}'),
      context: srcPath,
    }]),

    // Production-only plugins
    ...isProd ? [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      // TODO: will it work with BEM?
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'merged',
      //   children: true,
      //   async: true,
      //   minChunks: 2,
      // }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        extractComments: true,
      }),
      new OptimizeCssnanoPlugin({
        sourceMap: true,
        cssnanoOptions: {
          preset: ['default', {discardComments: {removeAll: true}}],
        },
      }),
      new ImageminPlugin({jpegtran: null}),
      new ImageminPlugin({
        optipng: null,
        gifsicle: null,
        jpegtran: {progressive: false},
        svgo: null,
        pngquant: null,
        maxFileSize: 10240,
        plugins: [imageminMozjpeg({
          quality: 85,
          progressive: false,
        })],
      }),
      new ImageminPlugin({
        optipng: null,
        gifsicle: null,
        jpegtran: {progressive: true},
        svgo: null,
        pngquant: null,
        minFileSize: 10240,
        plugins: [imageminMozjpeg({
          quality: 85,
          progressive: true,
        })],
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
