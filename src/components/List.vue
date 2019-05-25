<template>
  <div class="list-view">
    <template v-for="item in items" >
      <div :key=item.id>
        <p>{{item.name}}</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type:Array,
      required: true
    }
  }
}
</script>

<style lang= "scss" scoped>
h3 {
  margin: 40px 0 0;
}
</style>