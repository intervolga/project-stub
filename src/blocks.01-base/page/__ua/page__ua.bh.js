module.exports = function(bh) {
  bh.match('page__ua', function(ctx) {
    ctx.bem(false)
      .tag('script')
      .attr('data-skip-moving', 'true')
      .content([
        '/* beautify preserve:start */',
        '!function(e,n){function r(){var e={elem:n.createElement("modernizr")' +
        '}.elem.style;try{return e.fontSize="3ch",-1!==e.fontSize.indexOf("ch' +
        '")}catch(e){return!1}}function t(){return"performance"in e}function ' +
        'a(){var n,r=e.crypto||e.msCrypto;if(r&&"getRandomValues"in r&&"Uint3' +
        '2Array"in e){var t=new Uint32Array(10),a=r.getRandomValues(t);n=a&&"' +
        'number"==typeof a[0]}return!!n}var o=n.documentElement.className;o=o' +
        '.replace("ua-no-js","ua-js"),t()&&a()&&r()?o+=" ua-modern":o+=" ua-n' +
        'o-modern",n.documentElement.className=o}(window,document);',
        '/* beautify preserve:end */',
      ], true);
  });
};

// /**
//  * Test:
//  *  - Is JS enabled
//  *  - Is modern browser (https://modernizr.com/download?csschunit-getrandomvalues-performance-dontmin)
//  */
// (function(window, document) {
//   /* eslint-disable no-var */
//
//   /**
//    * CSS Font ch unit test
//    *
//    * @return {boolean}
//    */
//   function csschunitSupport() {
//     var modElem = {elem: document.createElement('modernizr')};
//
//     var elemStyle = modElem.elem.style;
//     try {
//       elemStyle.fontSize = '3ch';
//       return elemStyle.fontSize.indexOf('ch') !== -1;
//     } catch (e) {
//       return false;
//     }
//   }
//
//   /**
//    * Navigation Timing API test
//    *
//    * @return {boolean}
//    */
//   function performanceSupport() {
//     return 'performance' in window;
//   }
//
//   /**
//    * Web Cryptography test
//    *
//    * @return {boolean}
//    */
//   function cryptoSupport() {
//     // In Safari <=5.0 `window.crypto` exists (for some reason) but is
//     // `undefined`, so we have to check it’s truthy before checking for
//     // existence of `getRandomValues`
//     var crypto = window['crypto'] || window['msCrypto'];
//     var supportsGetRandomValues;
//
//     // Safari 6.0 supports crypto.getRandomValues, but does not return the
//     // array, which is required by the spec, so we need to actually check.
//     if (crypto && 'getRandomValues' in crypto && 'Uint32Array' in window) {
//       var array = new Uint32Array(10);
//       var values = crypto.getRandomValues(array);
//       supportsGetRandomValues = values && typeof values[0] === 'number';
//     }
//
//     return !!supportsGetRandomValues;
//   }
//
//
//   // Generate updated classes
//   var htmlClasses = document['documentElement'].className;
//
//   /* ua-no-js -> ua-js */
//   htmlClasses = htmlClasses.replace('ua-no-js', 'ua-js');
//
//   /* ua-no-modern <-> ua-modern */
//
//   if (performanceSupport() && cryptoSupport() && csschunitSupport()) {
//     htmlClasses += ' ua-modern';
//   } else {
//     htmlClasses += ' ua-no-modern';
//   }
//
//   document['documentElement'].className = htmlClasses;
// })(window, document);
