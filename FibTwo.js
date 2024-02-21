function fibonacciOdd(n) {
  let a = 0;
  let b = 1;
  let sum = 0;
  while (b <= n) {
    if (b % 2 !== 0) {
      sum += b;
    }
    let e = a + b;
    a = b;
    b = e;
  }
  return sum;
}

console.log(fibonacciOdd(8));
