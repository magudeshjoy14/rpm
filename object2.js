var car1 = {
    name: "ford",
    model: 2018,
    color: "orange",
    style: "sports",
    speed: "80 / s",
    mileage: 7,
    amc: "1year",
    updates: "lifelong",
    start: function () {
        console.log("car started");
    },
    move: function(){
        console.log("car is moving");
    }
};
car1.start();
car1.move();