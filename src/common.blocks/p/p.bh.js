module.exports = function(bh) {
  bh.match('p', function(ctx, json) {
    ctx.attr('data-test', '123', true);
  });
};
