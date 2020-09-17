const letterPositions = function(sentence) {
    const result = {};

    for (let i = 0; i < string.length; i ++) {
      if (!result[string[i]]) {  //if the letter is not in the objet
        result[string[i]] = [i];
      } else {
        result[string[i]].push(i);
      }
    }
  
    return result;
  };
  