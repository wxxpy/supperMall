const Home=()=>import('../views/home/Home.vue')
const Category=()=>import('../views/category/Category.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const Profile=()=>import('../views/profile/Profile.vue')

import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
} from 'vue-router'
const routes=[
    {
        path:'',
        redirect: '/home'
},{
    path:'/home',
    component:Home
},
{
    path:'/category',
    component:Category
},
{
    path:'/cart',
    component:Cart
},
{
    path:'/profile',
    component:Profile
}
]
const router = createRouter({
    history:createWebHistory(),
    routes,
    
})
export default router;