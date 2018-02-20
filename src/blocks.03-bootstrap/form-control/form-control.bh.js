module.exports = function (bh) {
    bh.match('form-control', function (ctx, json) {
        ctx.tag('input');

        ctx.tag() == 'input' && ctx.attrs({
            value: ctx.content(),
            placeholder: json.placeholder
        }).content(false, true);

        ctx.tag() == 'textarea' && ctx.attrs({
            placeholder: json.placeholder
        });

        ctx.tag() == 'select' && ctx.content(
            ctx.content().map((item)=>{
                if(typeof item !== 'string') return item;
                return {tag: 'option', attrs: {value: ctx.generateId()}, content: item}
            }),
            true
        );
    })
}