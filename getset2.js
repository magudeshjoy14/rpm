var emp = {
    name: "jack",
    salary: 606060,
    city: "banglore",

    set empCity (empCity) {
        this.city = empCity;
    },
    set empName (empname) {
        this.Name = empName;
    }
};

emp.empCity = "mangaluru";
emp.empName = "manasa";

console.log(emp["Name"]);
console.log(emp.city);
