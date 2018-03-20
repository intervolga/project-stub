module.exports = function (bh) {
    bh.match('modal__content', function (ctx, json) {
        ctx.mix({block: 'modal-content'})
    });
};