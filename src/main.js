import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入封装通用组件库
import comUi from "./components/index.js";
Vue.config.productionTip = false

//使用组件
Vue.use(comUi);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
