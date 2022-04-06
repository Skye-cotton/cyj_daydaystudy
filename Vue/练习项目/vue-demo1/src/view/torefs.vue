<template>
<div>111</div>
</template>

<script>
import { toRefs } from "vue";
import {userFeatureX} from "@/components/useFeatureX";
export default {
  setup() {
    const state = userFeatureX()
    const refState = toRefs(state) // 解构成对象
    console.log(state,refState)
    return {
      state,
      refState
    }
  }
}
</script>

<style scoped>

</style>
