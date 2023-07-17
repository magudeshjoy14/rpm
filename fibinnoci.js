var a = 0;
var b = 1;
var c = 0;
var c = a + b;
for (i = 0; i < 10; i++) {
    console.log(c);
    c = a + b;
    a = b;
    b = c;
}