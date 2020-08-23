import Vue from 'vue';
import RegisterBiller from './Views/RegisterBiller';
import DisplayJson from './Views/DisplayJson';
import DashBoard from './components/DashBoard'
import AddInvoice from './Views/AddInvoice'
import Login from './Views/login'
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [
        { path: '/billerlist', component: DisplayJson },
        { path: '/register', component: RegisterBiller },
        { path: '/login', component: Login },
        {
            path: '/dashboard', component: DashBoard,
            children: [
                {
                    path: "*",
                    component: AddInvoice
                }
            ],
        },
        { path: '*', redirect: '/login' },
    ]
})