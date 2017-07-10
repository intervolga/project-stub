const autoprefixBrowsers = [
  // https://www.intervolga.ru/blog/projects/standart-podderzhki-brauzerov-2016/
  'ChromeAndroid >= 35',
  'FirefoxAndroid >= 38',
  'iOS >= 8',
  'Android >= 4.4',
  'ExplorerMobile >= 11',
  'OperaMobile >= 37',
  'Chrome >= 35',
  'Firefox >= 38',
  'Opera >= 18',
  'Safari >= 8',
  'Explorer >= 11',
  'Edge >= 13',
];

module.exports = ({file, options, env}) => ({
  plugins: {
    // 'postcss-import': {},
    'autoprefixer': 'production' === env ? {
      browsers: autoprefixBrowsers,
      grid: true,
    } : false,
    // 'cssnano': 'production' === env ? {preset: 'default'} : false,
    // 'css-mqpacker': 'production' === env ? {} : false,
  },
  // sourceMap: 'production' === env ? true : 'inline',
});
