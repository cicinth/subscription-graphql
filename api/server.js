const {GraphQLServer } = require('graphql-yoga')
const { PubSub } = require('graphql-yoga')
const resolvers = require('./graphql/Venda/resolvers')


const pubsub =  new PubSub();

const server =  new GraphQLServer ({ 
    resolvers,
    typeDefs:'./graphql/Venda/schema.graphql',
    context:{pubsub}
})

server.start(() => console.log('Server running 🤘'))
