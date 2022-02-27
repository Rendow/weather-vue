import VueRouter from 'vue-router'
import Vue from 'vue'
import Main from "@/components/Main";
import About from "@/components/About";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Main, name:'main' },
    { path: '/about/:city', component: About, name:'about' },
]

export const router = new VueRouter({
    mode:'history',
    routes,
})


