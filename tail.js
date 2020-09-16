const tail = function(array) {
    if (array.length == 0 ) {
        return "undefinded";
        
      }
      else{
          var newArr ;
          for (i=1 ; i< array.length < i++; ){
             newArr.push(array[i]);
          }
          return newArr;
      }
  
};

// TEST CODE
console.log (tail("Lighthouse Labs", "Bootcamp"));
console.log (tail(1, 1));
