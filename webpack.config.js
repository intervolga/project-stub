const isProd = 'production' === process.env.NODE_ENV;
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProvidePlugin = require('webpack').ProvidePlugin;

const srcPath = path.resolve(__dirname, 'src');
const entries = fs.readdirSync(srcPath)
  .filter((file) => {
    return /\.js$/i.test(file);
  }).map((file) => {
    return path.join(srcPath, file);
  }).reduce(function (res, curr) {
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
  scripts: ['js'],
  html: ['bh.js'],
};


module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, isProd ? 'dist' : 'build'),
    filename: isProd ? 'bundle.js' : '[name].bundle.js',
  },
  devtool: isProd ? 'source-map' : 'cheap-eval-source-map',
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
                // minimize
                // sourceMap
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
                // sourceMap
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
      }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'windows.jQuery': 'jquery',
      //TODO: modules
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: !isProd,
    }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
    // })
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': isProd ? 'production' : 'development',
      },
    }),


    // new webpack.optimize.UglifyJsPlugin({
    //   beautify: false,
    //   mangle: {
    //     screw_ie8: true,
    //     keep_fnames: true,
    //   },
    //   compress: {
    //     screw_ie8: true,
    //   },
    //   comments: false,
    // }),
    // new ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   'windows.jQuery': 'jquery',
    // }),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['polyfills', 'vendor'].reverse()
    // }),
    //
    // new HtmlWebpackPlugin({
    //   template: 'src/index.html',
    //   chunksSortMode: 'dependency'
    // })
    // new DashboardPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  // devServer: {
  //   port: 7777,
  //   host: 'localhost',
  //   historyApiFallback: true,
  //   noInfo: false,
  //   stats: 'minimal',
  //   publicPath: publicPath
  // },
};
