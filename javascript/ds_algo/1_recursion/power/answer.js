// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent) {
    // Base case: if the exponent is 0, the result is 1
    if (exponent === 0) {
      return 1;
    }
  
    // Recursive case: multiply the base by the result of the power function with a decreased exponent
    return base * power(base, exponent - 1);
  }
  
  // Example usage:
  console.log(power(2, 3)); // Output: 8 (2^3)
  console.log(power(3, 4)); // Output: 81 (3^4)