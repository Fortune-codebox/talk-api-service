import Vue from 'vue';
import Vuex from 'vuex';
import talk from './modules/talk.module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        talk
    }
})