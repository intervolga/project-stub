module.exports = function (bh) {
    bh.match('table__th', function (ctx, json) {
        ctx.tag('th');
    });
};