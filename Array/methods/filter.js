// filter() makes a new array with only the items you want to keep

const numbers = [1, 2, 3, 4, 5];


const result = numbers.filter(function (number) {
  return number > 3; 
});

console.log(result); 
