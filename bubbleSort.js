function bubbleSort(arr) {
  let arrLength = arr.length;
  for (let i = arrLength - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        let num = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = num;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([7, 5, 2, 4, 3, 9]));
