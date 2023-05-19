// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable window

// We do not have to type window. It is implied




// Local Storage 

const myObject = {
    name: 'Dave', 
    hobbies: ['eat', 'sleep', 'code'],
    logName: function () {
        console.log(this.name)
    }
}

const myObject2 = {
    name: 'East', 
    hobbies: ['eat', 'sleep', 'code'],
    logName: function () {
        console.log(this.name)
    }
}

sessionStorage.setItem('mySessionStore', JSON.stringify(myObject))
localStorage.setItem('mySessionStore2', JSON.stringify(myObject2))
    // remove a stored session
// sessionStorage.removeItem('mySessionStore')

const mySessionData = JSON.parse(sessionStorage.getItem('mySessionStore'))
const mySessionData2 = JSON.parse(localStorage.getItem('mySessionStore2'))
console.log(mySessionData, mySessionData2)