module.exports = function(bh) {
  bh.match('swiper-slider', function(ctx, json) {
    var slides = json.content;

    if (!Array.isArray(slides)) {
      slides = [slides];
    }
    slides = slides.map(function(item) {
      return {
        elem: 'slide',
        content: item,
      };
    });

    var result = [{
      elem: 'wrapper',
      content: slides,
    }];

    if (json.pagination) {
      result.push({
        elem: 'pagination',
      });
    }

    if (json.buttons) {
      result.push({
        elem: 'button',
        mods: {dir: 'prev'},
      });
      result.push({
        elem: 'button',
        mods: {dir: 'next'},
      });
    }

    if (json.pagination) {
      result.push({
        elem: 'scrollbar',
      });
    }

    ctx.content(result, true);
  });
};
