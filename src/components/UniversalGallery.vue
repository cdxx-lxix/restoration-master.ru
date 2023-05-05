<template>
    <div class="full-width row wrap justify-center items-center content-center"
        :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="gallery">
        <template v-if="$windowWidth >= 880"> <!-- Desktop & Tablets -->
            <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                control-color="warning" navigation arrows class="bg-secondary shadow-1 full-width"
                :height="($windowHeight * 0.85) + 'px'">
                <q-carousel-slide v-for="pair in imgPairs" :name="pair[0]" :key="pair"
                    class="row full-width justify-around no-wrap" style="padding: 0px !important">
                    <q-img class="rounded-borders full-height IMAGE__highlight" :src="pair[1]" loading="lazy" :alt="pair[1]">
                        <div class="absolute-top-left custom-caption">
                            <div class="text-h5 GAL__caption">{{ $t('gallery.before') }}</div>
                        </div>
                    </q-img>
                    <q-img class="rounded-borders full-height IMAGE__highlight" :src="pair[2]" loading="lazy" :alt="pair[2]">
                        <div class="absolute-top-left custom-caption">
                            <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                        </div>
                    </q-img>
                </q-carousel-slide>
            </q-carousel>
        </template>

        <template v-else> <!-- Mobiles -->
            <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
                control-color="warning" navigation arrows class="bg-secondary shadow-1 full-width"
                :height="$windowHeight + 'px'">
                <template v-for="pair in imgPairs" :key="pair">
                    <q-carousel-slide :name="pair[0]" class="row full-width justify-around no-wrap" style="padding: 0px !important">
                        <q-img class="rounded-borders full-height IMAGE__highlight" :src="pair[1]" loading="lazy" :alt="pair[1]">
                            <div class="absolute-top-left custom-caption">
                                <div class="text-h5 text-left GAL__caption">{{ $t('gallery.before') }}</div>
                            </div>
                        </q-img>
                    </q-carousel-slide>
                    <q-carousel-slide :name="pair[0] + 1" class="row full-width justify-around no-wrap">
                        <q-img class="rounded-borders full-height IMAGE__highlight" :src="pair[2]" loading="lazy" :alt="pair[2]">
                            <div class="absolute-top-left custom-caption">
                                <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                            </div>
                        </q-img>
                    </q-carousel-slide>
                </template>
            </q-carousel>
        </template>
    </div>
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