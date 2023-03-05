<template>
  <q-header elevated class="text-white bg-primary" height-hint="61.59" id="start">
    <q-toolbar class="q-py-sm q-px-md">

      <!-- START: Logo and Name. Left side. -->
      <q-btn round dense flat :ripple="{ center: true }" size="19px" class="q-mr-sm" no-caps ><img :src="logo" ></q-btn>
      <q-toolbar-title>{{ $t("menu.title") }}</q-toolbar-title>
      <!-- END: Logo and Name. Left side. -->

      <!-- START: Menu. Center -->
      <div v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
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
      <SiteLang/>
      <!-- END: Language and contacts. Right side -->
      
    </q-toolbar>
  </q-header>
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