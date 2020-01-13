import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/pages/Login';
import Dashboard from '@/components/Dashboard';
import Products from '@/components/pages/Products';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path: '*',
            redirect: 'login',
        },

        {
            name: 'HelloWorld',
            path: '/',
            component: HelloWorld,
            meta: { requireAuth: true }
        },

        {
            path: '/login',
            name: 'Login',
            component: Login,
        },

        {
            path: '/admin',
            name: 'HelloWorld',
            component: Dashboard,
            meta: { requireAuth: true },
            children: [
                {
                    path: 'products',
                    name: 'Products',
                    component: Products,
                    meta: { requireAuth: true },
                }
            ]
        }
    ]
});