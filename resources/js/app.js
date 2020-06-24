import Vue from 'vue';
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import router from './router/index';
import store from './store';

Vue.use(BootstrapVue);


new Vue({
    el : '#app',
    store,
    router,
    render: h => h(App)
});
