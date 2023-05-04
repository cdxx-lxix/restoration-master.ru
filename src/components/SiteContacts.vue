<template>
    <template v-if="$windowWidth >= 680">
        <div class="fit row wrap justify-center items-center content-center"
            :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="contacts">

            <q-card dark flat class="col-12 bg-secondary">
                <q-img :src="moscowMap">
                    <div class="absolute-bottom text-subtitle2 text-center text-bold">
                        {{ $t('contacts.map') }}
                    </div>
                </q-img>

                <q-list>
                    <q-item clickable v-for="option in contactOptions" :key="option">
                        <q-item-section avatar>
                            <q-avatar size="50px">
                                <img :src="option.icon">
                            </q-avatar>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>{{ $t(option.title) }}</q-item-label>
                            <q-item-label caption class="text-white">{{ $t(option.desc) }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card>

        </div>
    </template>

    <template v-else>
        <div class="fit row-inline wrap justify-center items-center content-center"
            :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="contacts">
            <q-card class="bg-secondary" dark flat>
                <q-item class="BG__cardTop">
                    <q-item-section></q-item-section>
                    <q-card-actions class="justify-end">
                        <q-btn v-for="option in contactOptions" :key="option" :href="option.link" round dense flat
                            :ripple="{ center: true }">
                            <q-avatar><img :src="option.icon"></q-avatar>
                        </q-btn>
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
                wp: { icon: whatsapp, link: 'https://wa.me/79261725511', title: 'contacts.watitle', desc: 'contacts.wadesc', btn: 'contacts.wabtn' },
                ph: { icon: phone, link: 'tel:' + this.$phoneNumber, title: 'contacts.phtitle', desc: 'contacts.phdesc', btn: 'contacts.phbtn' },
                vk: { icon: vk, link: '', title: 'contacts.vktitle', desc: 'contacts.vkdesc', btn: 'contacts.vkbtn' },
                yt: { icon: youtube, link: '', title: 'contacts.yttitle', desc: 'contacts.ytdesc', btn: 'contacts.ytbtn' }
            },
            moscowMap
        }
    }
}
</script>