module.exports = function (bh) {
    bh.match('list', function (ctx, json) {
        ctx.tag('ul').content(
            ctx.content().map((item)=>{
                if(ctx.isSimple(item)) return {elem: 'li', content: item};
                return item
            }),
            true
        );
    })
};