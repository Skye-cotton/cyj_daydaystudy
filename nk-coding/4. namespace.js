/**
 * 描述
 根据包名，在指定空间中创建对象
 输入描述：
 namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
 输出描述：
 {a: {test: 1, b: {c: {d: {}}}}}
 */
// function namespace(oNamespace, sPackage) {
//     // let arr = sPackage.split('.') // 得到 [ 'a', 'b', 'c', 'd' ]
//     // if (typeof oNamespace === 'obj') {console.log(oNamespace,'////')}
//     // for (let i =0 ;i<arr.length;i++) {
//     //     if (!oNamespace[arr[i]] ){
//     //         oNamespace[arr[i]]={}
//     //         // console.log(oNamespace)
//     //     }
//     // }
//     // return oNamespace
//     let arr = sPackage.split('.')
//     let pointer = oNamespace
//     for(let i =0 ;i<arr.length;i++) {
//         if (!pointer[arr[i]] || typeof pointer[arr[i]] !== 'object') { // 如果pointer里面不存在当前循环的属性，将赋值一个空对象进去
//             pointer[arr[i]] = {}
//         }
//         pointer = pointer[arr[i]]
//         // console.log(oNamespace)
//     }
//     return oNamespace
// }

function namespace(oNamespace, sPackage) {
    let arr = sPackage.split('.')
    let pointer = oNamespace // 防止直接对原对象处理
    // console.log(arr)  // [ 'a', 'b', 'c', 'd' ]
    for(let i =0 ;i<arr.length;i++) {
        if (!pointer[arr[i]] || typeof pointer[arr[i]] !== 'object') { // 对象没有当前属性时，赋一个空对象
            pointer[arr[i]] = {} // 添加 arr[i]: {}

        }
        pointer = pointer[arr[i]] // 对象有当前属性时，直接赋值当前属性
         console.log(oNamespace)
    }
    return oNamespace
}
var a= {}
console.log(namespace(a, 'a.b.c.d.e.f.g'))
