module.exports = function (bh) {
    bh.match('modal__footer', function (ctx, json) {
        ctx.mix({block: 'modal-footer'})
    });
};