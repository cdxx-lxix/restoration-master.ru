<template>
    <q-btn dense flat no-wrap>
      <a class="GL__toolbar-link text-white text-body2 text-weight-bold" :href="'tel:'+this.$phoneNumber">{{ this.$phoneNumber }}</a>
      <q-tooltip>{{ $t("tooltips.phone") }}</q-tooltip>
    </q-btn>
    <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
        <q-btn dense flat no-wrap>
          <q-avatar rounded size="20px">
            <img :src="iconSwitcher()">
          </q-avatar>
          <q-icon name="arrow_drop_down" size="16px" />

          <q-menu auto-close>
            <q-list dense>
              <q-item clickable class="GL__menu-link-status" @click="()=> this.$i18n.locale = 'ru'">
                <q-item-section>
                  <div>Русский</div>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="GL__menu-link-status" @click="()=> this.$i18n.locale = 'en'">
                <q-item-section>
                  <div>English</div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
</template>

<script>
import ru_lang from '../assets/icons/russia-flag.svg'
import en_lang from '../assets/icons/uk-flag.svg'
  export default {
    data() {
      return {
        ru_lang,
        en_lang
      }
    },
    methods: {
      iconSwitcher() {
        if (this.$i18n.locale === 'ru') {
          localStorage.setItem('lang', 'ru')
          return ru_lang
        }
        else if (this.$i18n.locale === 'en') {
          localStorage.setItem('lang', 'en')
          return en_lang
        }
      }
    }
  }
</script>