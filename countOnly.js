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

const assertEqual = function(arr1,arr2){
    const result = eqArrays(arr1,arr2)
      if (!result){
          console.log(`❌ ❌ ❌: Uh Oh! FALSE`)
      }
      else {
          console.log(`✅ ✅ ✅ : Congratulations! TRUE`)
      }
    }




const countOnly = function(allItems, itemsToCount) {
    const results = {};

    for (const item of allItems) {
      console.log(item);
    }
  
    return results;
   
}

const results = 
{ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }
 return results ;



const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  
  
  
 countOnlytt(firstNames, results );

//console.log(result1["Jason"], 1);
//result1["Karima"], undefined;
//result1["Fang"], 2;
//result1["Agouhanna"], undefined;
