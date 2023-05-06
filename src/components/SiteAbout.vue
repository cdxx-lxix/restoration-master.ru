<template>
    <div class="fit" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="aboutme">
        <q-card class="bg-secondary" dark flat>

            <template v-if="$windowWidth >= 1260">
                <q-card-section horizontal>
                    <q-img basic :src="masterPhoto" loading="lazy" />
                    <q-card-section class="q-pt-none " :class="$windowWidth >= 1420 ? 'col-7' : 'col-8'">
                        <q-list separator padding class="fit">
                            <q-item style="height: 40%;">
                                <q-item-section>
                                    <q-item-label class="text-h4 ">{{ $t("about.title") }}</q-item-label>
                                    <q-item-label caption class="text-body1 text-weight-medium text-white">{{
                                        $t('about.aboutme') }}</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item class="justify-center items-center content-center" style="height: 15%;">
                                <q-avatar size="100px">
                                    <img :src="ciranova" loading="lazy">
                                </q-avatar>
                                <q-avatar size="100px">
                                    <img :src="bona" loading="lazy">
                                </q-avatar>
                                <q-avatar size="100px">
                                    <img :src="konig" loading="lazy">
                                </q-avatar>

                                <img :src="berger" width="200" height="50" loading="lazy">

                                <q-avatar size="100px">
                                    <img :src="lagler" loading="lazy">
                                </q-avatar>
                            </q-item>
                            <q-item style="height: 25%;">
                                <q-item-section>
                                    <q-item-label class="text-h6 ">{{ $t('about.works_title')
                                    }}</q-item-label>
                                    <q-item-label caption class="text-body1 text-weight-medium text-white">{{
                                        $t('about.works') }}</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item style="height: 20%;">
                                <q-item-section>
                                    <q-item-label class="text-h6 ">{{ $t('about.order_title')
                                    }}</q-item-label>
                                    <q-item-label caption class="text-body1 text-weight-medium text-white">{{
                                        $t('about.order') }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                </q-card-section>
            </template>

            <template v-else>
                <q-img basic :src="masterPhoto" loading="lazy" />
                <q-card-section class="q-pt-none ">
                    <q-list separator padding class="fit">
                        <q-item style="height: 40%;">
                            <q-item-section>
                                <q-item-label class="text-h4 ">{{ $t("about.title") }}</q-item-label>
                                <q-item-label caption class="text-body1 text-weight-medium text-white">{{
                                    $t('about.aboutme') }}</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item style="height: 15%; display: block; text-align: center;">
                            <div style="display: inline-block; vertical-align: middle;">
                                <q-avatar size="100px">
                                    <img :src="ciranova" loading="lazy">
                                </q-avatar>
                                <q-avatar size="100px">
                                    <img :src="bona" loading="lazy">
                                </q-avatar>
                                <q-avatar size="100px">
                                    <img :src="konig" loading="lazy">
                                </q-avatar>
                            </div>
                            <div style="display: inline-block; vertical-align: middle;">
                                <img :src="berger" width="200" height="50" loading="lazy">
                            </div>
                            <div style="display: inline-block; vertical-align: middle;">
                                <q-avatar size="100px">
                                    <img :src="lagler" loading="lazy">
                                </q-avatar>
                            </div>
                        </q-item>
                        <q-item style="height: 25%;">
                            <q-item-section>
                                <q-item-label class="text-h6 ">{{ $t('about.works_title')
                                }}</q-item-label>
                                <q-item-label caption class="text-body1 text-weight-medium text-white">{{
                                    $t('about.works') }}</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item style="height: 20%;">
                            <q-item-section>
                                <q-item-label class="text-h6 ">{{ $t('about.order_title')
                                }}</q-item-label>
                                <q-item-label caption class="text-body1 text-weight-medium text-white">{{
                                    $t('about.order') }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
            </template>
        </q-card>
    </div>
</template>


<script>
import masterPhoto from '../assets/master_photo.webp'
import ciranova from '../assets/brands/ciranova.webp'
import bona from '../assets/brands/bona.webp'
import konig from '../assets/brands/konig.webp'
import berger from '../assets/brands/berger-seidle.webp'
import lagler from '../assets/brands/lagler.webp'

export default {
    data() {
        return {
            masterPhoto,
            ciranova,
            bona,
            konig,
            berger,
            lagler
        }
    }
}
</script>

<style>
.item-height {
    height: 25%;
}
</style>