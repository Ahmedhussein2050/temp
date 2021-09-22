import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import router from './router.js'
import store from './store/index.js'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPlusCircle, fas, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faTwitter, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook, faFacebookF, faTwitter, faYoutube, faInstagram, faPlusCircle)
// import 'primevue/resources/themes/saga-purple/themes.css'
// import 'primevue/resources/primevue.min.css'
// import 'primeicons/primeicons.css'
library.add(fas, faShoppingCart)
const app = createApp(App)
app.use(PrimeVue)
app.use(store)
app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app');
