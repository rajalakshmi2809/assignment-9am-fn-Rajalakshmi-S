//  function fetchData(callback) {
//     setTimeout(() => {
//          callback("Data received ");
//      },2000);
// }

// fetchData(function (result) {
//     console.log(result);
// });



//  function fetchData() {
//  return new Promise((resolve,reject)=> {
//  setTimeout(() => {
//              resolve("Data receiver");
//         },2000);

//    });

// }

//  fetchData()
//   .then(result => {
//      console.log(result);
// })
// .catch(error => {
//     console.error(error);
// });


function fetchData(success) {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if (success) {
                resolve("data recieved");
            } else {
                reject("Error: data not found");
            }
        }, 2000);
    });
}

fetchData(true)
.then(result => console.log(result))
.catch(error => console.log(error));