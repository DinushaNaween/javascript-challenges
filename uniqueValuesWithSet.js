// // Traditional Way
// function uniqueValues(str) {
//   let tempStr = new Set();

//   for(let letter of str){
//     if(tempStr.has(letter)) {
//       return false;
//     }

//     tempStr.add(letter);
//   }

//   return true;
// }

// One line way
function uniqueValues(str) {
  return new Set(str).size === str.length
}

console.log(uniqueValues("abcde"));
console.log(uniqueValues("abcdeab"));