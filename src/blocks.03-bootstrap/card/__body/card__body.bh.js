module.exports = function (bh) {
    bh.match('card__body', function (ctx, json) {
        ctx.mix({block: 'card-body'})
    })
}