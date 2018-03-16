module.exports = function (bh) {
    bh.match('form-check', function (ctx, json) {
        ctx
            .tParam('ID', ctx.generateId())
            .content([
                {elem: 'input', attrs: {
                    type: json.type || 'checkbox',
                    name: json.name,
                    disabled: json.disabled,
                    checked: json.checked,
                    value: json.value
                }},
                {elem: 'label', content: ctx.content()}
            ], ctx.isSimple(ctx.content()));
    })
}