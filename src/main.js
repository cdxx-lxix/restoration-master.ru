import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { VueWindowSizePlugin } from 'vue-window-size/plugin';

const app = createApp(App);

// List of global variables
app.config.globalProperties.$phoneNumber = "89109101010";
app.config.globalProperties.$menuLinkOne = "#aboutme";
app.config.globalProperties.$menuLinkTwo = "#gallery";
app.config.globalProperties.$menuLinkThree = "#youtube";
app.config.globalProperties.$menuLinkFour = "#contacts";
app.config.globalProperties.$footerDev = "https://mladich.com";

// App creation
app.use(Quasar, quasarUserOptions).use(i18n).use(VueWindowSizePlugin).mount('#app')

