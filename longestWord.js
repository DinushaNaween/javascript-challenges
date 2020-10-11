// Get longest word from a sentence.

function getLongestWord(sentence) {
  let words = sentence.split(' ');
  console.log(words);
  
  for(let word in words){
    var longestWord = '';
    if(word.length > longestWord.length)
      longestWord = words[word];
  }

  return longestWord;
}

console.log(getLongestWord('My name is Dinusha.'));