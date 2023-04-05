<template>
    <div class="goods">
       <GoodsListItem v-for="item in goods" :key="item"
       :goodsItem="item">
       </GoodsListItem>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    components:{
        GoodsListItem
    }

}
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

</style>