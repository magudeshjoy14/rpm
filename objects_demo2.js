//property pointing to the function

var myCar = {
    name: "Tiago",
    model: 2018,
    color: "orange",
    speed: 0,
    move: function () {
        this.speed++;
    }
};

myCar.move(); myCar.move(); myCar.move();
console.log(myCar.speed);