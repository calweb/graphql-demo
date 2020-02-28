const {employees} = require('../db.json')
const books = require('../books.json')
const uuid = require('uuid')
module.exports = {
    Query: {
        allEmployees: (root, _) => {
            console.log(root)
            
            return employees
        },
        allBooks: (root, args) => {
            return books
        },
        getBookById: (parent, { id } ) => {
            return books.find(book => book.id === id)
        }
    },
    Mutation: {
        addEmployee: (_, data) => {
            const newEmployee = Object.assign(data, {id: uuid() })
            employees.push(newEmployee)
            return newEmployee
        }
    }
}