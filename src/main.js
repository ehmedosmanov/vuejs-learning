import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './main.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Aura from '@primeuix/themes/aura';
import Components from '@/components/UI/index.js';
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)


const app = createApp(App)

Components.forEach((component) => {
    console.log(component.name)
    app.component(component.name, component)
})

app
    .use(router)
    .use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: '.my-app-dark',
            }
        }
    })
    .use(ToastService)
    .use(pinia)
    .mount('#app')