let x = [29, 72, 98, 13, 87, 66, 52, 51, 36];
//functions take an array as a parameter
//define 2 variables, one to hold the min num index, the other one to do the switch
//for loop to iterate through the array
//for loop to make the comparisons through the array
//condition to find the min number(index)
// switch position to put the smallest number in the beginning

function SelectionSort(arr) {
  let Minindex;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    Minindex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[Minindex]) {
        Minindex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[Minindex];
    arr[Minindex] = temp;
  }
  return arr;
}
console.log(SelectionSort(x));

// arr[0]=29     Minindex=0
// arr[1]=72     arr[0]=29
// arr[2]=98     arr[0]=29
// arr[3]=13     arr[0]=29 true Minindex =3
// arr[4]=87     arr[3]=13
// arr[5]=66     arr[3]=13
