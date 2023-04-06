<template>
    <template v-if="$windowWidth >= 680">
        <div class="fit row-inline wrap justify-center items-center content-center"
            :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="contacts">
            <q-card class="bg-secondary" dark flat>
                <q-item class="BG__cardTop">
                    <q-item-section>
                        <q-item-label>{{ $t('contacts.header') }}</q-item-label>
                        <q-item-label caption class="text-white">
                            {{ $t('contacts.subtitle') }}
                        </q-item-label>
                    </q-item-section>
                    <q-card-actions>
                        <q-btn v-for="option in contactOptions" :key="option" :href="option.link" round dense flat
                            :ripple="{ center: true }"><q-avatar><img :src="option.name"></q-avatar></q-btn>
                    </q-card-actions>
                </q-item>
                <q-separator dark />
                <q-card-section horizontal>
                    <iframe
                        src="https://yandex.com/map-widget/v1/?um=constructor%3Acfa91728df9cc902371cc18495e202dce9fa5f8988f04f38bee61b920ba0c88b&amp;source=constructor"
                        width="100%" height="425" frameborder="0" class="cardFit">
                    </iframe>
                </q-card-section>
            </q-card>
        </div>
    </template>

    <template v-else>
        <div class="fit row-inline wrap justify-center items-center content-center"
            :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="contacts">
            <q-card class="bg-secondary" dark flat>
                <q-item class="BG__cardTop">
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
                <q-separator dark />
                <q-card-section horizontal>
                    <iframe
                        src="https://yandex.com/map-widget/v1/?um=constructor%3Acfa91728df9cc902371cc18495e202dce9fa5f8988f04f38bee61b920ba0c88b&amp;source=constructor"
                        width="100%" height="425" frameborder="0" class="cardFit">
                    </iframe>
                </q-card-section>
            </q-card>
        </div>
    </template>
</template>

<script>
import mail from '../assets/icons/mail.png';
import phone from '../assets/icons/phone.png';
import telegram from '../assets/icons/telegram.png';
import viber from '../assets/icons/viber.png';
import whatsapp from '../assets/icons/whatsapp.png';

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