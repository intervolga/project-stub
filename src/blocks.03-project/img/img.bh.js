module.exports = function(bh) {
  bh.match('img', function(ctx, json) {
    bh.cbc('img', '');

    ctx.attr('role', 'img');

    if (typeof json.content !== 'undefined') {
      ctx.tag('span');
    } else {
      ctx
        .tag('img')
        .attrs({
          role: null,
          src: json.url,
          width: json.width,
          height: json.height,
          alt: json.alt,
          title: json.title,
        }, true);

    }
  });
};
