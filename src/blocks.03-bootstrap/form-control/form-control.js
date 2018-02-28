// https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#android-stock-browser
(function() {
    'use strict';

    var androidFix = function() {
        var nua = navigator.userAgent;
        var isAndroid = (nua.indexOf('Mozilla/5.0') > -1
            && nua.indexOf('Android ') > -1
            && nua.indexOf('AppleWebKit') > -1
            && nua.indexOf('Chrome') === -1
        );

        if (!isAndroid) {
            return;
        }

        document.querySelectorAll('select.form-control').forEach(function(el) {
            el.classList.remove('form-control');
            el.style.width = '100%';
        });
    };

    document.addEventListener('DOMContentLoaded', androidFix);
    document.addEventListener('OnDocumentHtmlChanged', androidFix);
})();