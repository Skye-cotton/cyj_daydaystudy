// 定义三种状态
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECT = "REJECT";

class MyPromise {
  constructor(fn) {
    // 初始化状态
    this.status = PENDING;
    // 将成功、失败的结果放在this上，便于then、catch访问
    this.value = null;
    this.reason = null;

    // 成功态、失败态回调函数队列，同步调用then时将对应态的函数注册进去, 在状态变更的时候调用
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 成功态回调函数依次执行
        this.onFulfilledCallbacks.forEach((fn) => fn(this.value));
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECT;
        this.reason = reason;
        // 失败态回调函数依次执行
        this.onRejectedCallbacks.forEach((fn) => fn(this.reason));
      }
    };
    // 生成实例后立即调用fn
    // 把内部的resolve和reject传入fn，用户可调用resolve和reject
    try {
      fn(resolve, reject);
    } catch (err) {
      // fn执行出错，将错误内容用reject抛出去
      reject(err);
    }
  }
}

let p = new MyPromise((reslove) => {
  setTimeout(() => {
    console.log("完成");
    reslove("3秒");
    console.log(p, "++++++");
  }, 3000);
});
console.log(p, "------");

// let p = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("失败");
//     reject("请求失败");
//     console.log(p, "++++++");
//   }, 3000);
// });
// console.log(p, "------");
