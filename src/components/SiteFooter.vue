<template>
    <q-footer elevated class="text-white bg-primary" id="footer">
        <q-toolbar>
            <div class="GL__toolbar-link fit" style="display: flex; justify-content: flex-start;">{{ $t('menu.title') }} © {{ currentYear }}</div>
            <q-space />
            <div class="GL__toolbar-link fit" style="justify-content: flex-end; display: flex;"><a :href="$footerDev" class="text-white">{{ $t('menu.developer') }}</a></div>
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