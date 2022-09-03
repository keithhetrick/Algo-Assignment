// 1. Print 1-255 - For & While Loops
/*
Print all the integers from 1 to 255.
*/
function print1to255One() {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
}
print1to255One();

function print1to255Two() {
  let i = 1;
  while (i <= 255) {
    console.log(i);
    i++;
  }
}
print1to255Two();

function print1to255Three() {
  let i = 0;
  while (i <= 255) {
    console.log(i);
    i = i + 1;
  }
}
print1to255Three();

// 2. Print Odds 1-255 - For & While Loops
/*
Print all odd integers from 1 to 255.
*/
function printOdds1To255One() {
  for (let i = 0; i <= 255; i++) {
    i = i + 1;
    console.log(i);
  }
}
printOdds1To255One();

function printOdds1To255Two() {
  let i = 1;
  while (i <= 255) {
    console.log(i);
    i = i + 1;
    i++;
  }
}
printOdds1To255Two();

// 3. Print Ints and Sum 0-255 - For & While Loops
/*
Print integers from 0 to 255, and with each integer print the sum so far.
*/
function printIntsAndSum0to255One() {
  let sum = 0;
  for (let i = 0; i <= 255; i++) {
    sum += i;
    console.log("Num is: ", i, "Sum is: ", sum);
  }
}
printIntsAndSum0to255One();

function printIntsAndSum0to255Two() {
  let i = 0;
  let sum = 0;
  while (i <= 255) {
    console.log("Num is: ", i, "Sum is: ", sum);
    i++;
    sum += i;
  }
}
printIntsAndSum0to255Two();

// 4. Iterate and Print Array - For Loop, forEach, forOf Loops
/*
Iterate through a given array, printing each value.
*/
function printArrayValsOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("array[", i, "] is equal to", arr[i]);
  }
}
printArrayValsOne([1, 5, 76, 9, 356]);

function printArrayValsTwo(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      console.log("variable value :", arr[i]);
      console.log("current summed values :", sum);
      sum += arr[i];
      console.log("index value :", i);
    }
  }
  console.log("final array :", sum);
  return sum;
}
printArrayValsTwo([1, 4, 0, 9, -3]);

function printArrayValsThree() {
  const ourArray = [1, 4, 0, 9, -3];
  let sum = 0;
  for (let i = 0; i < ourArray.length; i += 1) {
    sum += ourArray[i];
  }
  return sum;
}
console.log(printArrayValsThree([1, 4, 0, 9, -3]));

function printArrayValsFour(array) {
  let sum = 0;
  array.forEach((i) => {
    sum += i;
  });
  console.log(sum);
  return sum;
}
printArrayValsFour([1, 4, 0, 9, -3]);

function printArrayValsFive(array) {
  let sum = 0;
  for (const i of array) {
    sum += i;
  }
  console.log(sum);
  return sum;
}
printArrayValsFive([1, 4, 0, 9, -3]);

// 5. Find and Print Max - For Loop & Math.max
/*
Given an array, find and print its largest element.
*/
const arr1 = [11, 4, 3, 5, 6, 7, 10, 1];
// console.log(Math.max.apply(null, arr));
// console.log(Math.max(...arr));
function printMaxOfArrayOne() {
  let largest = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > largest) {
      largest = arr1[i];
    }
  }
  console.log(largest);
}
printMaxOfArrayOne();

// 6. Get and Print Average - For Loop
/*
Analyze an array’s values and print the average.
*/
const arr2 = [80, 5, 77, 22, 88, 95, 68, 3, 12];

function printAverageOfArrayOne() {
  let average = 0;
  for (let i = 0; i < arr2.length; i++) {
    let currentNum = arr2[i];
    average += currentNum;
  }
  average = average / arr2.length;
  console.log(average);
  return average;
}
printAverageOfArrayOne();

const arr3 = [80, 5, 77, 22, 88, 95, 68, 3, 12];

function printAverageOfArrayTwo() {
  let i = 0;
  let average = 0;
  while (i <= arr3.length) {
    console.log(i);
    i++;
    let currentNum = arr3[i];
    average += currentNum;
  }
  average = average / arr3.length;
  console.log(average);
  return average;
}
printAverageOfArrayTwo();

// 7. Array with Odds - For & While Loops
/*
Create an array with all the odd integers between 1 and 255 (inclusive).
*/
let myArr1 = [];
function returnOddsArray1to255One() {
  for (let i = 1; i <= 255; i += 2) {
    myArr1.push(i);
  }
  console.log(myArr1);
}
returnOddsArray1to255One(myArr1);

let myArr2 = [];
function returnOddsArray1to255Two() {
  let i = 1;
  while (i <= 255) {
    i += 2;
    myArr2.push(i);
  }
  console.log(myArr2);
}
returnOddsArray1to255Two(myArr2);

