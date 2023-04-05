<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" :key="index" 
      class="tab-control-item" 
      :class="{active: index===currentIndex}"
      @click="itemclick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemclick(index){
            this.currentIndex=index
            this.$emit('tabClick',index)
        }

    }

}
</script>

<style scoped>
.active{
    color: var(--color-high-text);
    
}
.active span{
    border-bottom: 3px solid var(--color-tint);
    padding:5px;

}
.tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    sheight: 40px;   
    line-height: 40px;
    background-color: #fff;
}
.tab-control-item{
    flex: 1;
   
}
</style>