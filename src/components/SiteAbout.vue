<template>
    <!-- Desktop and tablets -->
    <template v-if="$windowWidth >= 880">
        <div class="fit" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="aboutme">
            <q-card class="bg-secondary" dark flat>
                
                <q-card-section horizontal>
                    <q-img basic :src="masterPhoto" loading="lazy" />
                    <q-card-section class="q-pt-none col-7">
                        <!-- <q-item>
                            <q-item-section>
                                <q-item-label class="text-body1 text-weight-medium text-white">{{ $t("about.title") }}</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section>
                                <div>Более 4 лет мы профессионально занимаемся Реставрацией паркета и элементов декора из дерева в Москве и Московской области.</div>
                                <div>Услуги и сроки реставрации обговариваются после просмотра объекта.</div>
                                <div>Выезд по Москве для консультации и предварительного просмотра объекта бесплатный. По Московской области 500 рублей.</div>
                                <div>Для выполнения циклёвочных работ вы оплачиваете материалы, после чего их привозят на объект. Минимальный заказ от 15 метров.</div>
                                <div>Во время работы используются только профессиональная химия:</div> 
                                <ul>
                                    <li>Ciranova</li>
                                    <li>Bona</li>
                                    <li>Konig</li>
                                    <li>Berger</li>
                                </ul>
                                <div>И немецкое оборудование Lagler:</div>
                                <ul>
                                    <li>Hummel</li>
                                    <li>Trio</li>
                                    <li>Flip</li>
                                </ul>
                            </q-item-section>
                        </q-item> -->
                        <q-list separator padding class="fit">
                            <q-item style="height: 25%;">
                                <q-item-section>
                                    <q-item-label class="text-h4 q-mt-sm q-mb-xs">{{ $t("about.title") }}</q-item-label>
                                    <q-item-label caption class="text-body1 text-weight-medium text-white">{{ $t('about.aboutme') }}</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item class="justify-center items-center content-center" style="height: 25%;">
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
                                    <q-item-label class="text-h6 q-mt-sm q-mb-xs">{{ $t('about.works_title') }}</q-item-label>
                                    <q-item-label caption class="text-body1 text-weight-medium text-white">{{ $t('about.works') }}</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item style="height: 25%;">
                                <q-item-section>
                                    <q-item-label class="text-h6 q-mt-sm q-mb-xs">{{ $t('about.order_title') }}</q-item-label>
                                    <q-item-label caption class="text-body1 text-weight-medium text-white">{{ $t('about.order') }}</q-item-label>
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