function myReplace(str, before, after) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] === before) {
      if (before[0] === before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1);
      }
      words[i] = after;
    }
  }
  return words.join(" ");
}
console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);
