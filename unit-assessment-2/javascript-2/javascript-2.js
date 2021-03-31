////////////////////PROBLEM 1////////////////////

//DO NOT EDIT CODE BELOW
let foods = [
  {
    name: 'bread',
    carbs: 36,
    protein: 8,
    fat: 2,
  },
  {
    name: 'mayo mustard mix',
    carbs: 0,
    protein: 0,
    fat: 10,
  },
  {
    name: 'turkey',
    carbs: 0,
    protein: 25,
    fat: 1,
  },
  {
    name: 'cheese',
    carbs: 0,
    protein: 5,
    fat: 7,
  },
]
//DO NOT EDIT THE CODE ABOVE

/*
  Use the .forEach method to modify each food object in the foods array above to include calories. 
  Calories can be calculated by multiplying carbs by 4, protein by 4, fat by 9, 
  and then adding the results together. 
*/

//CODE HERE

foods.forEach(obj => {
  return obj.calories = (obj.carbs * 4) + (obj.protein * 4) + (obj.fat * 9) 
})

//////////////////////////////////PROBLEMS 2-4//////////////////////////////////
/*
  For problems 2-4, you will be working with the products array below.
  Think of this array as a store's inventory.
*/

//DO NOT EDIT CODE BELOW
const products = [
  {
    name: 'backpack',
    color: ['red', 'yellow'],
    price: 500,
  },
  {
    name: 'shirt',
    color: ['blue'],
    price: 400,
  },
  {
    name: 'shoes',
    color: ['red'],
    price: 1200,
  },
  {
    name: 'socks',
    color: ['yellow', 'blue'],
    price: 200,
  },
  {
    name: 'pants',
    color: ['blue', 'red'],
    price: 1000,
  },
]
//DO NOT EDIT CODE ABOVE

////////////////////PROBLEM 2////////////////////
/*
  You've decided to have a sale on everything you have in stock. It's all going to be 25% off. 
  Using the map method, make a copy of your products array with the prices reduced by 25%. 
  Save the copy to a new variable called 'saleProducts'.
*/

//CODE HERE

const saleProducts = products.map((elem) => {
  elem.price *= 0.75
  return elem 
})



////////////////////PROBLEM 3////////////////////
/*
  A customer has placed an order - they want one of every product that has blue on it. 
  Using the filter method on saleProducts, return the products that have blue in their color array 
  to a new variable called 'blueProducts'. 
  (Hint: look up the array method 'includes' on MDN)
*/

//CODE HERE

const blueProducts = saleProducts.filter(function(elem, i){
  if (elem.color.includes('blue')){
    return elem.color
  }
})



////////////////////PROBLEM 4////////////////////
/*
  Now you'd like to get them their order total. 
  Use the reduce method to add up the prices of the blueProducts. 
  Save the result to a variable called orderTotal.
*/

//CODE HERE

const orderTotal = blueProducts.reduce(function(acc, elem){
  return (acc += elem.price)
}, 0)

//////////////////////////////////PROBLEMS 5-8//////////////////////////////////
/*
  For these problems we will be using the objects below, contactInfo and shippingInfo,
  as well as objects that you will make based off these two.
*/

//DO NOT EDIT CODE BELOW
const contactInfo = {
  name: 'Helen',
  phoneNumber: 1234445555,
  email: 'helen@mymail.com',
}

const shippingInfo = {
  name: 'Helen',
  street: '100 E. Main Street',
  city: 'Anytown',
  state: 'AZ',
  zipCode: 85004,
}
//DO NOT EDIT CODE ABOVE

////////////////////PROBLEM 5////////////////////
/*
  Using the Object.assign method, create a new object called 'helensInfo'
  that combines the contactInfo and shippingInfo objects.
*/

//CODE HERE

const helensInfo = Object.assign({}, contactInfo, shippingInfo)

////////////////////PROBLEM 6////////////////////
/*
  Helen has a daughter named Ellen that lives at the same address.
  Using the spread operator, make a copy of the helensInfo object and name it 'ellensInfo'.
  Overwrite the name property to 'Ellen' and the email address to 'ellen@email.com'.
*/

//CODE HERE

