function productOfArray(num) {
  if (arr.length === 0) {
    return 1; // The product of an empty array is 1 by convention.
  }

  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}
