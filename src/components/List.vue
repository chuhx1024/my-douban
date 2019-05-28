<template>
  <div class="list-view">
    <template v-for="item in items" >
      <router-link
        class="thumbnail"
        :key = "item.id"
        :to= "{name:'DetailView',params: {id:item.id}}">
        <div class="content" >
          <img :src="item.image_hlarge" alt="cover">
          <h3>{{item.title}}</h3>
          <p>{{item.content | cutStr(29)}}</p>
        </div>
        <div class="author">
          <span class="name">{{item.category_name}}</span>
          <span class="label" v-if="item.subcategory_name">
            本活动来自栏目 {{item.subcategory_name}}
          </span>
        </div>
      </router-link>
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
  },
  filters: {
    subStr (val) {
      let tempVal = val.replace(/<.*?>/g, '')
      return tempVal.slice(0, 30)
    }
  },
  mounted () {
    // console.log(this.items, 123)
  }
  
}
</script>

<style lang= "scss" scoped>
.list-view {
  .thumbnail {
    position: relative;
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;
    margin-left: 1.8rem;
    .content {
      overflow: hidden;
      margin-bottom: 1rem;
      
      img {
        float: right;
        width: 25.6%;
        height: 8.678rem;
        margin-left:2.5rem;
      }

      h3 {
        margin-top: 0;
        margin-bottom: 0.6rem;
        line-height: 1.41;
        text-align: justify;
        font-size: 1.7rem;
        font-weight: 500;
        color: #494949;
      }
      
      p {
        line-height: 1.5;
        text-align: justify;
        color: #aaa;
        font-size: 1.2rem;
        overflow: hidden;
      }
    }
    .author {
      font-size: 1.2rem;
      color: #ccc;

      .label {
        position: absolute;
        bottom: 2.5rem;
        right: 1.8rem;
      }
    }
    &::before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 0.1rem;
      content: '';
      background: #e3e3e3;
    }
  }
}
</style>