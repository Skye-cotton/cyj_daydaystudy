/*
*描述
获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组
4. 不支持URLSearchParams方法
* 输入：http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key
* 输出：[1,2,3]
*
* */
function getUrlParam(sUrl, sKey) {
// console.log(sUrl.split('#')[0].split('?')[1])
    var param = sUrl.split('#')[0].split('?')[1].split('&')
    var result = []
    var resobj = {}
    console.log(sUrl)
    if(sKey) {
        for(let i =0;i < param.length; i++) {
            // 键值对
            if(param[i].split('=')[0] == sKey) {
                result.push(param[i].split('=')[1])
            }
        }

        if(result.length === 0){
            return ''
        }else if(result.length === 1){
            return result[0]
        }else {
            return result
        }
    }else {
        for(let i =0;i<param.length;i++) {
            if(resobj[param[i].split('=')[0]]){
                resobj[param[i].split('=')[0]].push(param[i].split('=')[1])
            }else {
                resobj[param[i].split('=')[0]]=[param[i].split('=')[1]]
            }
        }
        return resobj
    }
}
console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe','key'))
