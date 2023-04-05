<template>
    <!-- Desktop and tablets -->
    <template v-if="$windowWidth >= 880">
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
                            <q-btn color="grey-9" icon="fullscreen" @click="fullscreen = !fullscreen">{{
                                $t('gallery.button') }}</q-btn>
                        </q-card-actions>
                    </q-item>

                    <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable
                        animated control-color="warning" navigation padding arrows
                        class="bg-secondary shadow-1 rounded-borders" :height="($windowHeight * 0.85) + 'px'"
                        v-model:fullscreen="fullscreen">

                        <q-carousel-slide :name="1" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="restOneA">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.before') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.restor') }}</div>
                                </div>
                            </q-img>

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="restOneB">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.restor') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <q-carousel-slide :name="2" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="restTwoA">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.before') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.restor') }}</div>
                                </div>
                            </q-img>

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="restTwoB">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.restor') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <q-carousel-slide :name="3" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="scrpOneA">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.before') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.scrp') }}</div>
                                </div>
                            </q-img>

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="scrpOneB">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.scrp') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <q-carousel-slide :name="4" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="scrpTwoA">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.before') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.scrp') }}</div>
                                </div>
                            </q-img>

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="scrpTwoB">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.scrp') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <!-- Fullscreen control template -->
                        <template v-slot:control v-if="fullscreen">
                            <q-carousel-control position="top-right" :offset="[70, 30]">
                                <q-btn push dense color="white" text-color="primary" icon="fullscreen_exit"
                                    @click="fullscreen = !fullscreen">{{ $t('gallery.minimize') }}</q-btn>
                            </q-carousel-control>
                        </template>

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
                    <q-item class="BG__cardTop">
                        <q-item-section>
                            <q-item-label>{{ $t('gallery.header') }}</q-item-label>
                            <q-item-label caption class="text-white">
                                {{ $t('gallery.subtitle') }}
                            </q-item-label>
                        </q-item-section>
                        <q-card-actions v-model="tab">
                            <q-btn color="grey-9" icon="fullscreen" @click="fullscreen = !fullscreen">{{
                                $t('gallery.button') }}</q-btn>
                        </q-card-actions>
                    </q-item>

                    <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable
                        animated control-color="warning" navigation padding arrows
                        class="bg-secondary shadow-1 rounded-borders" :height="($windowHeight * 0.85) + 'px'"
                        v-model:fullscreen="fullscreen">

                        <q-carousel-slide :name="1" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="restOneA">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.before') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.restor') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <q-carousel-slide :name="2" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="restOneB">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.restor') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <q-carousel-slide :name="3" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="restTwoA">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.before') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.restor') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <q-carousel-slide :name="4" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="restTwoB">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.restor') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <q-carousel-slide :name="5" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="scrpOneA">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.before') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.scrp') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <q-carousel-slide :name="6" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="scrpOneB">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.scrp') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <q-carousel-slide :name="7" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="scrpTwoA">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.before') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.scrp') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <q-carousel-slide :name="8" class="row full-width justify-around no-wrap">

                            <q-img class="rounded-borders full-height IMAGE__highlight" :src="scrpTwoB">
                                <div class="absolute-bottom custom-caption">
                                    <div class="text-h5 GAL__caption">{{ $t('gallery.after') }}</div>
                                    <div class="text-subtitle1 GAL__caption">{{ $t('gallery.scrp') }}</div>
                                </div>
                            </q-img>

                        </q-carousel-slide>

                        <!-- Fullscreen control template -->
                        <template v-slot:control v-if="fullscreen">
                            <q-carousel-control position="top-right" :offset="[70, 30]">
                                <q-btn push dense color="white" text-color="primary" icon="fullscreen_exit"
                                    @click="fullscreen = !fullscreen">{{ $t('gallery.minimize') }}</q-btn>
                            </q-carousel-control>
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
            tab: ref('restorations'),
            slide: ref(1),
            restOneA,
            restOneB,
            restTwoA,
            restTwoB,
            scrpOneA,
            scrpOneB,
            scrpTwoA,
            scrpTwoB,
            fullscreen: ref(false)
        }
    }
}
</script>