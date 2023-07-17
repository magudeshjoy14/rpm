for (j = 2; j <= 100; j++) {
    let pn = true;
    for (i = 2; i <= j; i++) {
        if (j % i == 0 && i != j)
            pn = false;
    }
    if (pn == true)
        console.log(j, '  is a prime number');
}