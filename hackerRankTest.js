// function performOperation(secondInteger, secondDecimal, secondString) {
//   const firstInteger = 4;
//   const firstDecimal = 4.0;
//   const firstString = 'HackerRank ';

//   console.log(firstInteger + parseInt(secondInteger));
//   console.log(firstDecimal + parseFloat(secondDecimal));
//   console.log(firstString + secondString);
// }

// console.log(performOperation(12, 4.32, 'hi hi'));



// function vowelsAndConsonants(s) {

//   let vowels = [ 'a', 'e', 'i', 'o', 'u' ];
//   let conconants = [];

//   for(let letter of s){
//       if(vowels.includes(letter)){
//           console.log(letter);;
//       } else{
//           conconants.push(letter);
//       }
//   }

//   conconants.forEach(letter => {
//     console.log(letter);
//   })
// }


// function main() {
//   const s = 'javascriptloops';
  
//   vowelsAndConsonants(s);
// }

// main();





// let re = RegExp(/^([aeiou]).*\1$/);

// console.log(re.test('ara'));






// function factorial(n){

//   let factorialValue = 1;

//   do{
//       factorialValue = factorialValue * n;
//       n--
//   } while(n > 1);

//   return factorialValue;
// }


// console.log(factorial(5));






// function getLetter(s) {
//   let letter;
//   let a = new Set(['a', 'e', 'i', 'o', 'u']);
//   let b = new Set(['b', 'c', 'd', 'f', 'g']);
//   let c = new Set(['h', 'j', 'k', 'l', 'm']);
//   let d = new Set(['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']);
  
//   let firstLetter = s.charAt(0);


//   switch (true){
//       case a.has(firstLetter):
//           letter = 'A';
//           break;  

//       case b.has(firstLetter):
//           letter = 'B';
//           break;

//       case c.has(firstLetter):
//           letter = 'C';
//           break;

//       case d.has(firstLetter):
//           letter = 'D';
//           break;

//       default:
//           break;
//   }
  
//   return letter;
// }

// console.log(getLetter('edhdkfn'));
// console.log(getLetter('dhdkfn'));
// console.log(getLetter('jadhdkfn'));
// console.log(getLetter('nadhdkfn'));




function getSecondLargest(nums) {

  let largestNum = nums[0];
  let secondLargestNum = 0;

  for(let i=0; i<nums.length; i++){
      if(nums[i] > largestNum){
          secondLargestNum = largestNum;
          largestNum = nums[i];
      }
      
      if(nums[i] > secondLargestNum && nums[i] < largestNum){
          secondLargestNum = nums[i];
      }
  }

  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 0) {
    return null;
  }

  return secondLargestNum;

}


function main() {
    const n = 5;
    const nums = [2, 3, 6, 6, 0];
    const nums1 = [23, 13, 0, 13, 13];
    const nums2 = [2, 0, 45, 16, 45];
    const nums3 = [12,12];
    
    console.log(getSecondLargest(nums));
    console.log(getSecondLargest(nums1));
    console.log(getSecondLargest(nums2));
    console.log(getSecondLargest(nums3));
}

main();