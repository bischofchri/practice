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

//saving occured numbers
function Array_TwoNumberSum_Save(array, expSum) {
  let occured = {};
  let missingNum;
  for (i of array) {
    missingNum = expSum - i;
    if (occured.hasOwnProperty(missingNum)) {
      return [missingNum, i];
    } else {
      occured[i] = true;
    }
  }
  return [];
}

//sorting and testing out if value needs to become lower or higher
//js array.prototype.sort() works in-place
//this sorting helper function is needed because array.prototype.sort() sorts alphabetically
function sortNumbers(a, b) {
  return a - b;
}

function Array_TwoNumberSum_Sort(array, expSum) {
  const myarray = array.sort(sortNumbers);
  let i = 0;
  let k = array.length - 1;
  let j = 0;
  let sum = 0;
  while (j < array.length) {
    sum = myarray[i] + myarray[k];
    if (sum == expSum) {
      return [myarray[i], myarray[k]];
    } else if (sum < expSum) {
      i++;
    } else {
      k--;
    }
    j++;
  }
  return [];
}

// test with the sample input from description
console.log(Array_TwoNumberSum([4, 1, -5, 7, 12, 23, -3, 13], 10));
console.log(Array_TwoNumberSum([4, 1, -5, 7, 12, 23, -3, 14], 10));

//test second variation: with saving the occured numbers in an js object
console.log(Array_TwoNumberSum_Save([4, 1, -5, 7, 12, 23, -3, 13], 10));
console.log(Array_TwoNumberSum_Save([4, 1, -5, 7, 12, 23, -3, 14], 10));

//test second variation: with saving the occured numbers in an js object
console.log(Array_TwoNumberSum_Sort([4, 1, -5, 7, 12, 23, -3, 13], 10));
console.log(Array_TwoNumberSum_Sort([4, 1, -5, 7, 12, 23, -3, 14], 10));
