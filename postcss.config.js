module.exports = ({file, options, env}) => ({
  plugins: {
    // Remove old font formats.
    // Especially SVG, so we can easilly minify all SVG images with imagemin
    'postcss-discard-font-face': ['woff2', 'woff'], // IE9+

    // Combine images to sprites with simple API
    'postcss-easysprites': 'production' === env ? {} : false,

    // Add browser prefixes and remove obsoleted
    'autoprefixer': 'production' === env ? {} : false,
  },
});
