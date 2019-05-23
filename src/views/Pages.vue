<template>
  <div class="hello">
    <h1>我就是pages页面</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Pages',
}
</script>

<style scoped>
  h1 {
    color:red;
  }
</style>
