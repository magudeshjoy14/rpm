let add = (n1, n2, n3) => { return n1 + n2 + n3; }


let area = i => { return 3.14 * i * i; }

let runrate = (n1, n2, n3, n4) => {
    let runs = n1 - n3;
    let overs = n2 - n4;
    return runs / overs;
}

let divisible = j => { return j % 6 == 0; }

let even = k => { return k % 2 == 0; }

let greater = (num1, num2, num3) => {
    num1 > num2 && num1 > num3;
    return true;
}

let length = num => {
    return (num.length);
}

let odd = i => { return (i % 2 == 1); }

let hour = i => { return i / 60 / 60; }

export { add, area, runrate, divisible, even, greater, length, odd, hour };