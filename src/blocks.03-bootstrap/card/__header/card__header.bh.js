module.exports = function (bh) {
    bh.match('card__header', function (ctx, json) {
        ctx
            .tag('h5')
            .mix({block: 'card-header'});
    })
}