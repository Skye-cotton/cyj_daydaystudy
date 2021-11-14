# nextTick

## 1. 官方定义

DOM 更新

```
this.$nextTick()
执行下一步
```

一个例子

```
methods: {
  handleClick () {
    this.list.push(this.info)
    this.info = ''
    //this.$nextTick(() => {
    //  console.log('点击添加后执行')
    //})
    this.msg = '被改变了'
    this.$nextTick()
  }
}
```



## 2. vue如何监听DOM更新完毕呢？

能监听到DOM改动的API：MutationObserver(HTML5新增的属性，用于监听DOM修改事件，能够监听到节点的属性、文本内 容、子节点等的改动，是一个功能强大的利器。)

## nextTick方法的实现原理

以上就是vue的nextTick方法的实现原理了，总结一下就是：

1. vue用异步队列的方式来控制DOM更新和nextTick回调先后执行
2. microtask因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕
3. 因为兼容性问题，vue不得不做了microtask向macrotask的降级方案







## 异步更新队列

Vue在更新DOM时是异步执行的，只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。