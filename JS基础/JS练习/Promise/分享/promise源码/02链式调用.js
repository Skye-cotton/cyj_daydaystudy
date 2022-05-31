class MyPromise {
  callbacks = [];
  state = "pending"; // 添加状态
  value = null; // 保存结果
  constructor(fn) {
    fn(this._resolve.bind(this));
  }
  then(onFulfilled) {
    return new MyPromise((resolve) => {
      this._handle({
        onFulfilled: onFulfilled || null,
        resolve: resolve,
      });
    });
  }
  _handle(callback) {
    if (this.state === "pending") {
      this.callbacks.push(callback);
      return;
    }
    // 如果then 没有传递任何东西
    if (!callback.onFulfilled) {
      callback.resolve(this.value); // 返回上一个的结果
      return;
    }
    var ret = callback.onFulfilled(this.value); // 把当前的值传给下一个then调用
    callback.resolve(ret);
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
//Demo1
// new MyPromise((resolve) => {
//   mockAjax("getUserId", 1, function (result) {
//     resolve(result);
//   });
// }).then((result) => {
//   console.log(result);
// });
//Demo4
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
