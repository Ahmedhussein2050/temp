import {createStore} from 'vuex';
import productsModule from './modules/products/index.js'
import CartModule from './modules/adds/Cart.js'
import FavModule from './modules/favourites/Fav.js'
const store = createStore({
    modules: {
        products: productsModule,
        cart: CartModule,
        fav: FavModule
    }
})
export default store;