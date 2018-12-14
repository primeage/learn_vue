<template>
<div>
  <h1>User</h1>
  <div>我是User组件, 动态部分是{{ userId }}</div>
</div>
</template>

<script>
export default {
  name: 'user',
  computed: {
    userId () {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>
