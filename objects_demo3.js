//objects are references
//objects are mutable
var emp1 = { name: "jack sparrow", age: 45 };
var emp2 = emp1;
emp2.name = "captain barbosa";
console.log(emp1.name);

var i = 10;
var j = i;
j = 1000;
console.log(i);

var studentX = 'ayesha';
var studentY = studentX;
studentY = 'arundathi';
console.log(studentX);