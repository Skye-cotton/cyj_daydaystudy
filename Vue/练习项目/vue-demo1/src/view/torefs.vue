<<<<<<< HEAD
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
=======
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
>>>>>>> 519485e28488801ec34e21af43a98d14a740bb56
