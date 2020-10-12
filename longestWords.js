// Find all the longest words

function longestWords(sentence) {
  let words = sentence.split(' ');
  let size = 0;
  let maxWords = [''];

  for(let arrIndex = 0; arrIndex < words.length; arrIndex++){
    if (words[arrIndex].length >= size) {
      size = words[arrIndex].length;
      if (maxWords[maxWords.length-1].length < words[arrIndex].length){
        maxWords = [];
        maxWords.push(words[arrIndex]);
      } else {
        maxWords.push(words[arrIndex]);
      }
    }
  }

  return maxWords;
}

console.log(longestWords('I woke up early today'));
console.log(longestWords('This is understanding technique.'));