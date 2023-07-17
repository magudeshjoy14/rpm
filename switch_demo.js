var daynumber = 3;
var dayname = ' ';

switch (daynumber) {
    case 1:
        dayname = "sunday";
        break;
    case 2:
        dayname = "monday";
        break;
    case 3:
        dayname = "tuesday";
        break;
    case 4:
        dayname = "wednesday";
        break;
    default:
        console.log("invalid choice")
}
console.log(dayname);
