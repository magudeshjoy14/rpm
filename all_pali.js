var num, temp, result = 0;
for (num = 10; num >= 1000; num++)
    temp = num;
while (num > 0) {
    rem = num % 10;
    num = parseInt(num / 10);
    result = result * 10 + rem;
}
if (result == temp) {
    console.log(result, " is a palindrome");
} else {
    console.log(result, " is not a palindrome");
}
{
    var rev, d, n;
    while (n != 0) {
        d = n % 10;
        rev = rev * 10 + d;
        n = n / 10;
    }
    if (rev == n)
        return 1;
    else
        return 0;
}
{
    for (i = 100; i <= 500; i++) {
        if (i == 1)
            console.log(i);
    }
    return 0;
}
