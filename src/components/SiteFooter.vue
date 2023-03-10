<template>
    <q-footer elevated class="text-white bg-primary" id="footer">
        <q-toolbar>
          <div class="text-h6">{{ $t('menu.title') }} © {{ currentYear }}</div>
          <q-space />
          <div class="GL__toolbar-link"><a :href="$footerDev" class="text-white">{{ $t('menu.developer') }}</a></div>
        </q-toolbar>
    </q-footer>
</template>

<script>
let currentYear = new Date().getFullYear();
    export default {
        data() {
            return {
                currentYear
            }
        }
    }
</script>