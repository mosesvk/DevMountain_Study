////////////////////PROBLEM 1////////////////////
/*
    Create an array that contains the following values: 
    the number 4, 
    a string of 'abc', 
    an array of the strings 'cat', 'dog', 'bird', 
    and the number 77. 
    Call the array 'myArr'.
*/

//CODE HERE

const myArr = [4, 'abc', ['cat', 'dog', 'bird'], 77];

////////////////////PROBLEM 2////////////////////
/*
    The following array, nestedLetters, contains many levels of nested arrays.
    Using bracket notation, access the letter 'z' and save it to a variable
    called 'foundZ'.
*/

const nestedLetters = ['m', 'g', 'e', 'q', 'h', ['n', 'b', ['v', 'z', 'y', 'r']], 'a']

//CODE HERE

const foundZ = nestedLetters[5][2][1]


////////////////////PROBLEM 3////////////////////
/*
    Use the spread operator to combine the following arrays into one array.
    Name the new array 'animals'.
*/

//DO NOT EDIT CODE BELOW
const forest = ['deer', 'bear', 'squirrel']
const ocean = ['whale', 'shark', 'dolphin', 'octopus', 'starfish']
const savannah = ['lion', 'zebra', 'lion', 'giraffe']
const desert = ['rattlesnake', 'coyote']
//DO NOT EDIT CODE ABOVE

//CODE HERE

const animals = [...forest, ...ocean, ...savannah, ...desert];

/*
    Now use the spread operator to make a copy of your animals array.
    Call the new array 'animalsCopy' and add 'elephant' onto the end of the array.
*/

//CODE HERE
newValue = ['elephant']

const animalsCopy = [...animals, ...newValue]

////////////////////PROBLEM 4////////////////////
/*
    Write an arrow function called 'compareNums' that takes in 2 parameters, 
    which will be numbers. 
    The function should return the bigger number. 
    If the numbers are the same, just return the number.
*/

//CODE HERE

let compareNums = (num1, num2) => {
    if (num1 > num2){
        return num1
    }
    return num2
}
  
////////////////////PROBLEM 5////////////////////
/*
    Write a one line arrow function called 'bestMovie' that takes in one parameter,
    which will be a string of a movie title. 
    The function should return the string: 'MOVEIEPARAM is the best movie ever!'. 
    For example, if we passed in 'Sharknado', 
    we would expect the function to return 'Sharknado is the best movie ever!'
*/

//CODE HERE
  const bestMovie = movie => `${movie} is the best movie ever!`;
  
////////////////////PROBLEM 6////////////////////
/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/

//CODE HERE
  const jsNinja = () => 'I am a JavaScript ninja!';

////////////////////PROBLEM 7////////////////////

//DO NOT EDIT CODE BELOW
  const gameInfo = {
    name: 'Splendor', 
    desc: 'Renaissance merchants race to grab gems, acquire property, and please nobility.', 
    players: [2,3,4],
    playingTime: 30,
    minAge: 10,
    rating: 1
  }
//DO NOT EDIT CODE ABOVE

/*
    You don't agree with whowever rated Splendor,
    delete the rating property off of the gameInfo object.
*/

//CODE HERE
  
delete gameInfo.rating

////////////////////PROBLEM 8////////////////////

//DO NOT EDIT CODE BELOW
  const shapes = {
    triangle: 3,
    square: 4, 
    rectangle: 4,
    pentagon: 5,
    hexagon: 6, 
    septagon: 7,
    octagon: 8
  }
//DO NOT EDIT CODE ABOVE

/*
    You only like even numbers, so get rid of the other shapes by
    looping over the shapes object and deleting any property whose value is odd number.
*/

//CODE HERE

for (let key in shapes){
    if (shapes[key] % 2 === 1){
        delete shapes[key]
    }
}





////////////////////PROBLEM 9////////////////////

//DO NOT EDIT CODE BELOW
const classes = [
    {
      title: 'JavaScript 101',
      instructor: 'Emily',
      days: ['M', 'W', 'F'],
      time: 11,
      inPerson: false,
      homework: true
    },
    {
      title: 'UI Design',
      instructor: 'Daniel',
      days: ['T', 'Th'],
      time: 9,
      inPerson: true,
      homework: false
    },
    {
      title: 'Creating Servers',
      instructor: 'Jess',
      days: ['M', 'W'],
      time: 1,
      inPerson: true,
      homework: true
    }
  ]
//DO NOT EDIT CODE ABOVE
  
/*
    Write a for loop that loops over the classes array,
    nest a for in loop to loop over each object.
    Check to see if any of the properties' values are the boolean 'true'.
    If they are true, change them to false so that now you have 
    all online classes with no homework.
*/

//CODE HERE

for (let i = 0; i < classes.length; i++){
    for (let j in classes[i]){
        if (classes[i][j] === true){
            classes[i][j] = false
        }
    }
}

// for (let key in )

