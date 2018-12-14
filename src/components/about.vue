<template>
<div>
  <h1>about</h1>
  <p>
    {{ aboutMsg }}
  </p>
</div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      aboutMsg: 'About 组件'
    }
  }
}
</script>

<style scoped>

</style>
