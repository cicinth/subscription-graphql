const Venda = require('../../controllers/Venda')

const resolvers = {
    Query:{
        status: () => "server running", 
        findAllVendas: () => Venda.getVendas(),  
    },
    Mutation:{
        realizarVenda: (root, params,{pubsub}) => {
            return Venda.saveVenda(params).then(venda => {
                pubsub.publish('PUBSUB_NOVA_VENDA', {
                    novaVenda:venda
                });
                return venda
            })
        },

    },
    Subscription: {
        novaVenda: {
          subscribe: (_, __, { pubsub }) => {
            return pubsub.asyncIterator('PUBSUB_NOVA_VENDA')
          },
        },

    }
}

module.exports = resolvers