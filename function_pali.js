function palindrome(num) {
    var num, temp, result = 0;
    temp = num;
    while (num > 0) {
        rem = num % 10;
        num = parseInt(num / 10);
        result = result * 10 + rem;
    }
    {
        if (result == temp)
            return true;
        else
            return false;

    }
}
console.log(palindrome(121));
console.log(palindrome(100));