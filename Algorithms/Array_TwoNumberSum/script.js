// simple, but inefficient way
// two for loops
function Array_TwoNumberSum(array, expSum) {
  for (i of array) {
    let number1 = i;
    for (let k = 1; k < array.length; k++) {
      let number2 = array[k];
      if (number1 + number2 == expSum) {
        return [number1, number2];
      }
    }
  }
  return [];
}

// test with the sample input from description
console.log(Array_TwoNumberSum([4, 1, -5, 7, 12, 23, -3, 13], 10));
console.log(Array_TwoNumberSum([4, 1, -5, 7, 12, 23, -3, 14], 10));
