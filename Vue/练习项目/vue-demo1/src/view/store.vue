<template>
  <button @click="print">点击</button>
  <br>查看控制台打印
  <button @click="$store.commit('increment')">count++</button>
  {{count}}
</template>

<script>
import {mapState,useStore } from "vuex";

export default {
  name: "store",
  computed: mapState({
    count: state => state.count
  }),
  methods: {
    print: function () {
      console.log(this.count)
      console.log('qqq',this.$store.getters.doneName)
      console.log('过滤id=2',this.$store.getters.getNameId(2))
    }
  }
}
</script>

<style scoped>

</style>
