var msg1 = {
    to: 123456789,
    msg: "how r u?",
    delivered: true,
    read: false,
    from: 123456789
};

for (prop in msg1)
    console.log(property);

for (property in msg1)
    console.log(property + ":" + msg1[property]);

console.log('_______');
console.log(msg1["delivered"]);
var keyX = "msg";
console.log(msg1[keyX]);