
const fetchPromise1 = fetch(

);
const fetchPromise2 = fetch(

);

const fetchPromise3 = fetch(

);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
.then((responses)=>{
    for(const response of responses) {
        console.log('$')
    }
})