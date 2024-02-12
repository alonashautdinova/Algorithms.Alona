function findLongestWord(str) {
  let arr = str.split(" ");
  let wordLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > wordLength) {
      wordLength = arr[i].length;
    }
  }
  return wordLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // should return 6.
console.log(findLongestWord("May the force be with you")); // should return 5.
