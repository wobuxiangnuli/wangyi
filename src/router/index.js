import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/Home/Home.vue'
const Login = () =>import('@/views/Login.vue')
const Category =() =>import('@/views/Category/category.vue')




const routes = [
 {
  path:'/',
  name:'Layout',
  component:Layout,
  children:[
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/category/:id',
      name:'Category',
      component:Category 
    }
  ]
 },
 {
  path:'/login',
  name:'Login',
  component:Login
 }
]

const router = createRouter({
  //Hash模式
  history: createWebHashHistory(),
  routes
})

export default router
