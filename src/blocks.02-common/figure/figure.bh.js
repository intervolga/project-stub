module.exports = function (bh) {
    bh.match('figure', function (ctx, json) {
        ctx
            .tag('figure')
            .content([
                {block: 'img', cls: 'figure-img img-fluid', src: json.src, content: json.alt},
                {elem: 'caption', content: ctx.content()}
            ], ctx.isSimple(ctx.content()));
    })
}