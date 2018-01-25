module.exports = function(bh) {
  bh.match('img_fluid', function(ctx, json) {
    bh.cbc('img_fluid', 'img-fluid');
  });
};
