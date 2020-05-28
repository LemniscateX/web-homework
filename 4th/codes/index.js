function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype.show = function () {
    console.log(`${this.name} has a salary of ${this.salary}.`);
};



// Manager原型继承
function Manager(name, salary, subordinates) {
    Employee.call(this, name, salary);
    this.subordinates = subordinates;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getInferiors = function () {
    return this.subordinates;
};



// Manager复制继承
function Manager(name, salary, subordinates) {
    const employee = new Employee(name, salary);
    for (var p in employee){
        Manager.prototype[p] = employee[p];
    }
    this.subordinates = subordinates;
}

for (var p in Employee.prototype) {
    Manager.prototype[p] = Employee.prototype[p];
}
Manager.prototype.getInferiors = function () {
    return this.subordinates;
};



// Secretary原型继承
function Secretary(name, salary, bosses) {
    Employee.call(this, name, salary);
    this.bosses = bosses;
}

Secretary.prototype = Object.create(Employee.prototype);
Secretary.prototype.constructor = Secretary;
Secretary.prototype.getSuperior = function () {
    return this.bosses;
};



// Secretary复制继承
function Secretary(name, salary, bosses) {
    const employee = new Employee(name, salary);
    for (var p in employee){
        Secretary.prototype[p] = employee[p];
    }
    this.bosses = bosses;
}

for (var p in Employee.prototype) {
    Secretary.prototype[p] = Employee.prototype[p];
}
Secretary.prototype.getSuperior = function () {
    return this.bosses;    
};


const emp = new Employee('Jerry', '10000');
const man = new Manager('Manager1', '30000', ['subordinate1', 'subordinate2', 'subordinate3']);
const sec = new Secretary('Secretary1', '30000', ['boss1', 'boss2', 'boss3']);
emp.show();
man.show();
sec.show();
console.log(emp);
console.log(man);
console.log(sec);