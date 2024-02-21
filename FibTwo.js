// function fibonacciOdd(n) {
//   let a = 0;
//   let b = 1;
//   let sum = 0;
//   while (b <= n) {
//     if (b % 2 !== 0) {
//       sum += b;
//     }
//     let e = a + b;
//     a = b;
//     b = e;
//   }
//   return sum;
// }

// console.log(fibonacciOdd(8));

function FibOdd(num) {
  let seq = 0;
  let seq1 = 1;
  let seq2 = 0;
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    seq2 = seq1;
    seq1 = seq;
    seq = seq1 + seq2;
    if (seq >= num) {
      break;
    } else if (seq % 2 !== 0) {
      sum += seq;
    }
  }
  return sum;
}

console.log(FibOdd(12));

