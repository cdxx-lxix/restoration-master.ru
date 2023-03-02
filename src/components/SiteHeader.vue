<template>
  <q-header elevated class="text-white" style="background: #24292e" height-hint="61.59">
    <q-toolbar class="q-py-sm q-px-md">

      <!-- START: Logo and Name. Left side. -->
      <q-btn round dense flat :ripple="{ center: true }" size="19px" class="q-mr-sm" no-caps ><img :src="logo" ></q-btn>
      <q-toolbar-title>Restoration Master</q-toolbar-title>
      <!-- END: Logo and Name. Left side. -->

      <!-- START: Menu. Center -->
      <div v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
        <a href="javascript:void(0)" class="text-white">
          {{ $t("menu.start") }}
        </a>
        <a href="javascript:void(0)" class="text-white">
          {{ $t("menu.restorations") }}
        </a>
        <a href="javascript:void(0)" class="text-white">
          {{ $t("menu.scrapings") }}
        </a>
        <a href="javascript:void(0)" class="text-white">
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