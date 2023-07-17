let fethPromise = fetch()

let products =[];
fethPromise
.then((response)=>{
    if(!response.ok) {
        throw new error('something went wrong. Error code: ${response.status}')
    }
})
