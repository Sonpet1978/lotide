const map = function (arr, callback){
    const results = [];
    for (let item of arr) {
        results.push(callback(item));
    }
    return results;
  
  
};

const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };
  
  const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
      console.log(`😜😍🍆Arrays are equal! ${arr1} === ${arr2}`);
    } else {
      console.log(`😡🤮🤢Arrays are NOT equal! ${arr1} !== ${arr2}`);
    }
  };

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
