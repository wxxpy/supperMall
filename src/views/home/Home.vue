<template>
 <div id="home">
   <NavBar class='home-nav'>
    <template v-slot:center>
       购物街
    </template></NavBar>
    
    <scroll class="content" ref="scroll">
      <home-swiper :banners="banners" ref="swiper"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <FeatureView></FeatureView>
      <TabControl class="tab-control" :titles= "['流行','新款','精选']"
      @tabClick="tabClick"></TabControl>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <BackTop @click.enter="backClick" ></BackTop>
   
   
 </div>
 
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from'./childComps/FeatureView.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import TabControl from'components/content/tabControl/TabControl.vue' 
import {getHomeMultidata,getHomeGoods} from "../../network/home"



export default {
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
    
   
  },
  data(){
    return{
     banners:[],
     recommends:[],
     goods:{
       'pop': {page:0,list:[]},
       'new': {page:0,list:[]},
       'sell': {page:0,list:[]},
     },
     currentType:'pop'
    }
  },
  methods:{
    backClick(){
    this.$refs.scroll.scrollTo(0,0)

    },
    tabClick(index){
     switch(index){
       case 0:
         this.currentType='pop'
         break
      case 1:
        this.currentType='new'
        break
        case 2:
        this.currentType='sell'
        break
     }

    },
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list
    })
    },
    //请求商品数据
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page+=1
    })
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    this.getHomeMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
   
  },  
  mounted() {
    
  },

}
</script>

<style scoped> 
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
#home{
  height: 100vh;
  position: relative;
  padding-top: 44px ;
}
.home-nav{
  background-color:var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/* .content{
 height: calc(100%-93px);
 overflow: hidden;
 margin-top: 51px;

} */
.content{
 
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>