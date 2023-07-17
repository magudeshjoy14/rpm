var trainer1 = {
    name: 'vinay hoysal',
    address: {
        streetaddress: '123,the usual street',
        city: 'bengaluru',
        state: 'karnataka',
    },
    subjects: {
        subject1: { name: 'js', level: 9 },
        subject2: { name: 'ract', level: 9 },
        subject3: { name: 'node', level: 10 },
    }
}
console.log(trainer1.address);
console.log(trainer1.address.city);
console.log(trainer1.subjects.subject1.name);