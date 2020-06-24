import Vue from 'vue';
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'vuejs-noty/dist/vuejs-noty.css';
import router from './router/index';
import store from './store';
import VueNoty from 'vuejs-noty'
 
Vue.use(VueNoty)

Vue.use(BootstrapVue);


new Vue({
    el : '#app',
    store,
    router,
    render: h => h(App)
});
