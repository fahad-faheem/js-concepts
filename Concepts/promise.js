let myPromise = new Promise((resolve, reject) => {
    let success = true;
  
    if (success) {
      resolve("Task completed successfully!");
    } else {
      reject("Task failed.");
    }
  });
  

  myPromise
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.log(error); 
  });
