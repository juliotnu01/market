require('./bootstrap');
window.Vue = require('vue');
import vuetify from './plugins/vuetify'
import  { store }  from "./plugins/store";
import router from './plugins/routes'
import "./assets/scss/_global.scss";
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VueSlickCarousel from 'vue-slick-carousel'


Vue.component(VueSlickCarousel)
Vue.component("VueSlickCarousel", VueSlickCarousel);
Vue.component('m-app', require('./Layouts/app.vue').default)

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

Vue.filter('numberFormat', function (value, moneda = '') {
  if (!value) return ''
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1,';
  return `${moneda} ${parseFloat(value).toFixed(2).toString().replace(exp,rep)}`
})


const app = new Vue({
    el: '#app',
    store,
    vuetify,
    router
});
