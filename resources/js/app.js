require('./bootstrap');
window.Vue = require('vue');
import vuetify from './plugins/vuetify'
import  { store }  from "./plugins/store";
import router from './plugins/routes'
import "./assets/scss/_global.scss";
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
Vue.component('m-app', require('./Layouts/app.vue').default)
Vue.component(VueSlickCarousel)
Vue.component("VueSlickCarousel", VueSlickCarousel);

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('./assets/components/base', true, /\.vue$/)

for (const file of requireComponent.keys()) {
  const componentConfig = requireComponent(file)
  const name = file
    .replace(/index.js/, '')
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
  const componentName = upperFirst(camelCase(name))

  Vue.component(`Base${componentName}`, componentConfig.default || componentConfig)
}



const app = new Vue({
    el: '#app',
    store,
    vuetify,
    router
});
