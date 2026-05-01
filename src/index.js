"use strict";

function MyArrayProto() {
  this.push = function () {
    if (arguments) {
      for (let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
      }
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length === 0) return;
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };

  this.forEach = function (fn) {
    for (let i = 0; i < this.length; i++) {
      fn(this[i], i, this);
    }
  };

  this.reduceRight = function (callback, initialValue) {
    const hasInitial = arguments.length >= 2;
    const len = this.length;

    if (len === 0 && !hasInitial) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    if (len === 0 && hasInitial) {
      return initialValue;
    }

    if (len === 1 && !hasInitial) {
      return this[0];
    }

    let result;
    let startIndex;

    if (hasInitial) {
      result = initialValue;
      startIndex = len - 1;
    } else {
      result = this[len - 1];
      startIndex = len - 2;
    }

    for (let i = startIndex; i >= 0; i--) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

function MyArray() {
  this.length = 0;
}

MyArray.prototype = new MyArrayProto();

let words = new MyArray();
words.push("вчитися", "люблю", "Я");

console.log(words.reduceRight((acc, word) => acc + " " + word));
