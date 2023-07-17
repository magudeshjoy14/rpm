var emp = {
    name: "jack",
    salary: 606060,
    city: "banglore",

    get empCity() {
        return this.city;
    },
    get empName() {
        return this.name;
    }
};

console.log(emp.empCity);
console.log(emp.empName);