<template>
  <div>
    <h1>home</h1>
    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home 组件'
    }
  }
}
</script>

<style scoped>

</style>
