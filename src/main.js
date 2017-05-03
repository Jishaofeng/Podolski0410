// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import swiperCss from '../src/assets/swiper-3.4.2.min.css'
//import swiper from './assets/swiper.jquery.js'
//import 'element-ui/lib/theme-default/index.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';


//Vue.use(ElementUI)
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
 
})
