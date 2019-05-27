<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="search"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
#app {
  max-width: 41.2rem;
  margin:0 auto;
}

.has-header {
  margin-top: 4.8rem;
}

ul,li,a,h2{
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}


</style>
