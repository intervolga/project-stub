module.exports = function (bh) {
    bh.match('table__tbody', function (ctx, json) {
        ctx.tag('tbody');
    });
};