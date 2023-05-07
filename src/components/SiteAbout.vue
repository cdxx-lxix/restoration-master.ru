<template>
    <div class="fit" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="aboutme">
        <q-card class="bg-secondary" dark flat>

            <template v-if="$windowWidth >= 1080">
                <q-card-section horizontal>
                    <q-img basic :src="masterPhoto" class="col-4" :alt="masterPhoto" loading="immediate"/>
                    <q-card-section class="q-pt-none">
                        <q-list separator padding >
                            <q-item >
                                <q-item-section>
                                    <q-item-label class="text-h4" role="none">{{ $t("about.title") }}</q-item-label>
                                    <q-item-label caption class="text-body1 text-weight-medium text-white" role="none">{{
                                        $t('about.aboutme') }}</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item class="about__list" role="none">
                                <div class="about__item" role="none">
                                    <q-avatar size="100px">
                                        <img :src="ciranova" loading="lazy" alt="ciranova" width="100" height="100">
                                    </q-avatar>
                                    <q-avatar size="100px">
                                        <img :src="bona" loading="lazy" alt="bona" width="100" height="100">
                                    </q-avatar>
                                    <q-avatar size="100px">
                                        <img :src="konig" loading="lazy" alt="konig" width="100" height="100">
                                    </q-avatar>
                                </div>
                                <div class="about__item">
                                    <img :src="berger" width="200" height="50" loading="lazy" alt="berger">
                                </div>
                                <div class="about__item">
                                    <q-avatar size="100px">
                                        <img :src="lagler" loading="lazy" alt="lagler" width="100" height="100">
                                    </q-avatar>
                                </div>
                            </q-item>
                            <q-item role="none">
                                <q-item-section>
                                    <q-item-label class="text-h6 ">{{ $t('about.works_title')
                                    }}</q-item-label>
                                    <q-item-label caption class="text-body1 text-weight-medium text-white">{{
                                        $t('about.works') }}</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item role="none">
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
                <q-img basic :src="masterPhoto" :alt="masterPhoto" loading="immediate"/>
                <q-card-section class="q-pt-none ">
                    <q-list separator padding>
                        <q-item>
                            <q-item-section>
                                <q-item-label class="text-h4 ">{{ $t("about.title") }}</q-item-label>
                                <q-item-label caption class="text-body1 text-weight-medium text-white">{{
                                    $t('about.aboutme') }}</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item class="about__list">
                            <div class="about__item">
                                <q-avatar size="100px">
                                    <img :src="ciranova" loading="lazy" alt="ciranova" width="100" height="100">
                                </q-avatar>
                                <q-avatar size="100px">
                                    <img :src="bona" loading="lazy" alt="bona" width="100" height="100">
                                </q-avatar>
                                <q-avatar size="100px">
                                    <img :src="konig" loading="lazy" alt="konig" width="100" height="100">
                                </q-avatar>
                            </div>
                            <div class="about__item">
                                <img :src="berger" width="200" height="50" loading="lazy" alt="berger">
                            </div>
                            <div class="about__item">
                                <q-avatar size="100px">
                                    <img :src="lagler" loading="lazy" alt="lagler" width="100" height="100">
                                </q-avatar>
                            </div>
                        </q-item>
                        <q-item>
                            <q-item-section>
                                <q-item-label class="text-h6 ">{{ $t('about.works_title')
                                }}</q-item-label>
                                <q-item-label caption class="text-body1 text-weight-medium text-white">{{
                                    $t('about.works') }}</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item>
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