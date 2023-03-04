<template>
  <q-layout class="bg-grey-1">
    <SiteHeader v-if="$windowWidth >= 1080" />
    <MobileHeader v-else />
    <q-page-container>
      <q-page class="flex flex-center">
        <SiteAbout />
        <SiteRestorations />
        <SiteAdvantages />
        <SiteScrapings />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteAbout from './components/SiteAbout.vue';
import SiteRestorations from './components/SiteRestorations.vue';
import SiteAdvantages from './components/SiteAdvantages.vue';
import SiteScrapings from './components/SiteScrapings.vue';
import MobileHeader from "./components/MobileHeader.vue"


export default {
  components: {
    SiteHeader,
    MobileHeader,
    SiteAbout,
    SiteRestorations,
    SiteAdvantages,
    SiteScrapings
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
      SiteRestorations,
      SiteAdvantages,
      SiteScrapings
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

</style>