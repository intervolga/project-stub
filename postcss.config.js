module.exports = ({file, options, env}) => ({
  plugins: {
    // 'postcss-import': {},
    'postcss-easysprites': 'production' === env ? {} : false,
    'autoprefixer': 'production' === env ? {} : false,
    // 'cssnano': 'production' === env ? {preset: 'default'} : false,
    // 'css-mqpacker': 'production' === env ? {} : false,
  },
  // sourceMap: 'production' === env ? true : 'inline',
});
