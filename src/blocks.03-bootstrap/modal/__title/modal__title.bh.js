module.exports = function (bh) {
    bh.match('modal__title', function (ctx, json) {
        ctx
            .tag('h5')
            .mix({block: 'modal-title'});
    });
};