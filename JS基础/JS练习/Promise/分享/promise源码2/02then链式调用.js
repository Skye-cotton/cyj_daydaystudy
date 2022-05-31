class MyPromise {
  callbacks = [];
  state = "pending"; // 添加状态
  value = null; // 保存结果
  constructor(fn) {
    fn(this._resolve.bind(this));
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
  _resolve(value) {
    // Promise onFulfilled返回值判断
    if (value && (typeof value === "object" || typeof value === "function")) {
      let then = value.then;
      if (typeof then === "function") {
        then.call(value, this._resolve.bind(this));
        return;
      }
    }
    this.state = "fulfilled"; // 状态改为完成
    this.value = value; // 保存结果
    this.callbacks.forEach((callback) => this._handle(callback));
  }
}

// 测试实例
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