////////////////////PROBLEM 10////////////////////
/*
    Use nested for loops to compare the letters in the lettersToPair array below.
    When you find a pair, push the indexes of the letters into the pairsArray as an array.
    For example, looping the array ['b', 'x', 'x', 'b'] 
    should create the array [[0,3], [1,2]].
*/
  
//DO NOT EDIT CODE BELOW  
const lettersToPair = ['e', 'k', 's', 'a', 'e', 's', 'a', 'n', 'k', 'n']  
let pairsArray = []
//DO NOT EDIT CODE ABOVE

//CODE HERE

for (i = 0; i < lettersToPair.length; i++){
    for (j = i + 1; j < lettersToPair.length; j++){
        if (lettersToPair[i] === lettersToPair[j]){
            pairsArray.push([i, j])
        }
    }
}    

//////////////////////////////////PROBLEMS 11-14//////////////////////////////////
/*
    Problems 12-14 are all going to build off of problem 11. 
*/


////////////////////PROBLEM 11////////////////////
/*
    Write a constructor function called Dog.
    Dog will build dog objects with name, age, breed, and tricks properties.
    Those values should come from the functions parameters: name, age, breed, tricks (in order).
*/

//CODE HERE

function Dog(name, age, breed, tricks){
    this.name = name;
    this.age = age; 
    this.breed = breed;
    this.tricks = tricks
}

/*
    Invoke your dog constructor passing in 'Fido' for the name, 3 for the age, 
    'Jack Russell' for the breed, and an array containing the strings 'sit' and 'shake'.
    Store the result in a variable called 'fido'.
*/

//CODE HERE

const fido = new Dog('Fido', 3, 'Jack Russell', ['sit', 'shake'])

////////////////////PROBLEM 12////////////////////
/*
    Write a function called 'bark' that will return the string: 'NAME says bark!'
    You will give context to 'bark' using the .call method.
    NAME will come from that context, so you should reference 'this.name' to get the correct name.
*/

//CODE HERE

function bark(){
    return `${this.name} says bark!`
}



/*
    Invoke the call method on bark, passing in fido as the context
    and saving the result to a variable called fidoSpeak.
*/

//CODE HERE
const fidoSpeak = bark.call(fido)

////////////////////PROBLEM 13////////////////////
/*
    Write a function called 'teachTrick' that will take in one parameter, trick, 
    and push that trick into a trick's array and return the updated array.
    You will give context to 'techTrick' using the .bind method.
    Tricks will come from that context, so you should reference 'this.tricks' to access the correct array.
*/

//CODE HERE

function teachTrick(trick){
    this.tricks.push(trick)
    return this.tricks
}d



/*
    Invoke the bind method on teachTrick, passing in fido as the context and the string 'stay' as a trick.
    Save the result to a variable called 'teachStay'.
*/

//CODE HERE

const teachStay = teachTrick.bind(fido, 'stay')

////////////////////PROBLEM 14////////////////////
/*
    Write a function called 'dogIntro' that will take in two parameters, treat and toy,
    and return the string: 'NAME is a BREED that loves TREAT and their TOY!'
    You will give context to 'dogIntro' using the .apply method.
    Remember to use the 'this' keyword to access values from the context that you will apply.
*/

//CODE HERE

function dogIntro(treat, toy){
    return `${this.name} is a ${this.breed} that loves ${treat} and their ${toy}!`;
}

/*
    Invoke the apply method on dogIntro, passing in fido as the context 
    with 'chicken' as the treat and 'tennis ball' as the toy
    and save the result to a variable called fidoIntro.
*/

//CODE HERE

const fidoIntro = dogIntro.apply(fido, ['chicken', 'tennis ball'])

////////////////////PROBLEM 15////////////////////
/*
    Write a constructor function called Phone.
    Phone will build phone objects with brand, model, storage, color, and sold properties.
    Those values should come from the function's parameters: brand, model, storage, color, sold (in order).
*/

//CODE HERE

function Phone(brand, model, storage, color, sold){
    this.brand = brand; 
    this.model = model; 
    this.storage = storage; 
    this.color = color; 
    this.sold = sold
}

/*
    Next make three new phones using your constructor function.
    Save them to the variables below (make sure you uncomment them).
    You send in values of your choice. Just make sure that they match these data types:
    - brand, string
    - model, string
    - storage, number
    - color, string
    - sold, this should be false for each phone
*/

//CODE HERE
  let phone1 = new Phone('t-mobile', 'iphone10', 32, 'pink', false)

  let phone2 = new Phone('verizon', 'iphone11', 16, 'red', false)
  
  let phone3 = new Phone('att', 'iphone10', 8, 'green', false)
  
/*
    Last, add a prototype method to Phone.
    Call the method 'sell'.
    Sell should be a function that changes the value of sold to true and
    returns the string: 'BRAND MODEL has been sold.'
    Don't forget about the context of BRAND and MODEL.
*/

//CODE HERE

Phone.prototype.sell = function() {
    this.sold = true;
    return `${this.brand} ${this.model} has been sold.`
}