
const countLetters = function (str){
    const letterCount = {};
    for (const letter of str) {
      if (letter !== " ") {
        if (letterCount[letter]) {
          letterCount[letter] += 1;
        } else {
          letterCount[letter] = 1;
        }
      }
    }
  
    return letterCount;

}

console.log(countLetters("lighthouse in the house")) ;


