/*
* 题目：封装函数 f，使 f 的 this 指向指定的对象
* */


function bindThis(f, oTarget) {
    // 1. bind 返回一个改变上下文的函数副本
    // return f.bind(oTarget)
    // 2. call apply 会立即执行  两者区别：apply只接收数组形式的参数输入
    // arguments 类数组，__proto__ 是object
    // return function () {
    //    return f.apply(oTarget,arguments)
    // }
    return function (a,b) {
        return f.call(oTarget,a,b)
    }
}


// 测试用例
console.log(function () { var r = bindThis(function(a, b){return this.test + a + b}, {test: 2})(2, 3); return r === 7; })
