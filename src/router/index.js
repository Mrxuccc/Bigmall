import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home/home.vue'
import classify from '../views/classify/classify.vue'
import profile from '../views/profile/proflie.vue'
import trolley from '../views/trolley/trolley.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/classify',
        name: 'classify',
        component: classify
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile
    },
    {
        path: '/trolley',
        name: 'trolley',
        component: trolley
    }
]

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes
})

export default router