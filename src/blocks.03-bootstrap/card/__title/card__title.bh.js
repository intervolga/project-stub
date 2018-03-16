module.exports = function (bh) {
    bh.match('card__title', function (ctx, json) {
        ctx
            .tag('h5')
            .cls('card-title');
    })
}