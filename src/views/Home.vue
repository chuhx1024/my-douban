<template>
  <div class="home-view has-header">
    <list :items="items"></list>
  </div>
</template>

<script>
import fetchData from '@/config/fetch'
import {mapState} from 'vuex'
import List from '@/components/List'
export default {
  name: 'Home',
  components: { List },
  data () {
    return {
      items: [
        {id: 1,name:'小明'},
        {id: 2,name:'小明2'},
        {id: 3,name:'小明3'},
      ]
    }
  },
  computed: {
    ...mapState({
      events: state => state.activeities.events
    })
  },
  mounted() {
    fetchData('/event/list',{
      loc: '108288',
      start: 3,
      count: 3
    },'GET')
  },
}
</script>

<style scoped>
  h1 {
    color:red;
    font-size: 1.2rem;
  }
</style>
