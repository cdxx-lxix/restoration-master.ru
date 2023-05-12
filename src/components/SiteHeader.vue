<template>
  <!-- Desktop & Tablets -->
  <template v-if="$windowWidth >= 1080">
    <q-header elevated class="text-white bg-primary" height-hint="61.59" id="header">
      <q-toolbar class="q-py-sm q-px-md">

        <q-btn round dense flat :ripple="{ center: true }" aria-label="Site logo" class="q-mr-sm" no-caps><img :src="logo" :alt="logo" width="45" height="45"></q-btn>
        <q-toolbar-title>{{ $t("menu.title") }}</q-toolbar-title>

        <div class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <a v-for="item in menuItems" :href="item.link" :key="item.name" class="text-white">
            {{ $t(item.name) }}
          </a>
        </div>
        <q-space />

        <SiteLang />

      </q-toolbar>
    </q-header>
  </template>

  <!-- Mobile -->
  <template v-else>
    <q-header elevated class="text-white bg-primary" height-hint="61.59" style="position: sticky" id="header">
      <q-toolbar class="q-py-sm q-px-md">

        <!-- START: Name. Left side. @click="drawerLeft = true" -->
        <q-btn flat round dense icon="menu">
          <q-menu auto-close class="bg-primary text-white" transition-show="jump-down" transition-hide="jump-up" style="width: 150px">
            <q-list class="MENU__width text-center">

              <!-- LOGO SECTION -->
              <q-item class="column items-center">
                <q-avatar size="72px">
                  <img :src="logo" :alt="logo" width="72" height="72">
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
              <q-item clickable v-ripple v-for="item in menuItems" :href="item.link" :key="item.name">
                <q-item-section>{{ $t(item.name) }}</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </q-menu>
        </q-btn>
        <q-toolbar-title>{{ $t("menu.title") }}</q-toolbar-title>

        <SiteLang />

      </q-toolbar>
    </q-header>
  </template>
</template>
  
<script>
import logo from '../assets/icons/rm2.svg'
import SiteLang from './SiteLanguages.vue'

export default {
  components: {
    SiteLang: SiteLang
  },
  data() {
    return {
      logo,
      menuItems: {
        start: { name: 'menu.start', link: this.$menuLinkOne },
        gallery: { name: 'menu.gallery', link: this.$menuLinkTwo },
        channel: { name: 'menu.channel', link: this.$menuLinkThree },
        contacts: { name: 'menu.contacts', link: this.$menuLinkFour }
      }
    }
  }
}
</script>