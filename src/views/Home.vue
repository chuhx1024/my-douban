<template>
  <div class="home-view has-header">
    <list :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import {mapState, mapActions} from 'vuex'
import List from '@/components/List'
export default {
  name: 'Home',
  components: { List, InfiniteLoading},
  computed: {
    ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    ...mapActions([
      'loadMore'
    ]),
    onInfinite() {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      }, 1000);
    }
  },
  mounted() {
    // this.$store.dispatch('getData')
    // this.loadMore()
  },
}
</script>

<style scoped>
  h1 {
    color:red;
    font-size: 1.2rem;
  }
</style>
