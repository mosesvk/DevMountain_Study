import playGuitar from './guitars.js'
import {shredding, plucking as fingerpicking} from './guitars.js'
import User from './user.js'

console.log(playGuitar())
console.log(shredding())
console.log(fingerpicking())


const me = new User('test@test.com')
console.log(me)
me.greeting()