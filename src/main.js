import Vue from 'vue';
import Storage from 'vue-ls';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from '@/store/index';
import './assets/iconfonts/iconfont.css';
import '@/permission' // permission control
//import store from './storeold'
import config from '@/defaultSettings';
import echarts from 'echarts';
import VueParticles from 'vue-particles';
import axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.prototype.$axios = axios;

Vue.use(VueParticles)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;


Vue.use(Storage, config.storageOptions);
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
