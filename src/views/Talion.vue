<template>
  <div class="talion">
    <div class="header-bar">
      <span @click="clonsTalion()">关闭</span>
      <form class="search" onsubmit="return false">
        <input 
          type="search"
          name="query"
          v-model.trim.lazy = 'queryStr'
          @keyup.enter="goSearch()"
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Talion',
  data () {
    return {
      queryStr: ''
    }
  },
  methods: {
    clonsTalion () {
      this.$emit('closeTalion')
    },
    goSearch () {
      this.$emit('closeTalion')
      this.$router.push({
        path:'/search'
      })
    }
  }
}
</script>

<style scoped>
  h1 {
    color:red;
  }
</style>