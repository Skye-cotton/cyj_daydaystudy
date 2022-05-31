import { createWebHistory,createRouter } from 'vue-router'

// 引入路由文件
import about from "@/view/About";
import home from '@/view/Home.vue'
import reactive from '@/view/reactive.vue'
import torefs from "@/view/torefs";
import watchEffect from '@/view/watchEffect'
import create from '@/view/create'
import store from '@/view/store'
import User from '@/view/user/User'
import UserProfile from '@/view/user/UserProfile'
import UserPosts from '@/view/user/UserPosts'

const routes = [
    {
        path: '/about',  // 路由路径
        name: 'about',   // 路由名称
        component: about // 路由组件
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/reactive',
        name: 'reactive',
        component: reactive
    },
    {
        path: '/torefs',
        name: 'torefs',
        component: torefs
    },
    {
        path: '/watchEffect',
        name: 'watchEffect',
        component: watchEffect
    },
    {
        path: '/create',
        name: 'create',
        component: create
    },
    {
        path: '/store',
        name: 'store',
        component: store
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        children: [
            {
                // 当 /user/:id/profile 匹配成功
                // UserProfile 将被渲染到 User 的 <router-view> 内部
                path: 'profile',
                component: UserProfile,
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 将被渲染到 User 的 <router-view> 内部
                path: 'posts',
                component: UserPosts,
            },
        ]
    },
]

var router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router

