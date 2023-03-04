<template>
  <q-header elevated class="text-white bg-primary" height-hint="61.59">
    <q-toolbar class="q-py-sm q-px-md">

      <!-- START: Name. Left side. -->
      <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
      <q-toolbar-title>{{ $t("menu.title") }}</q-toolbar-title>
      <!-- END: Left side. -->

    </q-toolbar>
  </q-header>

  <q-drawer v-model="drawerLeft" show-if-above :width="200" :breakpoint="1080" elevated class="bg-primary text-white">
    <q-scroll-area class="fit">
      <q-list padding class="menu-list items-center">
        <!-- LOGO SECTION -->
        <q-item round dense flat :ripple="{ center: true }" size="15px" class="q-mr-sm" no-caps ><img :src="logo"></q-item>
        <q-separator />
        <!-- LANGUAGE SECTION -->
        <q-item clickable v-ripple @click="this.$i18n.locale = 'ru'; rememberLang()" v-show="this.$i18n.locale == 'en'">
            <q-item-section class="items-center">
              <div class="row"><div>{{ $t("menu.language")}}</div><div>Русский</div></div>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="this.$i18n.locale = 'en'; rememberLang()" v-show="this.$i18n.locale == 'ru'">
            <q-item-section class="items-center">
              <div class="row"><div>{{ $t("menu.language")}}</div><div>English</div></div>
            </q-item-section>
          </q-item>
        <q-separator />
        <!-- MENU SECTION -->
        <q-item clickable v-ripple>
          <q-item-section class="items-center">
            <div href="javascript:void(0)" class="text-white">{{ $t("menu.start") }}</div>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="items-center">
            <div href="javascript:void(0)" class="text-white">{{ $t("menu.restorations") }}</div>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="items-center">
            <div href="javascript:void(0)" class="text-white">{{ $t("menu.scrapings") }}</div>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="items-center">
            <div href="javascript:void(0)" class="text-white">{{ $t("menu.contacts") }}</div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
  
<script>
import logo from '../assets/rm2.svg'
import { ref } from 'vue'

export default {
  data() {
    return {
      logo,
      drawerLeft: ref(false)
    }
  },
    methods: {
      rememberLang() {
        localStorage.setItem('lang', this.$i18n.locale)
      }
    }
}
</script>