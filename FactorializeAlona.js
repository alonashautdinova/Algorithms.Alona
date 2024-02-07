let factorialize = (n) => {
  let factorial = 1;

  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
};

console.log(factorialize(5));
