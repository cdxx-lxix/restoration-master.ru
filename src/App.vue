<template>
  <q-layout >
    <SiteHeader v-if="$windowWidth >= 1080" />
    <MobileHeader v-else />
    <q-page-container>
      <q-page class="flex flex-center">
        <SiteAbout v-if="$windowWidth >= 680" />
        <MobileAbout v-else />
        <UniversalGallery />
        <SiteAdvantages v-if="$windowWidth >= 640" />
          <MobileAdvantages v-else />
        <SiteYoutube />
        <SiteContacts v-if="$windowWidth >= 680" />
        <MobileContacts v-else />
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" @click="backToTop" id="toTopButton" :style="scrollDetector()"/>
        </q-page-sticky>
      </q-page>
    </q-page-container>
    <SiteFooter />
  </q-layout>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteAbout from './components/SiteAbout.vue';
import SiteAdvantages from './components/SiteAdvantages.vue';
import MobileHeader from "./components/MobileHeader.vue";
import UniversalGallery from './components/UniversalGallery.vue';
import SiteYoutube from './components/SiteYoutube.vue';
import MobileAdvantages from './components/MobileAdvantages.vue';
import SiteFooter from './components/SiteFooter.vue';
import SiteContacts from './components/SiteContacts.vue';
import MobileContacts from './components/MobileContacts.vue';
import MobileAbout from './components/MobileAbout.vue'


export default {
  components: {
    SiteHeader,
    MobileHeader,
    SiteAbout,
    SiteAdvantages,
    UniversalGallery,
    SiteYoutube,
    MobileAdvantages,
    SiteFooter,
    SiteContacts,
    MobileContacts,
    MobileAbout
  },
  methods: {
    detectLang() {
      let lang = localStorage.getItem('lang');
      if (!lang) {
        lang = 'ru'
      }
      this.$i18n.locale = lang;
    },
    backToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    scrollDetector() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        return ''
      } else {
        return 'display: none;'
      }
    }
  },
  beforeMount() {
   this.detectLang()
  },
  computed: {
    scaler() {
      const zoom = Number.parseFloat(this.mutableZoom.toFixed(2))
      return {
        width: `${this.width}px`,
        height: this.full ? `${this.height}px` : 'auto',
        transform: `scale(${zoom}) translate(${this.shiftX}px, ${this.shiftY}px)`,
        }
    }
  }
}
</script>

<style>
  html {
  --s: 50px;
  --c: #191b22;
  --_s: calc(2*var(--s)) calc(2*var(--s));
  --_g: 35.36% 35.36% at;
  --_c: #0000 66%,#20222a 68% 70%,#0000 72%;
  background: 
    radial-gradient(var(--_g) 100% 25%,var(--_c)) var(--s) var(--s)/var(--_s), 
    radial-gradient(var(--_g) 0 75%,var(--_c)) var(--s) var(--s)/var(--_s), 
    radial-gradient(var(--_g) 100% 25%,var(--_c)) 0 0/var(--_s), 
    radial-gradient(var(--_g) 0 75%,var(--_c)) 0 0/var(--_s), 
    repeating-conic-gradient(var(--c) 0 25%,#0000 0 50%) 0 0/var(--_s), 
    radial-gradient(var(--_c)) 0 calc(var(--s)/2)/var(--s) var(--s) var(--c);
  background-attachment: fixed;
}
</style>