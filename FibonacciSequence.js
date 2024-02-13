function fibonacciSequence(n) {
  let a = 0;
  let b = 1;
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return b;
}
console.log(fibonacciSequence(7));

function fibonacciSequenceArray(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciSequenceArray(6));
