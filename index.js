// 1. Print 1 - 135
for (let i = 0; i <= 135; i++) {
  console.log(i);
}

//2. Print Odd Numbers 1 - 135

for (let i = 0; i <= 135; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//3. Sum of Printed Numbers
let x = 0;

for (let i = 0; i <= 135; i++) {
  x += i;
  console.log(`Number is ${i}, sum is${x}`);
}

//4. Print the elements of an array
let X = [1, 4, 2, 12];
for (let i = 0; i < X.length; i++) {
  console.log(X[i]);
}

//5. Find Max
const arr = [12, 123, 54, 34];
let maxNum = arr[0];
for (num of arr) {
  if (num > maxNum) {
    maxNum = num;
  }
}

console.log(maxNum);

//6. Get Average

let arrAvr = [34, 56, 68];
let sumAvr = 0;
for (let i = 0; i < arrAvr.length; i++) {
  sumAvr += arrAvr[i];
}
let numAvr = sumAvr / arrAvr.length;
console.log(numAvr);
//7. Eliminate the Negatives

let arrNeg = [2, -1, 4, -3];
for (let i = 0; i < arrNeg.length; i++) {
  if (arrNeg[i] < 0) {
    arrNeg[i] = 0;
  }
}
console.log(arrNeg);

//8.Number to String
let arrString = [3, -45, 12, 56, -3];
for (let i = 0; i <= arrString.length; i++) {
  if (arrString[i] < 0) {
    arrString[i] = "turing";
  }
}
console.log(arrString);
