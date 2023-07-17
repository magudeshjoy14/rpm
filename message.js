function message(to, from, message) {
    this.to = to,
        this.from = from,
        this.message = message;
}

var msg1 = new message('dhoni', 'tendulkar', 'sachin');
var msg2 = new message('i like cricket', 'sehwag', 'kumble');
var msg3 = new message('dhoni', 'tendulkar', 'sachin');

console.log(msg1);
console.log(msg2);
console.log(msg3);