<<<<<<< HEAD
<template>
  {{ state.count }}
  {{num}}
  <button @click="add">加1</button>
</template>

<script>
import { reactive,ref } from 'vue'

export default {
  setup() {
    const state = reactive({
      count:1
    })
    const num = ref(10)
    function add() {
      state.count++
      num.value +=2
    }

    return {
      state,
      add,
      num
    }
  }
}
</script>
=======
<template>
  {{ state.count }}
  {{num}}
  <button @click="add">加1</button>
</template>

<script>
import { reactive,ref } from 'vue'

export default {
  setup() {
    const state = reactive({
      count:1
    })
    const num = ref(10)
    function add() {
      state.count++
      num.value +=2
    }

    return {
      state,
      add,
      num
    }
  }
}
</script>
>>>>>>> 519485e28488801ec34e21af43a98d14a740bb56
