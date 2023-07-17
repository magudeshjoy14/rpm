var num, temp, result = 0;
num = 11;
temp=num;
while (num > 0) {
    rem = num % 10;                 
    num = parseInt(num / 10);       
    result = result * 10 + rem;     
}
if (result == temp) {
    console.log(result, " is a palindrome");
} else {
    console.log(result, " is not a palindrome");
}1