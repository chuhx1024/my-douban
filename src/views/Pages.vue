<template>
  <div class="pages-view">
    <header-bar @showTalion="open"/>
    <router-view></router-view>
    <talion v-show="talion" @closeTalion="close"/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import Talion from '@/views/Talion'
export default {
  name: 'Pages',
  data () {
    return {
      talion: ''
    }
  },
  components: { HeaderBar, Talion },
  methods: {
    open () {
      this.talion = 'open'
    },
    close () {
      this.talion = ''
    }

  }

}
</script>

<style scoped>
  h1 {
    color:red;
  }
</style>
