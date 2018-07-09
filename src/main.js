import Vue from 'vue'

import './firebase'
import VueFire from 'vuefire'
Vue.use(VueFire);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

const moment = require('moment')
require('moment/locale/fr')

Vue.use(require('vue-moment'), {
    moment
})

import * as VueGoogleMaps from 'vue2-google-maps'
import { APIKEY_GMAP } from "./APIKeys"
Vue.use(VueGoogleMaps, {
    load: {
        key: APIKEY_GMAP,
        libraries: 'places',
    }});

const router = new VueRouter({
     mode: 'history',
     routes: [{
         path: '/',
         name: 'root'
     },{
         path: '/musique-rock-paris',
         component: require('./components/Ecoute.vue').default,
         name: 'ecoute'
     },{
         path: '/concerts-rock-paris',
         component: require('./components/ListeConcerts.vue').default,
         name: 'concerts'
     },{
         path: '/contact-groupe-rock',
         component: require('./components/Actualites.vue').default,
         name: 'actualites'
     },{
         path: '/addconcert',
         component: require('./components/AjoutConcert.vue').default,
         name: 'ajoutConcert',
         meta: { requiresAuth: true }
     },{
         path: '/login',
         component: require('./components/Login.vue').default,
         name: 'login',
     },{
         path: '*',
         redirect: '/'
         }]
});

import {tokenRef} from "./firebase";

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.accessToken) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
        })
        } else {
        tokenRef.on('value', function (snapshot){
            let tokenAlea = snapshot.val().alea.value
            if (localStorage.accessToken.toString() !== tokenAlea.toString()) {
                next({
                    path: '/login',
                    query: {redirect: to.fullPath}
                })
            } else {
                next ()
            }
        })
    }} else {
        next()
    }
})

Vue.config.productionTip = false;

const app = new Vue({
    router,
  render: h => h(require('./App.vue').default)
}).$mount('#app');


