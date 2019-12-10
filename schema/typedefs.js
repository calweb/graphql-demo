const {gql} = require('apollo-server')

const typeDefs = gql`
    type Employee {
        id: ID!
        first_name: String!
        last_name: String!
        email: String
    }
    type Card {
        id: ID!
        name: String!
        scryfall_uri: String!
        image: String!
    }

    type Mutation {
        addEmployee(first_name: String!, last_name: String!, email: String): Employee
    }

    type Query {
        allEmployees(filter: employeeFilter): [Employee!]!
        allCards(filter: cardFilter): [Card!]!
    }
    input cardFilter {
        name: String
        id: ID
    }
    input employeeFilter {
        id: ID
        first_name: String
        last_name: String
        email: String
    }
    `

    module.exports = typeDefs