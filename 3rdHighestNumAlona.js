function thirdHighestNum(input) {
  var first = 0;
  var second = 0;
  var third = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > first) {
      third = second;
      second = first;
      first = input[i];
    } else if (input[i] > second) {
      third = second;
      second = input[i];
    } else if (input[i] > third) {
      third = input[i];
    }
  }
  return third;
}

console.log(thirdHighestNum([1, 3, 7, 2, 4, 8]));
