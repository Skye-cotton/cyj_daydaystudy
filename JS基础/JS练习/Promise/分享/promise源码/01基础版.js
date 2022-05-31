// 简单实现
class MyPromise {
  callbacks = [];
  constructor(fn) {
    fn(this._resolve.bind(this));
  }
  then(onFulfilled) {
    this.callbacks.push(onFulfilled);
    return this; // 链式调用
  }
  _resolve(value) {
    this.callbacks.forEach((fn) => fn(value));
  }
}

// promise 应用1
// let p = new MyPromise((reslove) => {
//   setTimeout(() => {
//     console.log("完成");
//     reslove("3秒");
//   }, 3000);
// })
//   .then((tip) => {
//     console.log(tip, "then1"); // 输出reslove的值
//   })
//   .then((tip) => {
//     console.log(tip, "then2");
//   });

// promise 应用2
let p2 = new MyPromise((reslove) => {
  console.log("同步执行");
  reslove("同步任务");
})
  .then((tip) => {
    console.log(tip, "then1"); // 输出reslove的值
  })
  .then((tip) => {
    console.log(tip, "then2");
  });
setTimeout(() => {
  p2.then((tip) => {
    console.log("then3", tip);
  });
});

// 增加状态机制
class MyPromise {
  callbacks = [];
  state = "pending"; // 添加状态
  value = null; // 保存结果
  constructor(fn) {
    fn(this._resolve.bind(this));
  }
  then(onFulfilled) {
    if (this.state === "pending") {
      // reslove之前
      this.callbacks.push(onFulfilled);
    } else {
      // reslove 之后
      onFulfilled(this.value);
    }
    return this; // 链式调用
  }
  _resolve(value) {
    this.state = "fulfilled"; // 状态改为完成
    this.value = value; // 保存结果
    // 异步执行回调，放在任务队列的最后面
    this.callbacks.forEach((fn) => fn(value));
  }
}
