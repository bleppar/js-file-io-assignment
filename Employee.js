'use strict'

const fs = require('fs')

class Employee {
  constructor (name, title, salary) {
    this.n = name
    this.t = title
    this.s = salary
  }

  set title (title) {
    this.t = title
  }

  set salary (salary) {
    this.s = salary
  }

  get salary () {
    return this.s
  }



  static parseFromFilePath (filePath) {
    let input = JSON.parse(fs.readFileSync(filePath))
    return new Employee(input.name, input.title, input.salary)
  }

  promote(title, raise) {
    this.title = title
    this.salary = this.salary + raise
  }}

module.exports = {
  Employee
}
