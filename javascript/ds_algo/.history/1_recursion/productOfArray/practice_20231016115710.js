// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// base case -> when the array becomes empty

function productOfArray (array){
    if (array.length === 0) return 1

    console.log(array)
    // return array.splice(1, array.length - 1)
    return array[0] * productOfArray(array.slice(1))
}


console.log(productOfArray([2, 3, 4]));  // Output: 24
// console.log(productOfArray([]));         // Output: 1 (empty array)
