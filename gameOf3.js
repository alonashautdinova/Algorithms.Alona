function gameOfThree(number) {
  while (!number == 1) {
    if (number % 3 === 0) {
      console.log(number + "0");
      number /= 3;
    } else if ((number + 1) % 3 === 0) {
      console.log(number + "1");
      number = (number + 1) / 3;
    } else if ((number - 1) % 3 === 0) {
      console.log(number + "-1");
      number = (number - 1) / 3;
    }
  }
  console.log(1);
}
gameOfThree(100);
