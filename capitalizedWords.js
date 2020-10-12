function capitalizeWords(sentence) {
  let words = sentence.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return words.join(' ');
}

console.log(capitalizeWords('This is test one for cpitalization function.'));