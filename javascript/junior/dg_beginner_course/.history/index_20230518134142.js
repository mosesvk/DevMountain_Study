// JSON: JavaScript Object Notation ----------------> 

    /* 
        JSON is used to Send and Receive data
        JSON is a text format that is completely language independent
        Meaning JSON is used to send & receivve data in many languages
        Not just JS
    */


const myObj = {
    name: 'Dave',
    hobbies: ['eat', 'sleep', 'code'],
    hello: function () {
        console.log('Hello')
    }
}

console.log(myObj)
console.log(myObj.name)
myObj.hello()
console.log(typeof myObj)

const sendJSON = JSON.stringify(myObj)
console.log(sendJSON)
console.log(typeof myObj)
console.log(sendJSON.name)