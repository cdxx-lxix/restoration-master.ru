<template>
    <div class="fit wrap justify-center items-center content-center"
        :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="contacts">
        <q-card dark flat class="row bg-secondary">
            <div :class="columnsCalculator().map">
                <q-img :src="moscowMap" loading="lazy" alt="Moscow map" style="height: 100%;">
                    <div class="absolute-bottom text-subtitle2 text-center text-bold">
                        {{ $t('contacts.map') }}
                    </div>
                </q-img>
            </div>
            <div :class="columnsCalculator().contacts">
                <q-list class="fit" separator>
                    <q-item clickable v-for="option in contactOptions" :key="option" :href="option.link" :style="'height:' + 100 / Object.keys(contactOptions).length + '%'">
                        <q-item-section avatar>
                            <q-avatar size="50px">
                                <img :src="option.icon" :alt="option.icon">
                            </q-avatar>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>{{ $t(option.title) }}</q-item-label>
                            <q-item-label caption class="text-white">{{ $t(option.desc) }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </q-card>
    </div>
</template>

<script>
import phone from '../assets/icons/icons8-phone.svg';
import whatsapp from '../assets/icons/icons8-whatsapp.svg';
import youtube from '../assets/icons/icons8-youtube.svg';
import vk from '../assets/icons/icons8-vk-com.svg';
import moscowMap from '../assets/moscow.webp';

export default {
    data() {
        return {
            contactOptions: {
                wp: { icon: whatsapp, link: 'https://wa.me/79261725511', title: 'contacts.watitle', desc: 'contacts.wadesc' },
                ph: { icon: phone, link: 'tel:' + this.$phoneNumber, title: 'contacts.phtitle', desc: 'contacts.phdesc' },
                vk: { icon: vk, link: '', title: 'contacts.vktitle', desc: 'contacts.vkdesc' },
                yt: { icon: youtube, link: 'https://www.youtube.com/@restoration_master', title: 'contacts.yttitle', desc: 'contacts.ytdesc' }
            },
            moscowMap
        }
    },
    methods: {
        columnsCalculator() {
            if (this.$windowWidth >= 1100) {
                return { map: 'col-8', contacts: 'col-4' }
            } else if (this.$windowWidth >= 700 ) {
                return { map: 'col-7', contacts: 'col-5' }
            } else {
                return { map: 'col-12', contacts: 'col-12' }
            }
        }
    }
}
</script>