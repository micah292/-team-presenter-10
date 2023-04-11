const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficenumber() {
        this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}


module.exports =Manager;

// var managerOne = new Manager("juan", 80, juan@juan.com, 1111)
// managerOne.getOfficenumber();
// managerOne.getName()