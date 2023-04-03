<template>
  <!-- Desktop & Tablets -->
  <template v-if="$windowWidth >= 1080">
    <q-header elevated class="text-white bg-primary" height-hint="61.59" id="header">
      <q-toolbar class="q-py-sm q-px-md">

        <!-- START: Logo and Name. Left side. -->
        <q-btn round dense flat :ripple="{ center: true }" size="19px" class="q-mr-sm" no-caps><img :src="logo"></q-btn>
        <q-toolbar-title>{{ $t("menu.title") }}</q-toolbar-title>
        <!-- END: Logo and Name. Left side. -->

        <!-- START: Menu. Center -->
        <div v-if="$q.screen.gt.sm"
          class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <a :href="$menuLinkOne" class="text-white">
            {{ $t("menu.start") }}
          </a>
          <a :href="$menuLinkTwo" class="text-white">
            {{ $t("menu.restorations") }}
          </a>
          <a :href="$menuLinkThree" class="text-white">
            {{ $t("menu.scrapings") }}
          </a>
          <a :href="$menuLinkFour" class="text-white">
            {{ $t("menu.contacts") }}
          </a>
        </div>
        <q-space />
        <!-- END: Menu. Center -->

        <!-- START: Language and contacts. Right side -->
        <SiteLang />
        <!-- END: Language and contacts. Right side -->

      </q-toolbar>
    </q-header>
  </template>

  <!-- Mobile -->
  <template v-else>
    <q-header elevated class="text-white bg-primary" height-hint="61.59" style="position: sticky" id="header">
      <q-toolbar class="q-py-sm q-px-md">

        <!-- START: Name. Left side. @click="drawerLeft = true" -->
        <q-btn flat round dense icon="menu">
          <q-menu auto-close class="bg-primary text-white" transition-show="jump-down" transition-hide="jump-up">
            <q-list class="MENU__width">

              <!-- LOGO SECTION -->
              <q-item class="column items-center">
                <q-avatar size="72px">
                  <img :src="logo">
                </q-avatar>
              </q-item>

              <!-- PHONE SECTION -->
              <q-item clickable v-ripple :href="'tel:' + this.$phoneNumber">
                <q-item-section>
                  <a class="text-weight-bold">{{ $t("menu.callme")
                  }}</a>
                </q-item-section>
              </q-item>
              <q-separator />
              <!-- MENU SECTION -->
              <q-item clickable v-ripple :href="$menuLinkOne">
                <q-item-section>{{ $t("menu.start") }}</q-item-section>
              </q-item>
              <q-item clickable v-ripple :href="$menuLinkTwo">
                <q-item-section>{{ $t("menu.restorations") }}</q-item-section>
              </q-item>
              <q-item clickable v-ripple :href="$menuLinkThree">
                <q-item-section>{{ $t("menu.scrapings") }}</q-item-section>
              </q-item>
              <q-item clickable v-ripple :href="$menuLinkFour">
                <q-item-section>{{ $t("menu.contacts") }}</q-item-section>
              </q-item>
              <q-separator />

              <!-- LANGUAGE SECTION -->
              <q-item clickable v-ripple @click="this.$i18n.locale = 'ru'; rememberLang()"
                v-show="this.$i18n.locale == 'en'">
                <q-item-section class="items-center">
                  <div class="row">
                    <div>{{ $t("menu.language") }}</div>
                    <div>Русский</div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="this.$i18n.locale = 'en'; rememberLang()"
                v-show="this.$i18n.locale == 'ru'">
                <q-item-section class="items-center">
                  <div class="row">
                    <div>{{ $t("menu.language") }}</div>
                    <div>English</div>
                  </div>
                </q-item-section>
              </q-item>

            </q-list>
          </q-menu></q-btn>
        <q-toolbar-title>{{ $t("menu.title") }}</q-toolbar-title>
        <!-- END: Left side. -->

      </q-toolbar>
    </q-header>
  </template>
</template>
  
<script>
import logo from '../assets/rm2.svg'
import SiteLang from './SiteLanguages.vue'

export default {
  components: {
    SiteLang: SiteLang
  },
  data() {
    return {
      logo
    }
  }
}
</script>