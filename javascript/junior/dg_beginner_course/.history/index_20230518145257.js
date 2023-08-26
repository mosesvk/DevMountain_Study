// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable window

// We do not have to type window. It is implied

window.alert('ok')



// Local Storage 

const myObject = {
    name: 'Dave', 
    logName: function () {
        console.log(this.name)
    }
}

const myArray = ['eat', 'sleep', 'code']

sessionStorage.setItem('mySessionStore', myArray)
const mySesstionData = sessionStorage.getItem('mySessionStore')
console.log(mySesstionData)