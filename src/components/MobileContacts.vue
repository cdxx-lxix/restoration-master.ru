<template>
    <div class="fit row-inline wrap justify-center items-center content-center CNT__all" id="contacts">
        <q-card class="bg-grey-9" dark flat bordered>
            <q-item>
                <q-item-section>
                    <q-item-label>{{ $t('contacts.header') }}</q-item-label>
                    <q-item-label caption class="text-white">
                        {{ $t('contacts.subtitle') }}
                    </q-item-label>
                </q-item-section>
            </q-item>
            <q-card-actions class="justify-center items-center content-center">
                <q-btn v-for="option in contactOptions" :key="option" :href="option.link" round dense flat
                    :ripple="{ center: true }"><q-avatar><img :src="option.name"></q-avatar></q-btn>
            </q-card-actions>
            <q-card-section horizontal style="padding-top: 0.5em;">
                <iframe
                    src="https://yandex.com/map-widget/v1/?um=constructor%3Acfa91728df9cc902371cc18495e202dce9fa5f8988f04f38bee61b920ba0c88b&amp;source=constructor"
                    width="100%" height="425" frameborder="0">
                </iframe>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import telegram from '../assets/telegram.png';
import viber from '../assets/viber.png';
import whatsapp from '../assets/whatsapp.png';

export default {
    data() {
        return {
            contactOptions: {
                wp: { name: whatsapp, link: '' },
                vb: { name: viber, link: '' },
                tg: { name: telegram, link: '' },
                ph: { name: phone, link: '' },
                ml: { name: mail, link: '' }
            }
        }
    }
}
</script>