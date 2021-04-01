//DO NOT EDIT CODE BELOW
//DO NOT EDIT CODE BELOW
//DO NOT EDIT CODE BELOW

const express = require('express'),
    app = express()
    cors = require('cors'),
    fs = require("fs");

app.use(cors())
app.use(express.json()) 

//parse string for regex special characters
const parseToRegEx = str => {
    let splitStr = [...str]
    for (let i = 0; i < splitStr.length; i++) {
        if (!splitStr[i].match(/^[A-Za-z0-9]+$/i)) {
            splitStr[i] = `\\${str[i]}`
        }
    }
    return new RegExp(splitStr.join(''), "g")
}

//find, stringify, and remove white space from files
const stringify = path => fs.readFileSync(path).toString().replace(/\s/g,'')


//ENDPOINTS//

//searches one file for specified count of a given string
app.get('/api/count', (req, res) => {
    let actualCount = 0,
    {path, str, count: expectedCount} = req.query

    //default expectedCount to 1 if no count was sent
    if(expectedCount === 'undefined') expectedCount = 1
    
    //search for string in student file
    let strToMatch = parseToRegEx(str),
    fileStringified = stringify(path)
    actualCount = (fileStringified.match(strToMatch) || []).length

    //did we find the number of instances we were looking for?
    res.send(+actualCount >= +expectedCount ? true : false)
})



//searches 1+ file(s) for 1+ string(s) 
//string(s) only counted once
//each string must appear in either file
app.post('/api/search', (req, res) => {
    let actualInstances = [],
    response = true,
    {pathArr, strArr} = req.body

    //search for each string in each file
    for (let i = 0; i < strArr.length; i++) {
        //create a regex version of each string
        let regExStr = parseToRegEx(strArr[i])

        for (let j = 0; j < pathArr.length; j++) {
            //stringify student file & push found string into actualInstances, if it isn't there yet
            let fileStringified = stringify(pathArr[j])
            if (fileStringified.match(regExStr) && !actualInstances.includes(strArr[i])) {
                actualInstances.push(strArr[i])
            }
        }
    }

    //expected and actual should match
    if (strArr.length != actualInstances.length) {
        response = false
    } else {
        strArr.sort()
        actualInstances.sort()
    
        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] != actualInstances[i]) {
                response = false
            }
        }
    }

    //did we find what we were looking for?
    res.send(response)
})



//searches 1+ file(s) for 1+ string(s) 
//one string must appear once in one file
//use when there are multiple correct answers
app.post('/api/check', (req, res) => {
    let {pathArr, strArr} = req.body

    //search for string in each file
    for (let i = 0; i < strArr.length; i++) {
        //create a regex version of each string
        let regExStr = parseToRegEx(strArr[i])

        for (let j = 0; j < pathArr.length; j++) {
            //stringify student file & respond with true once one instance is found
            let fileStringified = stringify(pathArr[j])
            if (fileStringified.match(regExStr)) {
                return res.send(true)
            }
        }
    }

    //if it doesn't return a true response, send false
    res.send(false)
})



app.listen(6731, () => console.log('your test server is working'));

//DO NOT EDIT CODE ABOVE
//DO NOT EDIT CODE ABOVE
//DO NOT EDIT CODE ABOVE