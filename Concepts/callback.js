// function that is passed as an argument to another function which can be called later is called callback function



function doTask(callback) {
    console.log("Task started...");
    setTimeout(() => {
      console.log("Task finished.");
      callback();
    }, 2000); // 2 second delay
  }
  
  doTask(() => {
    console.log("Callback called after task!");
  });
  