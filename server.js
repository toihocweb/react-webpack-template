const express = require('express')
const cors = require('cors')
const app = express()
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
}))


app.listen(5000, () => {
    console.log('listing')
})