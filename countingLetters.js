function countingLetters(str){
  let tempArr = str.split(' ');

  console.log(tempArr);

  tempArr = tempArr.map(item => {
    let tempItem = item.toLowerCase().split('');
    console.log(tempItem);

    return tempItem.reduce((acc, curr) => {
      acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
      if(acc[curr] > acc.max) {
        acc.max = acc[curr];
      }
      return acc;
    },
      { max: 1, word: item}
    );
  });

  let maxAmount = 1;
  let word = '';

  for(let item of tempArr){
    if(item.max > maxAmount) {
      maxAmount = item.max;
      word = item.word;
    }
  }

  if(maxAmount > 1) {
    return word;
  }

  return -1;
}

console.log(countingLetters('Javascript is the best programming language'));