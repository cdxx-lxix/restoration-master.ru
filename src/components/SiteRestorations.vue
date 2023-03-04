<template>
    <div class="row wrap justify-center items-center content-center"
        style="min-width: 80%; max-width: 80%; margin: auto; padding: 1em;">
        <div class="col-12 col-md-12">
            <q-carousel swipeable animated v-model="slide" v-model:fullscreen="fullscreen" arrows navigation infinite >
                <q-carousel-slide :name="1" :img-src="slide1" />
                <q-carousel-slide :name="2" :img-src="slide2" />
                <q-carousel-slide :name="3" :img-src="slide3" />
                <q-carousel-slide :name="4" :img-src="slide4" />

                <template v-slot:control>
                    <q-carousel-control
                    position="bottom-right"
                    :offset="[18, 18]"
                    >
                    <q-btn
                        push round dense color="white" text-color="primary"
                        :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                        @click="fullscreen = !fullscreen"
                    />
                    </q-carousel-control>
                </template>
            </q-carousel>
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