module.exports = function(bh) {
  bh.match('form', function(ctx, json) {
    ctx.tag('form').bem(false);
  });
};
