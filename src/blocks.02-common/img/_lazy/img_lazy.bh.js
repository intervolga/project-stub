module.exports = function (bh) {
    bh.match('img_lazy', function (ctx, json) {
        ctx.cls('lazyload')
            .attrs({
                'src': ctx.process({block: '1px'}),
                'data-src': json.src,
                'data-srcset': json.srcset && json.srcset.join(', ')
            }, true);
    })
}