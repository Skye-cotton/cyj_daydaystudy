// Promise是基于观察者设计模式实现的，then函数要执行的函数被塞入观察者数组中，
// 当Promise状态变化，会观察数组中的所有函数

// 第一版 实现在1s后返回 ‘成功了’，并在then中输出

class MyPromise {
  constructor(executor) {
    this.value = null; // 用于保存 resolve 的值
    this.reason = null; // reject的值
    this.onFulfilled = null; // then的成功回调
    this.onRejected = null; // 失败回调的值

    // executor 的resolve参数
    let resolve = (value) => {
      this.value = value;
      this.onFulfilled && this.onFulfilled(value);
    };
    // executor 的reject参数
    let reject = (reason) => {
      this.reason = reason;
      this.onRejected && this.onRejected(reason);
    };

    // 执行executor函数
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
  }
}

let p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolved("成功了");
  }, 1000);
});

p1.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
