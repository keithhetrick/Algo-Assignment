// Push Front
let arr1 = [5, 7, 2, 3];
function pushFront1() {
  arr1.unshift(8);
  console.log(arr1);
}
pushFront1();
// Expected result: [ 8, 5, 7, 2, 3 ]

let arr2 = [99];
function pushFront2() {
  arr2.unshift(7);
  console.log(arr2);
}
pushFront2();
// Expected result: [ 7, 99 ]

// Pop Front
let arr3 = [0, 5, 10, 15];
function popFront1() {
  arr3.shift();
  console.log(arr3);
}
popFront1();
// Expected result: 5, 10, 15

let arr4 = [4, 5, 7, 9];
function popFront2() {
  arr4.shift();
  console.log(arr4);
}
popFront2();
// Expected result: [5, 7, 9]

// Insert At - Variations at insertAt3 & insertAt4
function insertAt1() {
  let arr5 = [100, 200, 5];
  let newArr1 = arr5.splice(2, 0, 311);
  return arr5;
}
insertAt1();
console.log(insertAt1());
// Expected result: [ 100, 200, 311, 5 ]

function insertAt2() {
  let arr6 = [9, 33, 7];
  let newArr2 = arr6.splice(1, 0, 42);
  return arr6;
}
insertAt2();
console.log(insertAt2());
// Expected result: [ 9, 42, 33, 7  ]

function insertAt3(arr7, index, value) {
  for (let i = arr7.length; i >= index; i--) {
    arr7[i] = arr7[i - 1];
  }
  arr7[index] = value;
  return arr7;
}
insertAt3([100, 200, 5], 2, 311);
console.log(insertAt3([100, 200, 5], 2, 311));
// Expected result: [ 100, 200, 311, 5 ]

function insertAt4(arr8, index, value) {
  for (let i = arr8.length; i >= index; i--) {
    arr8[i] = arr8[i - 1];
  }
  arr8[index] = value;
  return arr8;
}
insertAt4([9, 33, 7], 1, 42);
console.log(insertAt4([9, 33, 7], 1, 42));
// Expected result: [ 9, 42, 33, 7 ]
