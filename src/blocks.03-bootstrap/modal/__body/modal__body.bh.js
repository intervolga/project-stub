module.exports = function (bh) {
    bh.match('modal__body', function (ctx, json) {
        ctx.mix({block: 'modal-body'})
    });
};