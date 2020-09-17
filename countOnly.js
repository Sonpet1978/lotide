
const results = 
    { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    
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

const countOnly = function(allItems, itemsToCount) 
{
    const results = {};

    for (const item of allItems) {
      console.log(item);
    }
  
    return results;
   
}
 countOnly([firstNames], results );

//console.log(result1["Jason"], 1);
//result1["Karima"], undefined;
//result1["Fang"], 2;
//result1["Agouhanna"], undefined;
