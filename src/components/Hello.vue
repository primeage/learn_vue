<template>
  <div>
    <h1>Learn Vue - The second practise!</h1>
    <hr>
    <Title>1. 路由</Title>
    <header>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-view></router-view>
      <Title>2. 动态路由</Title>
      <router-link to="/user/123">User 123</router-link>
      <router-link to="/user/456">User 456</router-link>
      <router-view></router-view>
    </header>
    <hr>
    <hr>
  </div>
</template>

<script>
import Title from '@/components/h_title'
export default {
  name: 'Hello',
  components: {Title}
}
</script>

<style scoped>

</style>
