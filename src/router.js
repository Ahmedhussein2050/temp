import { createRouter, createWebHistory } from "vue-router";

import ProductsList from './pages/products/ProductsList.vue';
import ProductDetails from './pages/products/ProductDetails.vue';
import FavouritesReceived from './pages/favourites/FavouritesReceived.vue';
import NotFound from './pages/NotFound.vue';
import TheHome from './pages/TheHome.vue'
import BeautyHealth from './pages/products/categories/BeautyHealth.vue'
import Details from './pages/products/categories/Details.vue'
import Electronics from './pages/products/categories/Electronics.vue'
import Fashion from './pages/products/categories/Fashion.vue'
import Mobiles from './pages/products/categories/Mobiles.vue'
import Supermarket from './pages/products/categories/Supermarket.vue'
import UserCart from './pages/adds/UserCart.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/home', component: TheHome},
    { path: "/", redirect: "/home" },   
    { path: "/products", component: ProductsList },
    { path: "/product/:id", component: ProductDetails },
    { path: "/favourites", component: FavouritesReceived},
    { path: "/BandH", component: BeautyHealth },
    { path: "/details", component: Details },
    { path: "/electronics", component: Electronics },
    { path: "/fashion", component: Fashion },
    { path: "/mobiles", component: Mobiles },
    { path: "/Supermarket", component: Supermarket },    
    { path: '/cart', component: UserCart },
    { path: "/:notFound(.*)", component: NotFound },   
  ],
});
export default router;
