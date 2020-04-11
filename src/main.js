import Vue from 'vue'
import ElementUI from 'element-ui'
import $ from 'jquery'

import App from './App'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import less from 'less'
Vue.use(less)
Vue.use(ElementUI)

new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})

