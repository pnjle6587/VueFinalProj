// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import zh_TW from 'vee-validate/dist/locale/zh_TW';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap'

import Vue from 'vue'
import App from './App'
import router from './router'
import './bus'
import currencyFilter from './filters/currency'

Vue.use(VueAxios, axios)
// Vue.use(VeeValidate);
Vue.use(VueI18n);
Vue.config.productionTip = false
axios.defaults.withCredentials = true;

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);

const i18n = new VueI18n({
  locale: 'zh_TW'
});

Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zh_TW
  }
});

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    const api = `${process.env.APIPATH}/api/user/check`;

      axios.post(api).then((response) => {
        if(response.data.success){
          next();
        }
        else{
          next({
            path: '/login',
          })
        }
      })
    console.log('這裡需要驗證');
  }else{
    next();
  }
})