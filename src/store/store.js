import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    nav: [
        {
            name: '首页'
        },
        {
            name: '目录'
        },
        {
            name: '文章'
        },
        {
            name: '音乐'
        },
        {
            name: '关于'
        }
    ],
    swpier: {},
    catalog: {},
};

const getters = {
    
};


export default new Vuex.Store({
    state,
    getters
});
