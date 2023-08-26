// Web Storage API / Cookies

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
localStorage.setItem('myLocalStore', JSON.stringify(myObject2))
    // remove a stored session
// sessionStorage.removeItem('mySessionStore')
// localStorage.removeItem('myLocalStore')
// localStorage.clear()

const mySessionData = JSON.parse(sessionStorage.getItem('mySessionStore'))
const myLocalData = JSON.parse(localStorage.getItem('myLocalStore'))
console.log(mySessionData, myLocalData)