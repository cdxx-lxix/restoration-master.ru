<template>
    <!-- Desktop and tablets -->
    <template v-if="$windowWidth >= 880">
        <div class="fit" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="aboutme">
            <q-card class="bg-secondary" dark flat>
                
                <q-card-section horizontal>
                    <q-img basic :src="masterPhoto" loading="lazy" />
                    <!-- <q-card-section class="q-pt-none">
                        <div class="text-overline text-light-blue-5">RM|</div>
                        <div class="text-h5 q-mt-sm q-mb-xs">{{ $t("about.title") }}</div>
                        <q-separator dark />
                        <div class="text-subtitle2">{{ $t('about.aboutme') }}</div>
                    </q-card-section> -->
                    <q-card-section class="q-pt-none">
                        <q-list separator padding>
                            <q-item>
                                <q-item-section>
                                    <q-item-label class="text-h4 q-mt-sm q-mb-xs">{{ $t("about.title") }}</q-item-label>
                                    <q-item-label caption class="text-body1 text-weight-medium text-white">{{ $t('about.aboutme') }}</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item class="justify-center items-center content-center">
                                <q-avatar size="100px">
                                    <img :src="ciranova">
                                </q-avatar>
                                <q-avatar size="100px">
                                    <img :src="bona">
                                </q-avatar>
                                <q-avatar size="100px">
                                    <img :src="konig">
                                </q-avatar>
                                <q-avatar size="100px">
                                    <img :src="berger">
                                </q-avatar>
                                <q-avatar size="100px">
                                    <img :src="lagler">
                                </q-avatar>
                            </q-item>
                            <q-item>
                                <q-item-section>
                                    <q-item-label class="text-h6 q-mt-sm q-mb-xs">Условия работы</q-item-label>
                                <q-item-label caption class="text-body1 text-weight-medium text-white">Работаем по Москве и Московской области. Выезд за эти пределы обсуждается индивидуально.</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                </q-card-section>

            </q-card>
        </div>
    </template>

    <!-- Mobile -->
    <template v-else>
        <div class="fit" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="aboutme">
            <q-card class="bg-secondary" dark flat>
                <q-img basic :src="masterPhoto" loading="lazy" />
                <q-card-section vertical>
                    <div class="text-h6">{{ $t("about.title") }}</div>
                    <q-separator dark />
                </q-card-section>
                <q-card-section class="q-pt-none">
                    {{ $t('about.aboutme') }}
                </q-card-section>
            </q-card>
        </div>
    </template>
</template>

<script>
import masterPhoto from '../assets/master_photo.webp'
import ciranova from '../assets/brands/ciranova.webp'
import bona from '../assets/brands/bona.webp'
import konig from '../assets/brands/konig.webp'
import berger from '../assets/brands/berger.webp'
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
