const Venda = require('../../../database/models/venda');

async function getVendas() {
    const vendas = await Venda.find() 
    return vendas
    
}

module.exports = getVendas;

