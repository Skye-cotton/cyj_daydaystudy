<template>
    <BaseNavBar
        title="nihao"
        @enlarge-text="dayin"
    ></BaseNavBar><br><br><br>
      <button><router-link to="/home"> Go to Home </router-link></button>&nbsp;&nbsp;&nbsp;
      <button><router-link to="/about"> Go to About </router-link></button>&nbsp;&nbsp;&nbsp;
      <button> <router-link to="/reactive">reactive </router-link> </button>&nbsp;&nbsp;&nbsp;
      <button> <router-link to="/torefs"> torefs </router-link> </button>&nbsp;&nbsp;&nbsp;
      <button> <router-link to="/watchEffect">  watchEffect </router-link> </button>&nbsp;&nbsp;&nbsp;
      <button> <router-link to="/create">  生命周期 </router-link> </button>&nbsp;&nbsp;&nbsp;
      <button> <router-link to="/store">  Store </router-link> </button>&nbsp;&nbsp;&nbsp;
      <button> <router-link to="/user">  User 有子路由 </router-link> </button>&nbsp;&nbsp;&nbsp;
      <button> <router-link :to="{ name: 'user', params: {id:10} }">  User </router-link> </button>&nbsp;&nbsp;&nbsp;
  <div id="view">
    <router-view />
  </div>

</template>

<script>
import BaseNavBar from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    BaseNavBar
  },
  setup() {
    const dayin = function (e) {
      console.log('nihao',e)
    }
    return {
      dayin
    }
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#view {
  margin: 50px;
  width: 90%;
  height: 500px;
  background-color: lightgoldenrodyellow;
}
</style>
