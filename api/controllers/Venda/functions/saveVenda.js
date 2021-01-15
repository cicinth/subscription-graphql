const Venda = require('../../../database/models/venda');

async function saveVenda(item) {
    return Venda.create(item)
}

module.exports = saveVenda;

 