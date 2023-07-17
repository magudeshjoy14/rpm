
function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let result1 = add(6, 6);
let result2 = add(200, 1);
console.log(result1, result2);
console.log(add(1, 2));
console.log(add(10, 60));
console.log(add(40, 100));
console.log(add(60, 70));

function isEven(num) {
    if (num % 2 == 0)
        return true;
    else
        return false;
}

console.log(isEven(10));
console.log(isEven(11));

function areaOfCircle(radius) {
    let area = radius * radius * 3.142;
    return area;
}

console.log(areaOfCircle(123.123));
console.log(areaOfCircle(10.11));