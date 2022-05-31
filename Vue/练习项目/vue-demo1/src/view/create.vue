<template>
  <div id="test">
    <h3>{{a}}</h3>
    <button @click="handleClick">更改</button>
    <br>查看控制台打印
  </div>
</template>

<script>
import {
  ref,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  // 初始化数据阶段的生命周期，介于beforeCreate和created之间
  setup() {
    const a = ref(0);
    console.log("👌");
    function handleClick() {
      a.value += 1;
    }
    onBeforeMount(() => {
      console.log("组件挂载之前");
    });
    onMounted(() => {
      console.log("DOM挂载完成");
    });
    onBeforeUpdate(() => {
      console.log("DOM更新之前", document.getElementById("test").innerHTML);
    });
    onUpdated(() => {
      console.log("DOM更新完成", document.getElementById("test").innerHTML);
    });
    onBeforeUnmount(() => {
      console.log("实例卸载之前");
    });
    onUnmounted(() => {
      console.log("实例卸载之后");
    });
    return { a, handleClick };
  }
};
</script>
