module.exports = function (bh) {
    bh.match('modal__dialog', function (ctx, json) {
        ctx
            .attr('role', 'document')
            .mix({block: 'modal-dialog'});
    });
};