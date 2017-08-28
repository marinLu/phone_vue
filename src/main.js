
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import axios from "axios"
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios


//公共配置

// axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';


axios.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
    return response;
},function(error){
    return Promise.reject(error);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App),
  components: { App }
})
