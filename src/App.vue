<template>
  <div id="app">
     <router-view></router-view>
     <main-tab-bar></main-tab-bar>
  </div>
 
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
    
  }
}
</script>

<style lang="less" scoped>
@import "../src/assets/css/base.css";

</style>
