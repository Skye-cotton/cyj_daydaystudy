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
  then(onFulfilled, onReject) {
    // 实现值穿透 当then中传入的不是函数，则这个promise返回上一个promise的值
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onReject =
      typeof onReject === "function"
        ? onReject
        : (reason) => {
            throw new Error(reason);
          };

    // 保存前一个 promise 的this
    const self = this;
    return new MyPromise((resolve, reject) => {
      // 封装前一个promise成功时执行的函数
      let fulfilled = () => {
        try {
          const result = onFulfilled(self.value); // 承前
          return result instanceof MyPromise
            ? result.then(resolve, reject)
            : resolve(result); //启后
        } catch (err) {
          reject(err);
        }
      };
      // 封装前一个promise失败时执行的函数
      let rejected = () => {
        try {
          const result = onReject(self.reason);
          return result instanceof MyPromise
            ? result.then(resolve, reject)
            : reject(result);
        } catch (err) {
          reject(err);
        }
      };

      switch (self.status) {
        case PENDING:
          self.onFulfilledCallbacks.push(fulfilled);
          self.onRejectedCallbacks.push(rejected);
          break;
        case FULFILLED:
          fulfilled();
          break;
        case REJECT:
          rejected();
          break;
      }
    });
  }
}

/**
 * 模拟异步请求
 * @param {*} url  请求的URL
 * @param {*} s  指定该请求的耗时，即多久之后请求会返回。单位秒
 * @param {*} callback 请求返回后的回调函数
 */
const mockAjax = (url, s, callback) => {
  setTimeout(() => {
    callback(url + "异步请求耗时" + s + "秒");
  }, 1000 * s);
};
const pUserId = new Promise((resolve) => {
  mockAjax("getUserId", 1, function (result) {
    resolve(result);
  });
});
const pUserName = new Promise((resolve) => {
  mockAjax("getUserName", 3, function (result) {
    resolve(result);
  });
});

pUserId
  .then((id) => {
    console.log(id);
    return pUserName;
  })
  .then((name) => {
    console.log(name);
  });
