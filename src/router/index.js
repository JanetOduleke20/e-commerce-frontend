import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue'
import DisplayProducts from '../components/DisplayProducts.vue'
import ProductsComponent from '../components/ProductsComponent.vue'
import PageNotFound from '../components/PageNotFound.vue'
import ProductsCategory from '../components/ProductsCategory.vue'
import RegisterUser from '../components/RegisterUser.vue'
import TestStore from '../components/TestStore.vue'
import AdminAuth from '../components/AdminAuth.vue'
import AdminDashboard from '../components/AdminDashboard.vue'






const routes = [
    { path : '/', component: HelloWorld, name: 'Home'},
    { path: '/products', name: 'Products', children: [
        {path: '', component: ProductsComponent},
        {path: ':category', component: ProductsCategory, name: 'category'}, 
        { path: ':id/:name', component: DisplayProducts, name: 'Product'},
    ]},
    {path: '/register', component: RegisterUser, name: 'register'}, 
    { path: '/store', component: TestStore},
    { path: '/admin/register', component: AdminAuth},
    { path: '/admin/login', component: AdminAuth},
    { path: '/admin/dashboard', component: AdminDashboard},



    { path: '/:pathMatch(.*)*', component: PageNotFound}
    // { path: '/:catchAll(.*)', component: PageNotFound}
    

]


export const router = createRouter({
    history: createWebHistory(),
    routes
})

