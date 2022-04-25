import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// vue router dgan biblotekamizdan createRouter dgan methodni import qldik

import store from './store.js'

import Login from './views/Login.vue'
import Mail from './views/Mail.vue'
import Dashboard from './views/Dashboard.vue'
import Forget from './views/Forget.vue'
import register from './views/register'
import AppEmailBody from './components/AppEmailBody'
import notFound from './views/notFound'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/login', component: Login, alias: '/'},
        {path: '/mail', component: Mail, meta:{ cantEnter: true},  children:[
            {path: ':mailId?', component: AppEmailBody, props: true,}
        ]},
        {path: '/dashboard', component: Dashboard, meta: {cantEnter: true}, },
        {path: '/forget', component: Forget, }, // meta: {cantEnter: false}  meta -> ozgaruvchi qoshish u-n. 
        {path: '/register', component: register},        
        {path: '/:notFound(.*)', component: notFound}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => { // routerri himoyalash.
    let authed = store.state.auth
    console.log(authed);
    if(to.matched.some(record => record.meta.cantEnter)){
        if(authed){
            next()
        }
        else{
            router.replace('/login')
        }
    }
    else{
        next()
    } ///// Pachti umuman chummadm!!!!!!!!!!!!!!
})



export default router