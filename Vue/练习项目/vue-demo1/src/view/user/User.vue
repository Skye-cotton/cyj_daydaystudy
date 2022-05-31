<template>
  <router-link to="/user/posts">跳转到UserPosts</router-link>&nbsp;&nbsp;&nbsp;
  <router-link to="/user/profile">跳转到UserProfile</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "User"
}
</script>

<style scoped>

</style>
