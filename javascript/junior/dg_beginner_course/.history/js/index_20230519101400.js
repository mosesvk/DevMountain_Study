// Higher Order Functions

// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as the result

import { posts } from './posts.js';

posts.forEach((post) => {
//   console.log(post)
});

// console.clear()

// filter / update each of the posts and return a copy and edited
const filteredPosts = posts.filter((post) => {
  return (post.title = 'lets go');
});

console.log(filteredPosts);
