// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.

// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

// For this algorithm, you can use the split() method.

function titleCase(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].toLowerCase();
    word = word[0].toUpperCase() + word.slice(1);
    arr[i] = word;
  }
  return arr.join(" ");
}

console.log(titleCase("I'm a little tea pot")); // should return a string.
console.log(titleCase("I'm a little tea pot")); // should return "I'm A Little Tea Pot".
console.log(titleCase("sHoRt AnD sToUt")); // should return "Short And Stout".
