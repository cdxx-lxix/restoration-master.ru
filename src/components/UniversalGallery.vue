<template>
    <div class="full-width row wrap justify-center items-center content-center"
        :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="gallery">
        <div class="col-12 col-md-12">
            <q-card class="bg-secondary" dark flat>
                <q-item class="BG__cardTop">
                    <q-item-section>
                        <q-item-label>{{ $t('gallery.header') }}</q-item-label>
                        <q-item-label caption class="text-white">
                            {{ $t('gallery.subtitle') }}
                        </q-item-label>
                    </q-item-section>
                    <q-card-actions v-model="tab">
                        <q-btn color="grey-9" icon="fullscreen" @click="fullscreen = !fullscreen">{{ $t('gallery.button')}}</q-btn>
                    </q-card-actions>
                </q-item>
                <q-carousel swipeable animated v-model="slide" v-model:fullscreen="fullscreen" arrows navigation infinite
                    :ratio="16/9" :height="($windowHeight * 0.75) + 'px'" style="margin: 0.5em 0.9em 0.5em 0.9em;">
                    <q-carousel-slide :name="1" :img-src="slide1" />
                    <q-carousel-slide :name="2" :img-src="slide2" />
                    <q-carousel-slide :name="3" :img-src="slide3" />
                    <q-carousel-slide :name="4" :img-src="slide4" />

                    <template v-slot:control v-if="fullscreen">
                        <q-carousel-control position="bottom-right" :offset="[18, 18]">
                            <q-btn push round dense color="white" text-color="primary"
                                icon="fullscreen_exit" @click="fullscreen = !fullscreen" />
                        </q-carousel-control>
                    </template>
                </q-carousel>
            </q-card>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import slide1 from '../assets/slides/restore_slide_1.jpg'
import slide2 from '../assets/slides/restore_slide_2.jpg'
import slide3 from '../assets/slides/restore_slide_3.jpg'
import slide4 from '../assets/slides/restore_slide_4.jpg'

export default {
    setup() {
        return {
            tab: ref('restorations'),
            slide: ref(1),
            slide1,
            slide2,
            slide3,
            slide4,
            fullscreen: ref(false)
        }
    }
}
</script>
