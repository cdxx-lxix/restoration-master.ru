<template>
  <q-layout class="BG__gradient">
    <SiteHeader v-if="$windowWidth >= 1080" />
    <MobileHeader v-else />
    <q-page-container>
      <q-page class="flex flex-center">
        <SiteAbout />
        <UniversalGallery />
        <SiteAdvantages />
        <SiteYoutube />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteAbout from './components/SiteAbout.vue';
import SiteAdvantages from './components/SiteAdvantages.vue';
import MobileHeader from "./components/MobileHeader.vue";
import UniversalGallery from './components/UniversalGallery.vue';
import SiteYoutube from './components/SiteYoutube.vue';


export default {
  components: {
    SiteHeader,
    MobileHeader,
    SiteAbout,
    SiteAdvantages,
    UniversalGallery,
    SiteYoutube
  },
  methods: {
    detectLang() {
      let lang = localStorage.getItem('lang')
      if (!lang) {
        lang = 'ru'
      }
      this.$i18n.locale = lang
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
      SiteYoutube
    }
  }
}
</script>

<style lang="sass">
  
.GL
  &__select-GL__menu-link
    .default-type
      visibility: hidden
    &:hover
      background: #0366d6
      color: white
      .q-item__section--side
        color: white
      .default-type
        visibility: visible
  &__toolbar-link
    a
      color: white
      text-decoration: none
      &:hover
        opacity: 0.7
  &__menu-link:hover
    background: #0366d6
    color: white
  &__menu-link-signed-in,
  &__menu-link-status
    &:hover
      & > div
        background: white !important
  &__menu-link-status
    color: $blue-grey-6
    &:hover
      color: $light-blue-9
  &__toolbar-select.q-field--focused
    width: 450px !important
    .q-field__append
      display: none
.BG
  &__gradient
    /* background: linear-gradient(60deg, #E2E4E8 0%, #A4AAB6 100%) */
    background: #757F9A
    background: -webkit-linear-gradient(to top, #D7DDE8, #757F9A)
    background: linear-gradient(to top, #D7DDE8, #757F9A)


</style>