// 8. Square the Values - For & While Loops, Return Statement
/*
Square each value in a given array, returning that same array with changed values.
*/
let myArr3 = [];
function squareArraysValsOne(arr) {
  let i = 1;
  while (i <= 10) {
    console.log("current array :", arr);
    i *= 2;
    myArr3.push(i);
    console.log("adding to array :", i);
  }
  console.log("outside loop :", i);
  console.log(myArr3);
}
squareArraysValsOne(myArr3);

let myArr4 = [];
function squareArraysValsTwo(arr) {
  for (let i = 1; i < 10; i *= 2) {
    console.log("current array :", arr);
    myArr4.push(i);
    console.log("adding to array :", arr);
  }
  console.log(myArr4);
}
squareArraysValsTwo(myArr4);

function printSquare1to255Three() {
  for (let i = 1; i <= 255; i++) {
    console.log("before square", i);
    i = i ** 2;
    console.log("after square", i);
  }
}
printSquare1to255Three();

function squareMyNumber(i) {
  return i ** 2;
}
let squared = squareMyNumber(5);
console.log(" 5 ** 2 = ", squared);

// 9. Greater than Y - For & While Loops
/*
Given an array and a value Y, count and print the number of array values greater than Y.
*/
let newArr = [];
function printArrayCountGreaterThanYOne(arr, y) {
  for (let i = 0; i < arr.length; i++) {
    console.log("current array :", newArr);
    if (arr[i] > y) {
      console.log("adding to array :", newArr);
      newArr.push(arr[i]);
    }
  }
  console.log("final array :", newArr);
  return newArr;
}
printArrayCountGreaterThanYOne([5, 15, 76, 4644, 77, 32, 4], 29);
console.log(newArr);

let myArr = [];
function printArrayCountGreaterThanYTwo(arr, y) {
  let i = 1;
  while (i <= arr.length) {
    console.log("current array :", arr);
    i++;
    {
      if (arr[i] > y) {
        console.log("adding to array :", i);
        newArr.push(i);
      }
    }
  }
  console.log("final array :", i);
  console.log(newArr);
}
printArrayCountGreaterThanYTwo([5, 15, 76, 4644, 77, 32, 4], 29);
console.log(newArr);

// 10. Zero Out Negative Numbers
/*
Return the given array, after setting any negative values to zero.
*/
function zeroOutArrayNegativeVals(arr) {
  let negatives = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log("negative value before zeroing : ", arr[i]);
      negatives.push((arr[i] = 0));
      console.log("negative value added to array after zeroing :", negatives);
      console.log("value for i : ", i);
    } else {
      console.log("values being summed :", sum);
      sum = arr;
    }
  }
  console.log("final zeroed negatives :", negatives);
  console.log("final array :", sum);
  return sum;
}
zeroOutArrayNegativeVals([1, 2, 3, 4, 5, -2, 23, -1, -13, 10, -52]);

// 11. Max, Min, Average - For Loop
/*
Given an array, print the max, min and average values for that array.
*/
function printMaxMinAverageArrayVals(arr) {
  let max = arr[0];
  let min = arr[0];
  let average = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      console.log("setting min to " + min);
    }
    if (arr[i] >= max) {
      max = arr[i];
      console.log("setting max to " + max);
    }
    if (arr[i] >= 0) {
      console.log("variable value:", arr[i]);
      console.log("current summed values:", sum);
      sum += arr[i];
      console.log("index value:", i);
    }
    if ((average = sum / arr.length)) {
      average;
      console.log("current average:", average);
    }
  }
  console.log("Max is " + max);
  console.log("Min is " + min);
  console.log("Average is " + average);
  return sum;
}
printMaxMinAverageArrayVals([0, 1, 7, 2, 3, 8, 4, 5]);

// 12. Shift Array Values - shiftArrayValsLeft(arr)
/*
Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
*/
let arr = [5, 4, 7, 8, 9, 12];
function shiftArrayValsLeft(arr) {
  arr.shift();
  arr.push(0);
}
shiftArrayValsLeft(arr);
console.log(arr);

// 13. Swap String For Array Negative Values - For Loop
/*
Given an array of numbers, replace any negative values with the string 'Dojo'.
*/
function swapStringForArrayNegativeVals(arr) {
  let negatives = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log("negative value before turned to string : ", arr[i]);
      negatives.push((arr[i] = "Dojo"));
      console.log(
        "negative 'stringed' value added to array after zeroing :",
        negatives
      );
      console.log("value for i : ", i);
    } else {
      console.log("values being summed :", sum);
      sum = arr;
    }
  }
  console.log("final 'stringed' negatives :", negatives);
  console.log("final array :", sum);
  return sum;
}
swapStringForArrayNegativeVals([1, 2, 3, 4, 5, -2, 23, -1, -13, 10, -52]);
