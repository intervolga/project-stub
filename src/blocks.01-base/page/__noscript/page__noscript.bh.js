module.exports = function(bh) {
  bh.match('page__noscript', function(ctx, json) {
    ctx.tag('noscript');
  });
};
