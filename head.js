const assertEqual = function(array) {
    if (array.length == 0 ) {
        return "undefinded";
        
      }
      else{
          return alert(array[0]);
      }
  
};

// TEST CODE
console.log (assertEqual("Lighthouse Labs", "Bootcamp"));
console.log (assertEqual(1, 1));
