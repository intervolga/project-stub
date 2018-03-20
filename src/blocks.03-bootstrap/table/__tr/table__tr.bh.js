module.exports = function (bh) {
    bh.match('table__tr', function (ctx, json) {
        ctx.tag('tr');
    });
};