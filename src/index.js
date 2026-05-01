"use strict";

const arrTest = ["Y", "a", "n"];

function myReduceRight(arr, callback, initialValue) {
  let result;
  let startIndex;
  const hasInitial = arguments.length >= 3;

  if (arr.length === 0 && !hasInitial) {
    console.log("Нічого не передано!");
  }
  if (arr.length === 0 && hasInitial) {
    return initialValue;
  }
  if (arr.length === 1 && !hasInitial) {
    return arr[0];
  }

  if (hasInitial) {
    result = initialValue;
    startIndex = arr.length - 1;
  } else {
    result = arr[arr.length - 1];
    startIndex = arr.length - 2;
  }

  for (let i = startIndex; i >= 0; i--) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
}

let test = ["Y", "a", "n"];

console.log(myReduceRight(test, (acc, char) => acc + char));
