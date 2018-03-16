module.exports = function (bh) {
    bh.match('card__body', function (ctx, json) {
        ctx.cls('card-body')
    })
}