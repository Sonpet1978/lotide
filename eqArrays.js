const eqArrays = function(array1, array2) {
    var result = true ;
    for(var i = 0; i <= array1.length; i++) {
        if(array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
  
};

// TEST CODE 
//console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false