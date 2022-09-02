function min(...values) {
    return Math.min(...values);
}

function max(array) {
    let maxValue = array[0];
  
    for (let value of array) {
      if (maxValue < value) {
      maxValue = value;
        }
    }
    return maxValue;
}
  
function range(length, last, step) {
    let begin = last ? length : 0;
    let end = last || length;
    step = step || 1;
    let result = [];
  
    for (let number = begin; number < end; number += step) {
      result.push(number);
    }
  
    return result;
}

function zip(...arrays) {
    let result = [];
    for (let index = 0; index < arrays.length; index++) {
      let values = [];
      for (let array = 0; array < arrays.length; array++) values.push(arrays[array][index]);
      result.push(values);
    }
    return result;
  }
    

console.log(min([1, 4, 2, 6, 10, 3]));
console.log(1);

console.log(min([1, 4, -1, 6, 10, 3]));
console.log(-1);

console.log(max([1, 4, 2, 6, 10, 3]));
console.log(10);

console.log(range(10));
console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(range(1, 11));
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


console.log(range(0, 30, 5));
console.log([0, 5, 10, 15, 20, 25]);


console.log(zip(["moe", "larry"], [30, 40]));
console.log([
  ["moe", 30],
  ["larry", 40]
]);



console.log(zip(["moe", "larry", "curly"], [30, 40, 50], [true, false, false]));
console.log([
  ["moe", 30, true],
  ["larry", 40, false],
  ["curly", 50, false]
]);


console.log(uniq([1, 2, 1, 4, 1, 3]));
console.log([1, 2, 4, 3]);


console.log(uniq([1, 2, 1, 3, 3]));
console.log([1, 2, 3]);


console.log(sortNum([1, 3, 2]));
console.log([1, 2, 3]);


console.log(sortNum([1, 2, 10, 3, 32]));
console.log([1, 2, 3, 10, 32])