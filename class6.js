class Rectangle {
    #height = 0;
    #width;
    construcor(height, width) {
        this.#height = height;
        this.#width = width;
    }
    get height() {
        return this.#height;
    }

}

let emp = new Rectangle(10, 10);

console.log(emp.height);
console.log(emp.width);