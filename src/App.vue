<template>
  <div id="app">

    <div>

    </div>
    <keep-alive >
      <router-view></router-view>
    </keep-alive>
    <div @click="btn">{{me}}</div>
    <tabbar>
      <tabbaritem link='/home'>
        <div slot="itemicon" class="iconfont icon-home"></div>
        <div slot="itemtext" class="icontext">主页</div>
      </tabbaritem>
      <tabbaritem link='/classify'>
        <div slot="itemicon" class="iconfont icon-leimupinleifenleileibie2"></div>
        <div slot="itemtext" class="icontext">分类</div>
      </tabbaritem>
      <tabbaritem link="/trolley">
        <div slot="itemicon" class="iconfont icon-gwc"></div>
        <div slot="itemtext" class="icontext">购物车</div>
      </tabbaritem>
      <tabbaritem link="/profile">
        <div slot="itemicon" class="iconfont icon-wode"></div>
        <div slot="itemtext" class="icontext">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from '../src/components/tabbar/tabbar.vue'
import tabbaritem from '../src/components/tabbar/tabbaritem.vue';

export default {
  name: 'App',
  data() {
    return {
       arr:[],
       me:0
    };
  },
  components: {
    tabbar,
    tabbaritem
  },
  methods:{
    btn(){
      for (let i=0;i<123;i++){
       this.arr.push(123)
      }
      this.me= this.arr.reduce((x,y)=> x*y)
      
    }
  },
  computed:{
  }
}
</script>

<style>
@import url(../public/iconfont/iconfont.css);
</style>