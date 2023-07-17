class Employee {
    id;
    name;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    doSomething() {
        console.log(this.name + 'doing something');
    }
}

let emp1 = new Employee(123, 'vinay', 10101010);

console.log(emp1);
emp1.doSomething();

let abc = () => (1);

console.log(abc());