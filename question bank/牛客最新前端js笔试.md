## JS基础

### 1. typeOf

typeof返回类型：undefined,boolean,number,bigInt,string,symbol,function,object(Null和其他任何对象)。所以，typeof为object，可能是null.

### 2. symbol

symbol 的值是通过 Symbol() 函数生成，每一个 symbol 的值都是唯一的，并且 symbol 类型的值可以作为对象的属性标识符使用，这也是 symbol 类型设计的目的。

- symbol() 每次都会创建一个新的值，且不会注册到全局。

- Symbol.for() 方法会查找命名参数是否在全局中注册过，如果注册过的就不会创建新的值，而是会直接返回，所以我们可以使用到相同的 symbol 值。

  

### 3.类型检测

**typeof** NaN `===` 'number'       // true

1. 执行以下代码，错误的输出结果是  C

```js
A. 输入：typeof {"x":1} 输出："object" 
B. 输入：typeof 1 输出："number" 
C. 输入：typeof [{x:1}] 输出："array"     || object 
D. 输入：typeof NaN 输出："number"
```

### 4.逻辑判断

1. 请选择结果为ture的表达式？ C

```js
A. null instanceof Object
B. null === undefined
C. null == undefined
D. NaN == NaN
```

2. 下列代码结果为 true 的是？ A

```js
A. Symbol.for('a') === Symbol.for('a') // 如果已经有了，不会创建新的，直接返回
B. Symbol('a') === Symbol('a')   // 每次创建新的
C. NaN === NaN  // false
D. {} === {} //引用数据类型({},[],function a)  不相等
```

3. 根据如下变量，下列表达式中返回值为true的是 D

```js
var a = 1;
var b = [];
var c = '';
var d = true;

A. (a || b) === true
B. (b && c) === true
C. (c && d) === true
D. (d || a) === true
```

4. 以下表达式，正确的是

```js
A. Number('a') == Number('a') // NaN == NaN   false 
B. -1 == true  // 在==的隐式转化中，是对两边进行Number(), -1 == 1,返回false
C. 3 + '2' === 5 // '32'=== 5
D. ![] == '' // ![] false == '' false
```

5. **typeof**(null) === **typeof**(window)   true

### 5.Math

1. 如何把 7.25 四舍五入为最接近的整数

```js
A. Math.round(7.25)   // 7
B. Math.ceil(7.25)    // 8 向上取整
C. round(7.25)        // 不存在
D. Math.rnd(7.25)    // 不存在
```

2. 产生0<=num<=10的随机整数

   C. Math.floor(Math.random()*11) D. Math.ceil(Math.random()*10)

### 6.字符串

1. String对象的哪个方法可以寻找子字符串并返回该子字符串位置

   答案：search()  indexOf()

   区别：search() 里面必须是正则

### 7.JSON

1. 下面分别使用 JSON.stringify 方法，返回值 res 分别是 C

```js
const fn = function(){}
const res = JSON.stringify(fn)
const num = 123
const res = JSON.stringify(num)
const res = JSON.stringify(NaN)
const b = true
const res = JSON.stringify(b)

A. 'function'、'123'、'NaN'、'true'
B. undefined、'123'、undefined、'true'
C. undefined、'123'、'null'、'true'
D. undefined、'123'、'null'、undefined
```



### 8.数组

- splice():  通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

  ```
  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb'); //["Jan", "Feb", "March", "April", "June"]
  ```

- slice() 返回一个新的数组对象；

  clice(begin,end)

- unshift() 开头处添加，改变原数组

- concat（）用于合并两个或多个数组；返回新数组

- join（） 数组的所有元素连接成字符串



1. 有关JavaScript中系统方法的描述，错误的是？

```js
A. parseFloat方法：该方法将一个字符串转换成对应的小数
B. isNaN方法：该方法用于检测参数是否为数值型，如果是，返回true，否则，返回false。// 如果是数字，返回false
C. escape方法： 该方法返回对一个字符串编码后的结果字符串
D. eval方法：该方法将某个参数字符串作为一个JavaScript执行题
```

## JS深入

### 1. this

apply call bind

1. 下面有关JavaScript中call和apply方法的描述，错误的是？

```js
A. call与apply都属于Function.prototype的一个方法，所以每个function实例都有call、apply属性
B. 两者传递的参数不同，call函数第一个参数都是要传入给当前对象的对象，apply不是
C. apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入
D. call传入的则是直接的参数列表。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。
```

### 2. 作用域闭包

### 3. 内存泄漏

```javascript
const arr = [1, 2, 3, 4]; // arr 持续占用内存
console.log('hello world');

arr = null;   // 释放内存
```

#### 3.1 内存泄漏的识别方式

- Chrome 浏览器查看内存占用； Timeline 面板

- 命令行使用Node；process.memoryUsage()

  ```javascript
  // { rss: 27709440,
  //  heapTotal: 5685248,
  //  heapUsed: 3449392,
  //  external: 8772 }
  
  rss（resident set size）：所有内存占用，包括指令区和堆栈。
  heapTotal："堆"占用的内存，包括用到的和没用到的。
  heapUsed：用到的堆的部分。
  external： V8 引擎内部的 C++ 对象占用的内存。
  ```

### 4. 原型与继承

1. 所有对象都有原型    错

   Object.create(null)

## DOM题

### 1. 事件流

1. 将A元素拖拽并放置到B元素中，B元素需要做哪项操作()？A

```js
A. event.preventDefault()  // 阻止默认事件发生
B. event.prevent()  // 方法不存在
C. event.drag()   // 当元素或者选择的文本被拖动时触发 drag 事件 (每几百毫秒).
D. event.drop()  // 当一个元素或是选中的文字被拖拽释放到一个有效的释放目标位置时，drop 事件被抛出。
```

2. 以下不支持冒泡的鼠标事件为( )？    C

```js
A. mouseover
B. click
C. mouseleave
D. mousemove
```

3. 事件传播的三个阶段是什么
   - 捕获-目标- 冒泡

4. 下面有关 javascript 常见事件的触发情况，描述错误的是？ D

```js
A. onchange：用户改变域的内容
B. onkeypress：某个键盘的键被按下或按住
C. onmousedown：某个鼠标按键被按下
D. onblur：元素获得焦点  // 失去焦点时 
```

## ES6

A. 函数体内this的指向是定义时所在的对象，而不是使用时所在的对象  ----对

### Promise

1. 关于将 Promise.all 和 Promise.race 传入空数组的两段代码的输出结果说法正确的是：D

```js
Promise.all([]).then((res) => {
    console.log('all');
});
Promise.race([]).then((res) => {
    console.log('race');
});

A. all 和 race 都会被输出
B. all 和 race 都不会被输出
C. all 会被输出，而 race 不会被输出
D. all 不会被输出，race 会被输出
```

### 解构赋值

**let** [a,b, c,d, e] = "hello";   // a='h' b='e' c='l' ...



## 程序题

### JS基础

1. 下面两个程序的输出结果分别是？

```js
// case 1
function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('Case undefined');
        break;
    default:
        console.log('Case default');
    }
}
showCase(new String('A')); //new String('A')  是一个对象  console.log('Case default');
showCase(String('A'));  // console.log('Case A');
```



