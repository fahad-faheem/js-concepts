// A function that has access to the variables of its parent scope even after the parent function has returned.

function outer() {
    let count = 0;
  
    function inner() {
      count++;
      console.log(count);
    }
  
    return inner;
  }
  
  const counter = outer(); // `outer` runs, returns `inner`
  
  counter(); // Output: 1
  counter(); // Output: 2
  counter(); // Output: 3
  