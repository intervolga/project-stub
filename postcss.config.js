module.exports = ({file, options, env}) => ({
  plugins: {
    'postcss-easysprites': 'production' === env ? {} : false,
    'autoprefixer': 'production' === env ? {} : false,
    'css-mqpacker': 'production' === env ? {} : false,
  },
});
