function runrate(n1, n2, n3, n4) {
    runs = n1 - n3;
    overs = n2 - n4;
    required = runs / overs;
    return required;
}
console.log(runrate(350,50,70,10));