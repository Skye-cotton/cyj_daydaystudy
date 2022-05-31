var p1 = new Promise(function(resolve,reject) {
  setTimeout(() => resolve(1),1000)
}),
p2 = new Promise(function(resolve,reject) {
  setTimeout(() => reject(2),2000)
}),
p3 = new Promise(function(resolve,reject) {
  setTimeout(() => resolve(3),3000)
})

Promise.any([p1,p2,p3]).then((results) => {
  console.log(results);
}).catch((err) => {
  console.log(err);
})