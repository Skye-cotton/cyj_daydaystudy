// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name)
//     }
//     return displayName;
// }
//
// var myFunc = makeFunc();
// myFunc();

// 闭包
// function makeAdd(x) {
//     return function (y) {
//         return x+y
//     }
// }
//
// var add5 = makeAdd(5)
//
// console.log(add5(2))

function f1(){
    var n=999;
    function f2() {
        console.log(n)
    }
    return f2()
}

f1()


