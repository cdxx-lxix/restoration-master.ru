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