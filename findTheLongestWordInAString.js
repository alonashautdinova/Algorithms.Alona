function findLongestWord(str) {
  //function with a string as a paramenter
  let arr = str.split(" "); // create an array
  let wordLength = 0; // variable to hold the max length word
  for (let i = 0; i < arr.length; i++) {
    //for loop to iterate through the array
    if (arr[i].length > wordLength) {
      // condition to compare the current length of the cur el with max word
      wordLength = arr[i].length;
    }
  }
  return wordLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // should return 6.
console.log(findLongestWord("May the force be with you")); // should return 5.
