<template>
    <!-- Desktop and tablets -->
    <template v-if="$windowWidth >= 880">
        <div class="full-width row wrap justify-center items-center content-center"
            :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="gallery">
            <div class="col-12 col-md-12">
                <q-card class="bg-secondary" dark flat>

                    <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable
                        animated control-color="warning" navigation arrows class="bg-secondary shadow-1 rounded-borders"
                        :height="($windowHeight * 0.85) + 'px'">

                        <q-carousel-slide v-for="pair in imgPairs" :name="pair[0]" :key="pair"
                            class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="pair[1]" loading="lazy">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.before') }}</div>
                                </div>
                            </q-img>

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="pair[2]" loading="lazy">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>
                    </q-carousel>

                </q-card>
            </div>
        </div>
    </template>

    <!-- Mobile -->
    <template v-else>
        <div class="full-width row wrap justify-center items-center content-center"
            :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="gallery">
            <div class="col-12 col-md-12">
                <q-card class="bg-secondary" dark flat>

                    <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable
                        animated control-color="warning" navigation arrows
                        class="bg-secondary shadow-1 rounded-borders" :height="$windowHeight + 'px'">

                        <template v-for="pair in imgPairs" :key="pair">
                            <q-carousel-slide :name="pair[0]" class="row full-width justify-around no-wrap">

                                <q-img class="rounded-borders full-height IMAGE__highlight" :src="pair[1]" loading="lazy">
                                    <div class="absolute-top-left custom-caption">
                                        <div class="text-h5 text-left GAL__caption">{{ $t('gallery.before') }}</div>
                                    </div>
                                </q-img>

                            </q-carousel-slide>

                            <q-carousel-slide :name="pair[0]+1" class="row full-width justify-around no-wrap">

                                <q-img class="rounded-borders full-height IMAGE__highlight" :src="pair[2]" loading="lazy">
                                    <div class="absolute-top-left custom-caption">
                                        <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                                    </div>
                                </q-img>

                            </q-carousel-slide>
                        </template>

                    </q-carousel>

                </q-card>
            </div>
        </div>
    </template>
</template>

<script>
import { ref } from 'vue'
import restOneA from '../assets/slides/restOneBefore.webp';
import restOneB from '../assets/slides/restOneAfter.webp';
import restTwoA from '../assets/slides/restTwoBefore.webp';
import restTwoB from '../assets/slides/restTwoAfter.webp';

import scrpOneA from '../assets/slides/scrpOneBefore.webp';
import scrpOneB from '../assets/slides/scrpOneAfter.webp';
import scrpTwoA from '../assets/slides/scrpTwoBefore.webp';
import scrpTwoB from '../assets/slides/scrpTwoAfter.webp';

export default {
    setup() {
        return {
            slide: ref(1),
            imgPairs: {
                restOne: [1, restOneA, restOneB],
                restTwo: [3, restTwoA, restTwoB],
                scrpOne: [5, scrpOneA, scrpOneB],
                scrpTwo: [7, scrpTwoA, scrpTwoB]
            }
        }
    }
}
</script>