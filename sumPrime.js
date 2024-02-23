function sumPrime(num) {
  let sum = 0;
  for (let i = num; i >= 2; i--) {
    let isprime = true;
    for (let j = i - 1; j >= 2; j--) {
      if (i % j == 0) {
        isprime = false;
        break;
      }
    }
    if (isprime == true) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumPrime(10));
