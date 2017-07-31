const isProd = 'production' === process.env.NODE_ENV;
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const package = require('./package.json');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProvidePlugin = require('webpack').ProvidePlugin;

const srcPath = path.resolve(__dirname, 'src');
const entries = fs.readdirSync(srcPath)
  .filter((file) => {
    return /\.js$/i.test(file);
  }).map((file) => {
    return path.join(srcPath, file);
  }).reduce(function(res, curr) {
    const key = path.basename(curr, '.js');
    res[key] = curr;
    return res;
  }, {});


const config = {
  entry: entries,
  output: {
    // context: '/.../src'
    path: path.resolve(__dirname, isProd ? 'dist' : 'build'),
    filename: '[name].bundle.js',
  },
  devtool: isProd ? 'source-map' : 'cheap-source-map',
  // 'cheap-eval-source-map'
  module: {
    rules: [
      {
        test: /\.(ttf|eot)(\?v=[\d+\.]+)?$/,
        loader: 'file-loader',
        // options: {
        //   name: 'assets/[path][name].[ext]',
        // },
      },
      {
        test: /\.woff2?(\?v=[\d+\.]+)?$/,
        loader: 'url-loader?limit=4096',
      },
      {
        test: /\.svg(\?v=[\d+\.]+)?$/,
        loader: 'svg-url-loader?limit=4096',
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader?limit=4096',
      },
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
            'postcss-loader',
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
              options: {
                minimize: isProd,
                sourceMap: isProd,
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                // includePaths: ['absolute/path/a', 'absolute/path/b']
                // sourceMap
              },
            },
          ],
        }),
      },
      {
        test: /\.bemjson\.js$/,
        use: [
          '@intervolga/bemrequire-loader',
          '@intervolga/bembh-loader?stringify=false',
          {
            loader: '@intervolga/bemfs-loader',
            options: {
              levels: package.bemlevels,
              techMap: package.bemtechs,
              stringify: false,
            },
          },
          {
            loader: '@intervolga/bemdeps-loader',
            options: {
              levels: package.bemlevels,
              techMap: package.bemtechs,
              stringify: false,
            },
          },
          '@intervolga/bemjson-loader?stringify=false',
        ],
      },
      // {
      //   test: /\.js$/,
      //   loader: 'ymodules-loader',
      //   exclude: srcPath,
      // },
      // {
      //   test: /\.jsx?$/,
      //   include: srcPath,
      //   loader: 'babel-loader',
      //   options: {
      //     // https://github.com/babel/babel-loader#options
      //     cacheDirectory: !isProd,
      //
      //     // https://babeljs.io/docs/usage/options/
      //     babelrc: false,
      //     presets: [
      //       // A Babel preset that can automatically determine the
      //       // Babel plugins and polyfills
      //       // https://github.com/babel/babel-preset-env
      //       ['env', {
      //         targets: {
      //           browsers: package.browserslist,
      //           uglify: true,
      //         },
      //         modules: false,
      //         useBuiltIns: false,
      //         debug: false,
      //       }],
      //       // Experimental ECMAScript proposals
      //       // https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-
      //       'stage-2',
      //       // JSX, Flow
      //       // https://github.com/babel/babel/tree/master/packages/babel-preset-react
      //       'react',
      //       // Optimize React code for the production build
      //       // https://github.com/thejameskyle/babel-react-optimize
      //       // TODO: ...isDebug ? [] : ['react-optimize'],
      //     ],
      //     plugins: [
      //       // Adds component stack to warning messages
      //       // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source
      //       // TODO: ...isDebug ? ['transform-react-jsx-source'] : [],
      //       // Adds __self attribute to JSX which React will use for some warnings
      //       // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-self
      //       // TODO: ...isDebug ? ['transform-react-jsx-self'] : [],
      //     ],
      //   },
      // },
    ],
    noParse: [
      /\/node_modules\/jquery\/dist\/jquery\.js/,
    ],
  },
  // externals: {
  //   jquery: 'jQuery',
  // },
  plugins: [
    new CleanWebpackPlugin(['dist', 'build']),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
      },
      'NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
      'LANG': JSON.stringify('ru'),
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'windows.jQuery': 'jquery',
      'modules': 'ym',
    }),
    new ExtractTextPlugin({
      // allChunks: true,
      filename: 'bundle.css',
      disable: !isProd,
    }),

    // new HtmlWebpackPlugin({
    //   template: 'build/index.html',
    // }),

    // new DashboardPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, isProd ? 'dist' : 'build'),
    port: 8080,
    host: 'localhost',
    // historyApiFallback: true,
    // noInfo: false,
    // stats: 'minimal',
    // publicPath: publicPath
    // lazy: true,
    // hot: true
    // overlay: {
    //   warnings: true,
    //   errors: true
    // },
    // watchContentBase: true
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};

if (isProd) {
  config.plugins = config.plugins.concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    // new webpack.optimize.CommonsChunkPlugin({}),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      // comments: /^\**!|@preserve|@license|@cc_on/,
      // beautify: false,
      // semicolons: true,
      // shebang: true,
      // mangle: {
      //   screw_ie8: true,
      //   keep_fnames: true,
      // },
      // compress: {
      //   screw_ie8: true,
      // },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'bundle.js',
      // minChunks: 2,
    }),
    // new OptimizeCssAssetsPlugin({
    //   cssProcessor: require('cssnano')({
    //     preset: 'default',
    //   }),
    //   // cssProcessorOptions: {preset: 'default'},
    // }),
  ]);
}

module.exports = config;
