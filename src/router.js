import Vue from 'vue';
import RegisterBiller from './Views/RegisterBiller';
import DisplayJson from './Views/DisplayJson';
import DashBoard from './components/DashBoard';
import AddInvoice from './Views/AddInvoice';
import TemplateOne from './Views/TemplateOne';
import TemplateTwo from './Views/TemplateTwo';
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
                    path: "/dashboard/addinvoice",
                    component: AddInvoice
                },
                {
                    path: "/dashboard/addinvoice-template-one",
                    component: TemplateOne
                }, {
                    path: "/dashboard/addinvoice-template-two",
                    component: TemplateTwo
                }
            ],
        },
        { path: '*', redirect: '/login' },
    ]
})