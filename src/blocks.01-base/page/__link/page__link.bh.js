module.exports = function(bh) {
  bh.match('page__link', function(ctx) {
    ctx.bem(false).tag('link');
  });
};
