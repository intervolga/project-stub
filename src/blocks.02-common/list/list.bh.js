module.exports = function (bh) {
    bh.match('list', function (ctx, json) {
        ctx.tag('ul').content(
            ctx.content().map((item)=>{
                if(typeof item !== 'string') return item;
                return {elem: 'li', content: item}
            }),
            true
        );
    })
};