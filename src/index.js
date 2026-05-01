"use strict";

const arrTest = ['Y', 'a', 'n'];

const myReduceRight = (arr, callback, start) => {
  let result;
  if (start) {
    result = start;
    for (let i = arr.length - 1; i >= 0 ; i--) {
      result = callback(result, arr[i], i, arr);
    }
  } else {
    result = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0 ; i--) {
      result = callback(result, arr[i], i, arr);
    }
  }
  return result;
};

console.log(myReduceRight(arrTest, (a, b) => {
    return a + b;
  }),
);
