var time = 15;
var greeting = "not yet set";
if (time < 10) {
    greeting = "good morning";
} else if (time < 20) {
    greeting = "good day";
} else {
    greeting = "good evening";
}
console.log(greeting);