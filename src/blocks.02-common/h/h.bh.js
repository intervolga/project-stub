module.exports = function (bh) {
    bh.match('h', function (ctx, json) {
        ctx
            .tag('h'+(json.size ? json.size : 1))
            .mix({block: ctx.tag()})
            .bem(!ctx.isSimple(ctx.content()));
    })
}