// Lexical Scope -> defines how variable names are resolved in nested functions

// Nested (child) funcitons have access to the scope of their PARENT

// This is often confused with closures. But Lexical Scope is only a PART of a closure

// global scope 
let x = 1

const parentFunction = () => {
    // local scope 
    let lexVal = 2
    console.log(x)
    console.log(lexVal)
}


// parentFunction()