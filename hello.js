function add(n1, n2) {
    var sum = n1 + n2;
    return sum;
}

console.log(add(10, 10));

function sub(n3, n4) {
    var sub = n3 - n4;
    return sub;
}
console.log(sub(20, 10));

for (var i = 0; i < 5; i++) {

}

var car = {
    make: 'ford',
    year: 2023,
    color: 'red',
    speed: 0,
    move: function () {
        this.speed++;
    }
};
car.move();
car.move();
car.move();
car.move();
console.log(car.speed);

function Bike(model, speed, mileage) {
    this.model = model;
    this.speed = speed;
    this.mileage = mileage
};
let emp1 = new Bike('Yamaha', 120, 45);

console.log(emp1);

class Work {
    subject;
    clas;
    year;

    constructor(subject, clas, year) {
        this.subject = subject;
        this.clas = clas;
        this.year = year;
    }
}
let emp2 = new Work('zoology', 12, 2013);
console.log(emp2.subject);
/*
for (; ;) {
    console.log("Towards infinity");
}*/