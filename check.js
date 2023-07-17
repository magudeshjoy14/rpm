let rpm = {
    bike: "discover",
    color: "red",
    wife: "kowsi",
    papu: "nila"
};

console.log(rpm.color);

function add(n1, n2) {
    var sum = n1 + n2;
    return sum;
}

console.log(add(5, 10));
let result = add(10, 10);
console.log(result);

function Hi(bike, color, papu) {
    this.bike = bike;
    this.color = color;
    this.papu = papu
}

var suml = new Hi("hello", "hi", "nobody");

console.log(suml);