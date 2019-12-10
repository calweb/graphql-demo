const {employees} = require('../db.json')
const { cards } = require('../scryfall-default-cards.json')
const uuid = require('uuid')
module.exports = {
    Query: {
        allEmployees: (root, _) => {
            console.log(root)
            
            return employees
        },
        allCards: (root, _) => {
            console.log(root)
            return cards
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