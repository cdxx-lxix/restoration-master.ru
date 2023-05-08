import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { VueWindowSizePlugin } from 'vue-window-size/plugin';


// Lazy loading of components
const SiteHeader = () => import(
    /* webpackChunkName: "SiteHeader" */ './components/SiteHeader.vue'
);
const SiteLanguages = () => import(
    /* webpackChunkName: "SiteLanguages" */ './components/SiteLanguages.vue'
);
const SiteAbout = () => import(
    /* webpackChunkName: "SiteAbout" */ './components/SiteAbout.vue'
);
const UniversalGallery = () => import(
    /* webpackChunkName: "UniversalGallery" */ './components/UniversalGallery.vue'
);
const SiteAdvantages  = () => import(
    /* webpackChunkName: "SiteAdvantages" */ './components/SiteAdvantages.vue'
);
const SiteYoutube = () => import(
    /* webpackChunkName: "SiteYoutube" */ './components/SiteYoutube.vue'
);
const SiteContacts = () => import(
    /* webpackChunkName: "SiteContacts" */ './components/SiteContacts.vue'
);
const SiteFooter = () => import(
    /* webpackChunkName: "SiteFooter" */ './components/SiteFooter.vue'
);

const app = createApp(App, {
    components: {
      SiteHeader,
      SiteLanguages,
      SiteAbout,
      UniversalGallery,
      SiteAdvantages,
      SiteYoutube,
      SiteContacts,
      SiteFooter
    }
});

// List of global variables
app.config.globalProperties.$phoneNumber = "+79261725511";
app.config.globalProperties.$menuLinkOne = "#aboutme";
app.config.globalProperties.$menuLinkTwo = "#gallery";
app.config.globalProperties.$menuLinkThree = "#youtube";
app.config.globalProperties.$menuLinkFour = "#contacts";
app.config.globalProperties.$footerDev = "https://mladich.com";

// App creation
app.use(Quasar, quasarUserOptions).use(i18n).use(VueWindowSizePlugin).mount('#app')