const ellensInfo = {...helensInfo}
ellensInfo.name = 'Ellen'
ellensInfo.email = 'ellen@email.com'
////////////////////PROBLEM 7////////////////////
/* 
  Save Ellen's email to a new variable using destructuring.
*/

//CODE HERE

const {email} = ellensInfo

////////////////////PROBLEM 8////////////////////
/*
  In a single expression (one line), save the zip code and state 
  from shippingInfo to new variables using destructuring.
*/

//CODE HERE

const {zipCode, state} = shippingInfo 

//////////////////////////////////PROBLEMS 9-11//////////////////////////////////
/*
  Use the userInfo object below to complete problems 9-11.
*/

//DO NOT EDIT CODE BELOW
const userInfo = {
  name: 'gn@rly_c0der_007',
  password: 'reallySuperSecret1',
  settings: {
    theme: 'dark',
    fontSize: 14,
    alerts: false,
  },
  topics: ['food', 'hiking', 'gaming', 'tech'],
  comments: [
    {
      post: 'New Phones Coming in September',
      comment: 'Excited to get one of these!',
      upvotes: 5,
      responses: [
        {
          userId: 3827,
          response: 'Me too!',
        },
        {
          userId: 1040,
          response: 'Want to learn about the pyramid scheme I bought into?',
        },
      ],
    },
    {
      post: 'Best Hiking in Your Town',
      comment: 'Trail #402 is closed in the winter',
      upvotes: 100,
      responses: [
        {
          userId: 1084,
          response: 'Thanks for the info',
        },
        {
          userId: 5498,
          response: 'You saved me a trip out there, thank you!',
        },
        {
          userId: 3597,
          response: 'Good to know',
        },
      ],
    },
  ],
}
//DO EDIT CODE ABOVE

////////////////////PROBLEM 9////////////////////
/* 
  Set the value of shouldAlert to the value of alerts in gn@rly_c0der_007's settings
  using dot notation.
*/

//CODE HERE

const shouldAlert = userInfo.settings.alerts

////////////////////PROBLEM 10////////////////////
/*
  Set the value of topic below to the last item in gn@rly_c0der_007's topics array
  using dot and/or bracket notation.
*/

//CODE HERE

const topic = userInfo.topics[userInfo.topics.length - 1]

////////////////////PROBLEM 11////////////////////
/*
  Set the value of commenterId below to the userId of the first response to 
  gn@rly_c0der_007's 2nd comment using dot/bracket notation.
*/

//CODE HERE

const commenterId = userInfo.comments[1].responses[0].userId

////////////////////PROBLEM 12////////////////////
/*
  Create an object called 'person' that has the following properties. 
  Make sure you match the data types. You can choose the actual values.
      - name, string
      - age, number
      - jobs, array with at least 3 items that are strings
      - birthday, function that adds 1 to the age, use the 'this' keyword to access age
      - favorites, an object that has the following properties
      - color, string
      - number, number
      - book, string
      - kids, an array of kid objects
      - each kid should have a name (string) and an age (number)
      - create at least 2 kid objects
*/

//CODE HERE

const person = {
  name: 'Moses', 
  age: 26, 
  jobs:['abc', 'efg', 'hij'], 
  birthday: function(){
    this.age += 1
  }, 
  favorites: {
    color: 'blue', 
    number: 7, 
    book: 'eragon;', 
  },
  kids: [{
    name: 'james', 
    age: 20
  },{
    name: 'Michael', 
    age: 25
  }]
}


//////////////////////////////////PROBLEMS 13-14//////////////////////////////////
/*
  For the last two problems, you will be determining the 
  context of 'this' in an object and function, respectively.
*/

////////////////////PROBLEM 13////////////////////
/*
  What is the context of 'this' in the workout object? 
  Uncomment the correct answer below.
*/

const workout = {
  type: 'strength training',
  duration: 45,
  complete: false,
  doWorkout: function () {
    return (this.complete = true)
  },
}

// let context1 = myFunc
// let context1 = window
// let context1 = global
let context1 = workout

////////////////////PROBLEM 14////////////////////
/*
  What is the context of 'this' in the myFunc function? 
  Uncomment the correct answer below.
*/

function myFunc() {
  return this
}

// let context2 = myFunc
let context2 = window
// let context2 = global
// let context2 = workout
