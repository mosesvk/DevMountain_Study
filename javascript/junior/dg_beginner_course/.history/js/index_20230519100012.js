// Higher Order Functions

// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as the result

import {posts} from './posts.js'

posts.forEach(post => {
    console.log(post)
})

// console.clear()

const filteredPosts = posts.filter(post => {
    return post.userId = 5
})

// console.log(filteredPosts)

