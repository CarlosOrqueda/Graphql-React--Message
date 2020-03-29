import { GraphQLServer } from 'graphql-yoga'
import path from 'path'

import resolvers from './graphql/resolvers/resolvers.index'

const server = new GraphQLServer({
    typeDefs: path.join(__dirname, 'graphql/typeDefs.graphql'),
    resolvers
})

module.exports = server