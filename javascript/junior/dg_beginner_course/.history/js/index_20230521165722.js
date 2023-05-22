// Fetch API requires a discussion of...
    // Callbacks, Promises, Thenables, Async/Await


// Promises
// 3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = true
    if (!error) {
        resolve('Yes! resolved the promise!')
    } else {
        reject('No! rejected the promise')
    }
})

console.log(myPromise)


// thenables
myPromise.then(value => {
    return value + ' ' + 1
})
.then(newVal => {
    console.log(newVal)
})