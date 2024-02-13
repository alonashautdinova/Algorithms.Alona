function sumAll(arr) {
  //declare the function with an array as parameter
  let min = Math.min(...arr); // create a variable with the smallest number in array
  let max = Math.max(...arr); //create a variable with the largest number in array
  let sum = 0; // create a variable with a sum
  for (let i = min; i <= max; i++) {
    // Loop through all numbers from the smallest to the largest
    sum += i; // add eaxh number to the sum variable
  }
  return sum; // return the whole sum
}
console.log(sumAll([1, 4])); // should return 10.
console.log(sumAll([4, 1])); // should return 10.
console.log(sumAll([5, 10])); // should return 45.
