function arraySum(array) {
  let tempArray = array.sort((a,b) => {
    return a-b;
  });

  let largestNumber = tempArray.pop();
  let total = 0;

  tempArray.forEach(item => {
    total += item;
  })

  return largestNumber === total;
}

console.log(arraySum([2,3,6,8,5,34]));
console.log(arraySum([2,3,6,11]));