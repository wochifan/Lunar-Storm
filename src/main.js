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
       components: {
           default: require('./components/Contact.vue').default,
           another: require('./components/ImagesFb.vue').default,
    },
       name: 'contacts'
     },{
       path: '/addconcert',
       component: require('./components/AjoutConcert.vue').default,
       name: 'ajoutConcert'
     },{
       path: '*',
       redirect: '/'
         }]
})

Vue.config.productionTip = false

const app = new Vue({
    router,
  render: h => h(require('./App.vue').default)
}).$mount('#app');


