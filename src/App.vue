<template>
  <q-layout class="BG__gradient">
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
  data() {
    return {
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
    }
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

