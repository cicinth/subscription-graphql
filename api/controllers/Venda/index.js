const save = require('./functions/saveVenda');
const findAll = require('./functions/getVendas');


async function saveVenda(item) {
    return save(item)
}

async function getVendas() {
    return findAll()
}

module.exports =({
    saveVenda,
    getVendas,
})


