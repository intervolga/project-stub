module.exports = function(bh) {
  bh.match('page', function(ctx, json) {
    var noscriptWarning = json.noscriptWarning
        || 'В вашем браузере отключен JavaScript. ' +
        'Многие элементы сайта могут работать некорректно.',
      oldBrowserWarning = json.oldBrowserWarning ||
        'Ваш браузер устарел и не обеспечивает полноценную и безопасную ' +
        'работу с сайтом. Пожалуйста <a rel="nofollow" ' +
        'onclick="window.open(this.href, \'_blank\');return false;" ' +
        'href="https://browsehappy.com/">обновите браузер</a>, чтобы ' +
        'улучшить взаимодействие с сайтом.';

    ctx
      .tag('body')
      .content([
        '<!--noindex-->',
        {elem: 'noscript', content: noscriptWarning},
        {elem: 'browsehappy', content: oldBrowserWarning},
        '<!--/noindex-->',
        ctx.content(),
        json.scripts,
      ], true);

    return [
      {html: '<!DOCTYPE html>', tag: false},
      {
        tag: 'html',
        attrs: {lang: json.lang || 'ru'},
        cls: 'ua-no-js',
        content: [
          {
            elem: 'head',
            content: [
              {tag: 'meta', attrs: {charset: 'utf-8'}},
              {
                tag: 'meta',
                attrs: {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1, ' +
                  'shrink-to-fit=no',
                },
              },
              {tag: 'title', content: json.title},
              {elem: 'ua'},
              json.head,
              json.styles,
            ],
          },
          json,
        ],
      },
    ];
  });
};
