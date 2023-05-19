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

sessionStorage.setItem('mySessionStore', JSON.stringify(myObject))
sessionStorage.removeItem('mySessionStore')
const mySessionData = JSON.parse(sessionStorage.getItem('mySessionStore'))
console.log(mySessionData)