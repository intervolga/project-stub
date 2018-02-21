module.exports = function (bh) {
    bh.match('form-control', function (ctx, json) {
        switch (ctx.tag()){

            case 'textarea':
                ctx.attrs({
                    placeholder: json.placeholder
                }); break;

            case 'select':
                ctx.content(
                    ctx.content().map((item)=>{
                        if(typeof item !== 'string') return item;
                        return {tag: 'option', content: item}
                    }),
                    true
                ); break;

            default:
                ctx.tag('input').attrs({
                    type: 'text',
                    value: ctx.content(),
                    placeholder: json.placeholder
                }).content(false, true);

        }
    })
}