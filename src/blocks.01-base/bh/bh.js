BH = new (require('@intervolga/bh-ext')).BH;

BH.setOptions({
    jsAttrName: 'data-bem',
    jsAttrScheme: 'json',
    xhtml: false
});

require('../../blocks.02-common/h/h.bh.js')(BH);
require('../../blocks.03-bootstrap/container/container.bh.js')(BH);

window.BH = BH;
