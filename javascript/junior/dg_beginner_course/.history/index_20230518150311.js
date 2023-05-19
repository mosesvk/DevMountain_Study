// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable window

// We do not have to type window. It is implied




// Local Storage 

const myObject = {
    name: 'Dave', 
    logName: function () {
        console.log(this.name)
    }
}

const myArray = ['eat', 'sleep', 'code']

sessionStorage.setItem('mySessionStore', JSON.stringify(myArray))
const mySessionData = JSON.parse(sessionStorage.getItem('mySessionStore'))
console.log(mySessionData)