<template>
  <q-layout>
    <SiteHeader />
    <q-page-container>
      <q-page class="flex flex-center">
        <SiteAbout />
        <UniversalGallery />
        <SiteAdvantages />
        <SiteYoutube />
        <SiteContacts />
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="accent" @click="backToTop" id="toTopButton"
            :style="scrollDetector()" />
        </q-page-sticky>
      </q-page>
    </q-page-container>
    <SiteFooter />
  </q-layout>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteAbout from './components/SiteAbout.vue';
import UniversalGallery from './components/UniversalGallery.vue';
import SiteAdvantages from './components/SiteAdvantages.vue';
import SiteYoutube from './components/SiteYoutube.vue';
import SiteContacts from './components/SiteContacts.vue';
import SiteFooter from './components/SiteFooter.vue';


export default {
  components: {
    SiteHeader,
    SiteAbout,
    UniversalGallery,
    SiteAdvantages,
    SiteYoutube,
    SiteContacts,
    SiteFooter
  },
  methods: {
    // Function to memorize user's language choice
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
  }
}
</script>

<style>
  html {
    --s: 50px;
    --c: #191b22;
    --_s: calc(2*var(--s)) calc(2*var(--s));
    --_g: 35.36% 35.36% at;
    --_c: #0000 66%, #20222a 68% 70%, #0000 72%;
    background:
      radial-gradient(var(--_g) 100% 25%, var(--_c)) var(--s) var(--s)/var(--_s),
      radial-gradient(var(--_g) 0 75%, var(--_c)) var(--s) var(--s)/var(--_s),
      radial-gradient(var(--_g) 100% 25%, var(--_c)) 0 0/var(--_s),
      radial-gradient(var(--_g) 0 75%, var(--_c)) 0 0/var(--_s),
      repeating-conic-gradient(var(--c) 0 25%, #0000 0 50%) 0 0/var(--_s),
      radial-gradient(var(--_c)) 0 calc(var(--s)/2)/var(--s) var(--s) var(--c);
    background-attachment: fixed;
  }
  html body {
    min-width: 360px;
  }
</style>