<template>
  <div>
    <h3 class="title">
      <slot></slot>
      <p>--------------------</p>
    </h3>

  </div>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style scoped>
  .title{
    color: #201bd1;
    text-align: left;
  }
</style>
