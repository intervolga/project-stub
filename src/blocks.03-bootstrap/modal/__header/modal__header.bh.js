module.exports = function (bh) {
    bh.match('modal__header', function (ctx, json) {
        ctx.mix({block: 'modal-header'})
    });
};