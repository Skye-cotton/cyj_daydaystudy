class MyPromise {
  callbacks = [];
  state = "pending"; // 添加状态
  value = null; // 保存结果
  constructor(fn) {
    fn(this._resolve.bind(this), this._reject.bind(this));
  }
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this._handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve: resolve,
        reject: reject,
      });
    });
  }
  catch(onError) {
    return this.then(null, onError);
  }
  // 无论成功还是失败，都会执行
  finally(onDone) {
    if (typeof onDone !== "function") return this.then();
    let MyPromise = this.constructor;
    return this.then(
      (value) => MyPromise.resolve(onDone()).then(() => value),
      (reason) =>
        MyPromise.resolve(onDone()).then(() => {
          throw reason;
        })
    );
  }
  _handle(callback) {
    if (this.state === "pending") {
      this.callbacks.push(callback);
      return;
    }
    let cb =
      this.state === "fulfilled" ? callback.onFulfilled : callback.onRejected;
    // 如果then 没有传递任何东西
    if (!cb) {
      cb = this.state === "fulfilled" ? callback.resolve : callback.reject;
      cb(this.value);
      return;
    }

    // 异常处理
    let ret;
    try {
      ret = cb(this.value);
      cb = this.state === "fulfilled" ? callback.resolve : callback.reject;
    } catch (error) {
      ret = error;
      cb = callback.reject;
    } finally {
      cb(ret);
    }
  }
  _resolve(value) {
    // Promise onFulfilled返回值判断
    if (value && (typeof value === "object" || typeof value === "function")) {
      let then = value.then;
      if (typeof then === "function") {
        then.call(value, this._resolve.bind(this), this._reject.bind(this));
        return;
      }
    }
    this.state = "fulfilled"; // 状态改为完成
    this.value = value; // 保存结果
    this.callbacks.forEach((callback) => this._handle(callback));
  }
  _reject(err) {
    this.state = "rejected";
    this.value = err;
    this.callbacks.forEach((callback) => this._handle(callback));
  }
}

// /**
//  * 模拟异常异步请求
//  * @param {*} url
//  * @param {*} s
//  * @param {*} callback
//  */
// const mockAjax = (url, s, callback) => {
//   setTimeout(() => {
//     callback(url + "异步请求耗时" + s + "秒", "出错了!");
//   }, 1000 * s);
// };

// //demo reject
// new MyPromise((resolve, reject) => {
//   mockAjax("getUserId", 1, function (result, error) {
//     if (error) {
//       reject(error);
//     } else {
//       resolve(result);
//     }
//   });
// }).then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// demo finally
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功");
  }, 1000);
}).finally(() => {
  console.log("onDone");
});
