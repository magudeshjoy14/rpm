
console.log(1 && 2 && null && 3);
class Rec {
    id;
    name;
    number;

    constructor(id, name, number) {
        this.id = id,
            this.name = name,
            this.number = number
    }
};
let emp1 = new Rec(1023, 'magudesh', 1227);
console.log(emp1);
console.log(emp1.name);