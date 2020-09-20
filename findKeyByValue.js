function findKeyByValue(obj, val) {

    //first break obj into keys and value
    const entries = Object.entries(obj);
  
    for (const [key, value] of entries) {
      if (val === value) {
        console.log(value);
        return key;
      }   // else it will automatically return undefined
    }
  
  }
  
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };


  findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama";