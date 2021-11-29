/*
描述
为 Array 对象添加一个去除重复项的方法
示例1
输入：
[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
输出：
[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
 */

Array.prototype.uniq = function () {
// return Array.from(new Set(this))
// console.log(this,'llll')
    var hasNaN = false // 特殊情况NaN
    for(var i=0;i<this.length;i++) {
        if (isNaN(this[i])) {hasNaN=true}
        for (var j=i+1;j<this.length;) {
            if(this[i] === this[j] || (hasNaN && this[i] !== this[j])) {
                this.splice(j,1)
            }else {
                j++
            }
        }
    }
    return this
//     var hasNaN = false;
//     for(var i = 0; i < this.length; i++){
//         if(this[i] !== this[i]) hasNaN = true;
//         for(var j = i+1; j < this.length;){
//             if(this[i] === this[j] ||(hasNaN && this[j] !== this[j])){
//                 this.splice(j,1);
//             }else{
//                 j++;
//             }
//         }
//     }
//     return this;
}
console.log([true, false, null, undefined, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq())

/*
数组去重的方法
1.  Array.from(new Set(this))
2. for + indexOf
Array.prototype.uniq = function () {
// return Array.from(new Set(this))
// console.log(this,'llll')
    let arr = this;
    var res = []
    for(let i=0;i<arr.length;i++) {
        if(res.indexOf(arr[i]) === -1){
            res.push(arr[i])
        }
    }
    return res
}
3. for + splice
 */
