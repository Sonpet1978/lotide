const assertArraysEqual = function(array1, array2) {
    var result = true ;
    for(var i = 0; i <= array1.length; i++) {
        if(array1[i] !== array2[i]) {
            result = false;
        }
    }
    console.log(result);
  
};

// TEST CODE 
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false