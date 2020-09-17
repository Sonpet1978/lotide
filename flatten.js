function flatten(arr) {
    let newArr = [];
    arr && arr.forEach(a => {
        if (a instanceof Array) {
        newArr = newArr.concat(flatten(a));
      } else {
        newArr.splice(newArr.length, 0, a);
      }
    });
    return newArr;
  }

  
  console.log(flatten([1, 2]));
  console.log(flatten([]));
  console.log(flatten(null));
  console.log(flatten([1, [2, [3, 4, [5,6,7]]]]));
  console.log(flatten([1, [2, 22], [3, 4, [5,6,7]]]));
