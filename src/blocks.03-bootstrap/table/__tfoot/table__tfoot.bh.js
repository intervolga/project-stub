module.exports = function (bh) {
    bh.match('table__tfoot', function (ctx, json) {
        ctx.tag('tfoot');
    });
};