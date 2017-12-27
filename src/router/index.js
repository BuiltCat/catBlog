import Vue from 'vue';
import Router from 'vue-router';
import home from '@/page/home';
import edit from '@/page/editpage';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },{
            path: '/edit',
            name: 'edit',
            component: edit
        }
    ]
});
