function secondVvalues(arr) {
  let sortedArr = [...new Set(arr)].sort((a,b) => a-b);

  if (sortedArr.length === 1) {
    return `${sortedArr[0]}`;
  } else if(sortedArr.length === 2) {
    return `${sortedArr[0]} ${sortedArr[1]}`;
  } else if(sortedArr.length === 3) {
    return `${sortedArr[1]}`;
  } else {
    return `${sortedArr[1]} ${sortedArr[sortedArr.length - 2]}`
  }
}

console.log(secondVvalues([1]));
console.log(secondVvalues([4, 2]));
console.log(secondVvalues([11, 44, 22]));
console.log(secondVvalues([3, 2, 4, 56, 4, -23, 45, 3]));