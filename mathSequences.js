function mathSequences(arr) {
  let arith = new Set();
  let geo = new Set();

  for (let arrIndex = 1; arrIndex < arr.length; arrIndex++) {
    let arithCheck = arr[arrIndex] - arr[arrIndex-1];
    arith.add(arithCheck);
    
    let geoCheck = arr[arrIndex] / arr[arrIndex-1];
    geo.add(geoCheck);
  }

  if (arith.size === 1) {
    return 'Arithmetric'
  }

  if (geo.size === 1) {
    return 'Geometric'
  }

  return -1;
}

console.log(mathSequences([2,4,6,8]));
console.log(mathSequences([3,9,27]));
console.log(mathSequences([23,45,56,67,23]));