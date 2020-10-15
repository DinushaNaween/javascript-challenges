let products = [
  {
    title: 'iPhone 7',
    company: 'apple'
  },
  {
    title: 'HTC Bolt',
    company: 'HTC'
  },
  {
    title: 'Galaxy s20',
    company: 'samsung'
  },
  {
    title: 'iPhone 7',
    company: 'apple'
  },
  {
    title: 'HTC M8',
    company: 'HTC'
  },
  {
    title: 'Prev',
    company: 'blackberry'
  },
  {
    title: 'Galaxy A50',
    company: 'samsung'
  },
  {
    title: 'iPhone 7',
    company: 'apple'
  },
];

// // With array.map method
// function getUniqueValues(arr) {
//   let tempArr = arr.map(item => item.company);
//   return [...new Set(tempArr)];
// }

// With array.reduce method
function getUniqueValues(arr) {
  return [...arr.reduce((acc, curr) => {
    acc.add(curr.company);
    return acc;
  }, new Set())];
}

console.log(getUniqueValues(products));