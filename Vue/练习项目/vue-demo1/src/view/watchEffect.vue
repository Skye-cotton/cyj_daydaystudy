<!--<template>-->

<!--</template>-->

<!--<script>-->
<!--import { ref,watchEffect} from "vue";-->
<!--export default {-->
<!--  name: "watchEffect",-->
<!--  setup() {-->
<!--    const num = ref(0)-->

<!--    watchEffect(()=>{console.log(num)})-->
<!--    setTimeout(()=>{-->
<!--      num.value++-->
<!--    },100)-->
<!--    return {-->
<!--      num-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<template>
  <div>
    <input type="text"
           v-model="keyword">
    <br>查看控制台打印
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const keyword = ref('')
    const asyncPrint = val => {
      return setTimeout(() => {
        console.log('user input: ', val)
      }, 1000)
    }
    watchEffect(
        onInvalidate => {
          //用户输入的时间间隔小于1秒，都会立刻清除掉定时，不输入结果。正因为这个，实现了用户防抖的功能，只在用户输入时间间隔大于1秒，才做打印
          const timer = asyncPrint(keyword.value)
          onInvalidate(() => clearTimeout(timer))
          console.log('keyword change: ', keyword.value)
        },
        // flush: 'pre'  watch() 和 watchEffect() 在 DOM 挂载或更新之前运行副作用，所以当侦听器运行时，模板引用还未被更新。
        //flush: 'post' 选项来定义，这将在 DOM 更新后运行副作用，确保模板引用与 DOM 保持同步，并引用正确的元素。
        {
          flush: 'post' // 默认'pre'，同步'sync'，'pre'组件更新之前
        }
    )

    return {
      keyword
    }
  }
}
// 实现对用户输入“防抖”效果
</script>
