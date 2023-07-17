var user = {
    name: 'vinay hoysala',
    age: 1000
};

var clone = {};

Object.assign(clone,user);

console.log(user);
console.log(clone);

clone.name='bahubali';

console.log(user);
console.log(clone);