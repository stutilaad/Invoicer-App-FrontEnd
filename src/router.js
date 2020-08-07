import Vue from 'vue';
import Registerbiller from './components/Registerbiller';
import DisplayJson from './components/DisplayJson';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [
        { path: '/billerlist', component: DisplayJson },
        { path: '/register', component: Registerbiller },
        { path: '*', redirect: '/register' }]
})