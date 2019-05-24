<template>
  <div class="hello">
    <header-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  name: 'Pages',
  components: { HeaderBar },
}
</script>

<style scoped>
  h1 {
    color:red;
  }
</style>
