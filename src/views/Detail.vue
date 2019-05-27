<template>
  <div class="detail-view has-header">
    <h1>我就是detail页面</h1>
    <h1>{{eventItem}}</h1>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
  name: 'DetailView',
  computed: {
    ...mapState({
      eventItem : state => state.activities.eventItem
    })
  },
  methods : {
    ...mapActions([
      'getSingleEvent'
    ])
  },
  mounted () {
    this.getSingleEvent({id:this.$route.params.id}).then(() => {
      alert(1)
    })
  }

}
</script>

<style lang="scss" scoped>
.detail-view {
  overflow: hidden;
  padding: 0.7rem 2rem;
  h1 {
    color:red;
  }
}
</style>