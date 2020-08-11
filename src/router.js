import Vue from 'vue';
import RegisterBiller from './components/RegisterBiller';
import DisplayJson from './components/DisplayJson';
import Login from './components/login'
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [
        { path: '/billerlist', component: DisplayJson },
        { path: '/register', component: RegisterBiller },
        { path: '/login', component: Login },
        { path: '*', redirect: '/register' },
    ]
})