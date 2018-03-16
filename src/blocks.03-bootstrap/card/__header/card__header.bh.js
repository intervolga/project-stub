module.exports = function (bh) {
    bh.match('card__header', function (ctx, json) {
        ctx.cls('card-header')
    })
}