module.exports = function (bh) {
    bh.match('table__td', function (ctx, json) {
        ctx.tag('td');
    });
};