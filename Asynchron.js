1.
function getPromise(parammessage, delay) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(message);
        }, delay);
    })
};
getPromise('test', 2000).then(function (data) {
    console.log(data);
});

2.
function calcArrProduct(arr) {
    return new Promise( (redolve,reject) => {
        let res = 1;
        for (let i = 0; i < arr.length; i++) {
         if (typeof arr[i] === 'number') {
            res *= arr[i];
         }
           else {
            reject ( '"Error! Incorrect array!');
           }
        }
        resolve(res);
    });
}

calcArrProduct([3,4,5]).then(result => console.log(result)); 
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));

3.
function askNumber() {
    return new Promise(function (resolve, reject) {
      const input = prompt("Введіть число:");
  
      if (isNaN(input)) {
        reject("Ви ввели не число!");
      } else {
        resolve(Number(input));
      }
    });
  }
  new Promise(function (resolve, reject) {
    
    askNumber().then(resolve).catch(reject);
  })
    .catch(function (error) {
    
      console.error(error);
  
      
      return askNumber();
    })
    .then(function (result) {
      
      console.log("Ви ввели число:", result);
    });
  