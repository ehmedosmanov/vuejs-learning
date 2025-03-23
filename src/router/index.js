
import { createRouter, createWebHistory } from 'vue-router'
import RootLayout from '../layout/index.vue'
import Home from '@/pages/Home/index.vue'
import Basket from '@/pages/Basket/index.vue'
import Wishlist from '@/pages/Wishlist/index.vue'
import ProductsTable from '@/pages/ProductsTable/index.vue'

const routes = [{
    path: '/',
    component: RootLayout,
    children: [
        { path: '', component: Home },
        { path: '/basket', component: Basket },
        { path: '/wishlist', component: Wishlist },
        { path: '/products-table', component: ProductsTable }
    ]
}]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})