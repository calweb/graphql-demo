const {gql} = require('apollo-server')

const typeDefs = gql`
    type Employee {
        id: ID!
        first_name: String!
        last_name: String!
        email: String
    }
   type Book {
       id: Int!
       title: String!
       author: String!
       language: String!
       imageLink: String!
   }

    type Mutation {
        addEmployee(first_name: String!, last_name: String!, email: String): Employee
    }

    type Query {
        allEmployees: [Employee!]!
        allBooks: [Book!]!
        getBookById(id: Int!): Book
    }
    `

    module.exports = typeDefs