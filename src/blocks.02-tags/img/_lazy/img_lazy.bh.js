module.exports = function (bh) {
    bh.match('img_lazy', function (ctx, json) {
        ctx.cls('lazyload')
            .attr('data-src', json.src)
            .attr('data-srcset', json.srcset && json.srcset.join(', '))
            .attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', true);
    })
}