// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, Async/Await

// Promises
// 3 states: Pending, Fulfilled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = true;
//   // const error = false
//   if (!error) {
//     resolve('Yes! resolved the promise!');
//   } else {
//     reject('No! rejected the promise');
//   }
// });

// console.log(myPromise);

// thenables
// myPromise
//   .then((value) => {
//     return value + ' ' + 1;
//   })
//   .then((newVal) => {
//     console.log(newVal);
//   })
//   .catch((err) => console.error(err));

// Fetch

// const users = fetch('https://jsonplaceholder.typicode.com/users');

// pending
// console.log(users);


// Fetch (1st example)

    const myUsers = {
    userList: []
    };

    const myCoolFunction = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUserData = await res.json();

    const userEmailArray = jsonUserData.map((user) => user.email);

    postToWebPage(userEmailArray);
    };

    const postToWebPage = (data) => {
    console.log(data);
    };

    // myCoolFunction()

// Fetch(2nd Example)

    const getDadJoke = async () => {

        const res = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: {
                Accept: 'application/json'
                // Accept: 'text/plain'
            }
        })

        const jsonJokeData = await res.json()
        // const textJokeData = await res.text()

        console.log(jsonJokeData)
        // console.log(textJokeData)
    }

    // getDadJoke()


// POST (1st example)

    // const jokeObject = {
    //     id: "9hiGeNZ0Tnb",
    //     joke: "They tried to make a diamond shaped like a duck. It quacked under the pressure.",
    // }

    // const postData = async (jokeObject) => {
    //     // use test api that allows us to post things
    //     const res = await fetch('https://httpbin.org/post', {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(jokeObject)
    //     })

    //     const jsonResponse = await res.json()

    //     console.log(jsonResponse)
    // }

    // postData(jokeObject)


// POST (2nd example)

const requestJoke = async (firstName, lastName) => {

    const res = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)

    const jsonResponse = await res.json()
    console.log(jsonResponse.value)
}

requestJoke('Clint', 'Eastwood')