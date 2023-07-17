function prime(num) {
    var pn = true;
    for (i = 2; i <= num; i++) {
        if (num % i == 0 && i != num)
            return false;
        else
            return true;
    }
}
console.log(prime(5));
console.log(prime(10));