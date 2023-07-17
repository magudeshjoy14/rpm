function Employee(id, name, salary,) {
    this.id = id,
        this.name = name,
        this.salary = salary,
        this.age = -1;
}

let emp1 = new Employee(123, "jack", 505050);
emp1.city = "bengaluru";

let emp2 = new Employee(111, "mack", 606060);
console.log(emp1);
console.log(emp2);