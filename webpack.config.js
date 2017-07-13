const isProd = 'production' === process.env.NODE_ENV;
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

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

const levels = [
  'node_modules/bem-core/common.blocks',
  'node_modules/bem-core/desktop.blocks',
  'node_modules/bem-components/common.blocks',
  'node_modules/bem-components/desktop.blocks',
  'node_modules/bem-components/design/common.blocks',
  'node_modules/bem-components/design/desktop.blocks',
];
const techMap = {
  styles: ['css', 'scss'],
  scripts: ['vanilla.js', 'js', 'browser.js'],
  html: ['bh.js'],
};


const config = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, isProd ? 'dist' : 'build'),
    filename: '[name].bundle.js',
  },
  // devtool: isProd ? 'source-map' : 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(ttf|eot)(\?v=[\d+\.]+)?$/,
        loader: 'file-loader',
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
                minimize: false,
                sourceMap: false,
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
                minimize: false,
                sourceMap: false,
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
          'intervolga-bemrequire-loader',
          'intervolga-bembh-loader?stringify=false',
          {
            loader: 'intervolga-bemfs-loader',
            options: {
              levels: levels,
              techMap: techMap,
              stringify: false,
            },
          },
          {
            loader: 'intervolga-bemdeps-loader',
            options: {
              levels: levels,
              techMap: techMap,
              stringify: false,
            },
          },
          'intervolga-bemjson-loader?stringify=false',
        ],
      },
      {
        test: /\.js$/,
        loader: 'ymodules-loader',
      }],
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'build']),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
      },
    }),
    new webpack.ProvidePlugin({
      // '$': 'jquery',
      // 'jQuery': 'jquery',
      // 'window.jQuery': 'jquery',
      // 'windows.jQuery': 'jquery',
      // 'modules': 'ym',
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: !isProd,
    }),

    // new HtmlWebpackPlugin({
    //   template: 'build/index.html',
    // }),

    // new DashboardPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
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
    // watchOptions: {
    //   poll: true
    // }
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
