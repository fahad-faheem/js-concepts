// find() gives the FIRST item that matches your condition

const numbers = [5, 10, 15, 20];


const result = numbers.find(function (num) {
  return num > 10;
});

console.log(result); 
