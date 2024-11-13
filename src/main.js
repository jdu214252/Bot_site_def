import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'boxicons/css/boxicons.min.css';

import { createI18n, useI18n } from 'vue-i18n'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import {languages} from './i18n/index.js'
import {defaultLocale} from './i18n'

const messages = Object.assign(languages)

const i18n = createI18n ({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages

})


createApp(App, {
  setup() { 
    const {t} = useI18n()
    return {t}
  }
}).use(i18n).use(router).mount('#app')
// createApp(App)
//   .use(router)
//   .use(i18n) 
//   .mount('#app');



//-------


// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import 'boxicons/css/boxicons.min.css';
// import { messages } from './locales';
// import { createI18n, useI18n } from 'vue-i18n'
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import {languages} from './i18n'
// import {defaultLocale} from './i18n'

// const messages = Object.assign(languages)

// const i18n = createI18n ({
//     legacy: false,
//     locale: defaultLocale,
//     fallbackLocale: 'en',
//     messages

// })
 

// createApp(App, {
//   setup() {
//     const {t} = useI18n()
//     return {t}
//   }
// }).use(i18n).use(router).mount('#app')
// createApp(App)
//   .use(router)
//   .use(i18n) 
//   .mount('#app');