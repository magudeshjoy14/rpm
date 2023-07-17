var num = 5;
var pn = true;
for (i = 2; i <= num; i++) {
    if (num % i == 0 && i != num)
        pn = false;
}
if (pn == true)
    console.log(num, '  is a prime number');
else
    console.log(num, ' is not a prime number');