let myArray = [123, 'felight', true, NaN];

function x(abc, array) {
    for (let i = 0; i < myArray.length; i++)
        abc(myArray[i]);
}

x(function xyz() {
    console.log('xyz called');
});