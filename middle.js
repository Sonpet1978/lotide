const eqArrays = function(array1, array2) {
    let correct = true;
  
    //if the two arrays are not the same length the assertion fails automatically
    if (array1.length !== array2.length) {
      correct = false;
    } 
  
    //if the two arrays are the same length this runs:
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        correct = false;
      }
    }
  
    return correct;
  
  }

const assertArraysEqual = function(arr1,arr2){
    const result = eqArrays(arr1,arr2)
      if (!result){
          console.log(`❌ ❌ ❌: Uh Oh! FALSE`)
      }
      else {
          console.log(`✅ ✅ ✅ : Congratulations! TRUE`)
      }
    }


    const middle = function (arr){

    arr.sort(function(a, b) {return a-b;});
    var mid = Math.floor(arr.length / 2);
    if(arr.length > 2 ) {
        return arr[mid - 1]  + " " + arr[mid];
      } else {
       return  null;
      }
     
}


assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);

///console.log(middle([1])); // => []
//console.log(middle([1, 2])); // => []
//console.log(middle([1, 2, 3, 4])); // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4])