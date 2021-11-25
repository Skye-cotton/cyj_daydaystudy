/*
* 查找两个节点的最近的一个共同父节点，可以包括节点自身
*
* */

function commonParentNode(oNode1, oNode2) {
    if(oNode1.contains(oNode2)){
        return oNode1
    }else {
        return commonParentNode(oNode1.parentNode,oNode2) // 通过递归直到找到相同的节点为止
    }
    // if (oNode1.contains(oNode2)){ // 如果在同一层直接返回
    //     return oNode1
    // }else {
    //     return oNode1.parentNode
    // }
}
