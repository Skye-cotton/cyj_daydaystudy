// var p1 = Promise.resolve(1),
//     p2 = Promise.resolve(2),
//     p3 = Promise.resolve(3)

// Promise.all([p1,p2,p3]).then((results) => {
//   console.log(results);
// }).catch((err) => {
//   console.log(err);
// })
// 输出：[ 1, 2, 3 ]

// var p1 = Promise.resolve(1),
//     p2 = Promise.reject(2),
//     p3 = Promise.resolve(3)

// Promise.all([p1,p2,p3]).then((results) => {
//   console.log(results);
// }).catch((err) => {
//   console.log(err);
// })

// 输出：2

var p1 = 0,
    p2 = 2,
    p3 = 3

Promise.all([p1,p2,p3]).then((results) => {
  console.log(results);
}).catch((err) => {
  console.log(err);
})