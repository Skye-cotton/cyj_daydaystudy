// 1. 类
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   toString() {
//     return "(" + this.x + "," + this.y + ")";
//   }
// }

// const point1 = new Point(1, 2);
// console.log(point1.toString()); //(1,2)
// console.log(point1.hasOwnProperty("x")); //true 检测属性是否为对象的自有属性
// console.log(point1.hasOwnProperty("toString")); // false

// console.log(typeof Point, "----");

// 2. getter 和setter

// class Myclass {
//   constructor() {}
//   get prop() {
//     return "getter";
//   }
//   set prop(value) {
//     console.log("setter:" + value);
//   }
// }
// let inst = new Myclass();

// inst.prop = 123; // setter:123
// console.log(inst.prop); // getter

// 3. 静态方法
// class Foo {
//   static myMethod() {
//     console.log("这是一个私有方法");
//   }
// }

// Foo.myMethod();

// const foo1 = new Foo();
// foo1.myMethod(); // 报错：TypeError: foo1.myMethod is not a function
// // 静态方法可以被子类继承
// class Bar extends Foo {}

// Bar.myMethod();

// 4. 实例属性的定义
//   1. 定义在constructor
//   2. 定义在最顶层
// class IncreasingCounter {
//   constructor() {
//     this._count = 0;
//   }
//   get value() {
//     console.log("Getting the current value!");
//     return this._count;
//   }
//   increment() {
//     this._count++;
//   }
// }
// class IncreasingCounter {
//   _count = 0;
//   get value() {
//     console.log("Getting the current value!");
//     return this._count;
//   }
//   increment() {
//     this._count++;
//   }
// }

// 私有方法 通过Symbol值命名私有方法
// const bar = Symbol("bar");
// const snaf = Symbol("snaf");
// class myClass {
//   #count = 1;
//   // 公有方法
//   foo(baz) {
//     this[bar](baz);
//   }

//   // 私有方法
//   [bar](baz) {
//     return (this[snaf] = baz);
//   }

//   // ...
// }
// const inst = new myClass();

// 私有属性
class IncreasingCounter {
  #count = 0;
  abc = 1;
  get value() {
    console.log("Getting the current value!");
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}

const counter = new IncreasingCounter();
// counter.#count; // 报错
console.log(counter.abc); // 报错
