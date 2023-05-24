// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, Async/Await

// Promises
// 3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
  const error = true;
  // const error = false
  if (!error) {
    resolve('Yes! resolved the promise!');
  } else {
    reject('No! rejected the promise');
  }
});

// console.log(myPromise);

// thenables
myPromise
  .then((value) => {
    return value + ' ' + 1;
  })
  .then((newVal) => {
    // console.log(newVal);
  })
//   .catch((err) => console.error(err));

// Fetch

const users = fetch('https://jsonplaceholder.typicode.com/users');

// pending
console.log(users);

const newUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    const data = res.json();
    console.log(data);
  })
  .catch((err) => console.error(err));
