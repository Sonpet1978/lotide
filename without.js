const eqArrays = function(array1, array2) {
    var result = true ;
    for(var i = 0; i <= array1.length; i++) {
        if(array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
  
};
const assertArraysEqual = function(array1, array2) {
    var result = true ;
    for(var i = 0; i <= array1.length; i++) {
        if(array1[i] !== array2[i]) {
            result = false;
        }
    }
    console.log(result);
  
};

const without = function (arr , subset){
    const exclude = [...subset];
    return arr.filter(x => {
      const idx = exclude.indexOf(x);
      if (idx >= 0) {
        exclude.splice(idx, 1);
        return false;
      }
      return true;
    });
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]) );// => ["1", "2"]