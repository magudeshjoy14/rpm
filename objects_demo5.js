var msg1 = {
    to: 123456789,
    msg: "how r u?",
    delivered: true,
    read: false,
    from: 123456789
};

for (property in msg1)
    console.log(property + ":" + msg1[property]);

console.log("_______");
msg1.timestamp = 10;

for (property in msg1)
    console.log(property + ":" + msg1[property]);

console.log("_______");

delete msg1.from;
for (property in msg1)
    console.log(property + ":" + msg1[property]);