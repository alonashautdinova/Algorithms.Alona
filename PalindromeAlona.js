// Declare a function isPalindrome(str) that takes a string as an input.
// Return true if the given string is a palindrome. Otherwise, return false.
function isPalidrome(str) {
  var word = str.split("").join("").toLowerCase();
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] != word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalidrome("radar"));
