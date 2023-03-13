<template>
    <div class="full-width row wrap justify-center items-center content-center"
        :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="gallery">
        <div class="col-12 col-md-12">
            <q-card>
                <q-item>
                    <q-item-section>
                        <q-item-label>{{ $t('gallery.header') }}</q-item-label>
                        <q-item-label caption class="text-white">
                            {{ $t('gallery.subtitle') }}
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <!-- <q-tabs v-model="tab" dense class="bg-grey-3 text-grey-7" active-color="primary" indicator-color="purple"
                    align="justify">
                    <q-tab name="restorations" :label="this.$t('menu.restorations')" />
                    <q-tab name="scrapings" :label="this.$t('menu.scrapings')" />
                    <q-tab name="compare" :label="this.$t('menu.compare')" />
                </q-tabs> -->
                <q-card-actions v-model="tab">
                    <q-btn name="restorations" flat>Action 1</q-btn>
                    <q-btn name="scrapings" flat>Action 2</q-btn>
                </q-card-actions>

                <q-tab-panels v-model="tab" animated class="bg-primary text-white">

                    <q-tab-panel name="restorations">
                        <q-carousel swipeable animated v-model="slide" v-model:fullscreen="fullscreen" arrows navigation
                            infinite :height="($windowHeight * 0.75) + 'px'">
                            <q-carousel-slide :name="1" :img-src="slide1" />
                            <q-carousel-slide :name="2" :img-src="slide2" />
                            <q-carousel-slide :name="3" :img-src="slide3" />
                            <q-carousel-slide :name="4" :img-src="slide4" />

                            <template v-slot:control>
                                <q-carousel-control position="bottom-right" :offset="[18, 18]">
                                    <q-btn push round dense color="white" text-color="primary"
                                        :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                                        @click="fullscreen = !fullscreen" />
                                </q-carousel-control>
                            </template>
                        </q-carousel>
                    </q-tab-panel>

                    <q-tab-panel name="scrapings">
                        <q-carousel swipeable animated v-model="slide" v-model:fullscreen="fullscreen" arrows navigation
                            infinite :style="this.scaler">
                            <q-carousel-slide :name="1" :img-src="slide1" />
                            <q-carousel-slide :name="2" :img-src="slide2" />
                            <q-carousel-slide :name="3" :img-src="slide3" />
                            <q-carousel-slide :name="4" :img-src="slide4" />

                            <template v-slot:control>
                                <q-carousel-control position="bottom-right" :offset="[18, 18]">
                                    <q-btn push round dense color="white" text-color="primary"
                                        :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                                        @click="fullscreen = !fullscreen" />
                                </q-carousel-control>
                            </template>
                        </q-carousel>
                    </q-tab-panel>

                    <q-tab-panel name="compare" :height="($windowHeight * 0.75) + 'px'">
                        <image-compare :before="slide2" :after="slide3"
                            :labels="{ after: this.$t('gallery.after'), before: this.$t('gallery.before') }" />
                    </q-tab-panel>

                </q-tab-panels>
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
import imageCompare from 'vue-image-compare2'

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
    },
    components: {
        imageCompare
    }
}
</script>

<style>
div.after-name {
    color: black;
}

div.before-name {
    color: black;
}
</style>