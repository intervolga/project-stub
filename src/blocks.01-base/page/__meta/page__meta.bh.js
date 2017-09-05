module.exports = function(bh) {
  bh.match('page__meta', function(ctx) {
    ctx.bem(false).tag('meta');
  });
};
