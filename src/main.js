import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { VueWindowSizePlugin } from 'vue-window-size/plugin';

createApp(App).use(Quasar, quasarUserOptions).use(i18n).use(VueWindowSizePlugin).mount('#app')

