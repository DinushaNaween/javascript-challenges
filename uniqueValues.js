
// --------------- Using array method ---------------
// function uniqueValues(string) {
//   let values = [];
//   let letters = string.split('');

//   for(let i=0; i<letters.length; i++){
//     if(values.includes(letters[i])){
//       return false;
//     } else {
//       values.push(letters[i]);
//     }
//   }

//   return true;
// }

// --------------- Using object method ---------------
// function uniqueValues(string) {
//   let values = {};

//   for (let letter of string){
//     if(values[letter]){
//       return false;
//     }

//     values[letter] = 'exists';
//   }
//   return true;
// }

// --------------- Using lastIndexOf method ---------------
function uniqueValues(string) {
  for(let i=0; i<string.length; i++){
    if(string.lastIndexOf(string[i]) !== i){
      return false;
    }
  }

  return true;
}

console.log(uniqueValues('abcdef'));
console.log(uniqueValues('abcdefad'));