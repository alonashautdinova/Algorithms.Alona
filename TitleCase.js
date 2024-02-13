// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.

// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

// For this algorithm, you can use the split() method.

function titleCase(str) {
  //declare the function with a string as a parameter
  let arr = str.split(" "); //create an array
  for (let i = 0; i < arr.length; i++) {
    //for loop to iterate through the array
    let word = arr[i].toLowerCase(); //create a variable and convert it to the lower case
    word = word[0].toUpperCase() + word.slice(1); // capitilize the first letter of the word
    arr[i] = word; //update the array woth elemets with new word
  }
  return arr.join(" "); // return joined array
}

console.log(titleCase("I'm a little tea pot")); // should return "I'm A Little Tea Pot".
console.log(titleCase("sHoRt AnD sToUt")); // should return "Short And Stout".
