const { buildSchema } = require('graphql')

const UserSchema = new buildSchema(`
    type User {
        name: String!
        password: String!
    }

    type RootQuery {
        getData: User!
    }

    schema {
        query: RootQuery
    }

`)

module.exports = UserSchema