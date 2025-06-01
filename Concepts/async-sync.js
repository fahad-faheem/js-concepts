// Operations that occur independently of the main program flow, 
// allowing the program to continue running while waiting for a task 
// (like a network request or file read) to complete.


console.log("1");
setTimeout(() => console.log("2"), 3000);  
console.log("3");




// Operations that are performed one after another, in order.
// Each operation waits for the previous one to finish before running.


console.log("1");
console.log("2");
console.log("3");
