<template>
    <!-- Desktop and tablets -->
    <template v-if="$windowWidth >= 680">
        <div class="row full-width wrap justify-center items-center"
            :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'">
            <q-card class="bg-secondary" dark flat>
                <q-item class="BG__cardTop">
                    <q-item-section>
                        <q-item-label>{{ $t('advantages.header') }}</q-item-label>
                        <q-item-label caption class="text-white">
                            {{ $t('advantages.subtitle') }}
                        </q-item-label>
                    </q-item-section>
                    <q-card-actions>
                        <q-btn color="grey-9" icon="compare" :label="$t('advantages.button')" @click="compare = true" />
                        <q-dialog v-model="compare">
                            <q-card class="col-10 col-md-auto" :ratio="16 / 9">
                                <image-compare :ratio="16 / 9" :before="slide1" :after="slide2"
                                    :labels="{ after: this.$t('gallery.after'), before: this.$t('gallery.before') }" />
                            </q-card>
                        </q-dialog>
                    </q-card-actions>
                </q-item>
                <q-separator dark />
                    <q-card-section horizontal class="cardFit">
                        <q-card-section class="col-4">
                            <q-item>
                                <q-item-label class="text-h6 title-aligned">{{ $t("advantages.card1_1") }}</q-item-label>
                                <q-space />
                                <q-card-actions><q-btn unelevated flat icon="home" class="btn-image" /></q-card-actions>
                            </q-item>
                            <q-separator dark inset />
                            <q-card-section>
                                {{ $t("advantages.card1_2") }}
                            </q-card-section>
                        </q-card-section>

                        <q-separator vertical dark inset />

                        <q-card-section class="col-4">
                            <q-item>
                                <q-item-label class="text-h6 title-aligned">{{ $t("advantages.card2_1") }}</q-item-label>
                                <q-space />
                                <q-card-actions><q-btn unelevated flat icon="thumb_up" class="btn-image" /></q-card-actions>
                            </q-item>
                            <q-separator dark inset />
                            <q-card-section>
                                {{ $t("advantages.card2_2") }}
                            </q-card-section>
                        </q-card-section>

                        <q-separator vertical dark inset />

                        <q-card-section class="col-4">
                            <q-item>
                                <q-item-label class="text-h6 title-aligned">{{ $t("advantages.card3_1") }}</q-item-label>
                                <q-space />
                                <q-card-actions><q-btn unelevated flat icon="schedule" class="btn-image" /></q-card-actions>
                            </q-item>
                            <q-separator dark inset />
                            <q-card-section>
                                {{ $t("advantages.card3_2") }}
                            </q-card-section>
                        </q-card-section>
                    </q-card-section>
            </q-card>
        </div>
    </template>
    <!-- Mobile -->
    <template v-else>
        <div class="row full-width wrap justify-center items-center"
            :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'">
            <q-card class="bg-secondary" dark flat>
                <q-item class="BG__cardTop">
                    <q-item-section>
                        <q-item-label>{{ $t('advantages.header') }}</q-item-label>
                        <q-item-label caption class="text-white">
                            {{ $t('advantages.subtitle') }}
                        </q-item-label>
                    </q-item-section>
                    <q-card-actions>
                        <q-btn color="grey-9" icon="compare" :label="$t('advantages.button')" @click="compare = true" />
                        <q-dialog v-model="compare">
                            <q-card class="col-10 col-md-auto" :ratio="16 / 9">
                                <image-compare :ratio="16 / 9" :before="slide1" :after="slide2"
                                    :labels="{ after: this.$t('gallery.after'), before: this.$t('gallery.before') }" />
                            </q-card>
                        </q-dialog>
                    </q-card-actions>
                </q-item>
                <q-separator dark />
                <q-card-section vertical>
                    <q-card-section class="col-4 framed-card">
                        <q-item>
                            <q-item-label class="text-h6 title-aligned">{{ $t("advantages.card1_1") }}</q-item-label>
                            <q-space />
                            <q-card-actions><q-btn unelevated flat icon="home" class="btn-image" /></q-card-actions>
                        </q-item>
                        <q-separator dark inset />
                        <q-card-section>
                            {{ $t("advantages.card1_2") }}
                        </q-card-section>
                    </q-card-section>

                    <q-card-section class="col-4 framed-card">
                        <q-item>
                            <q-item-label class="text-h6 title-aligned">{{ $t("advantages.card2_1") }}</q-item-label>
                            <q-space />
                            <q-card-actions><q-btn unelevated flat icon="thumb_up" class="btn-image" /></q-card-actions>
                        </q-item>
                        <q-separator dark inset />
                        <q-card-section>
                            {{ $t("advantages.card2_2") }}
                        </q-card-section>
                    </q-card-section>

                    <q-card-section class="col-4 framed-card">
                        <q-item>
                            <q-item-label class="text-h6 title-aligned">{{ $t("advantages.card3_1") }}</q-item-label>
                            <q-space />
                            <q-card-actions><q-btn unelevated flat icon="schedule" class="btn-image" /></q-card-actions>
                        </q-item>
                        <q-separator dark inset />
                        <q-card-section>
                            {{ $t("advantages.card3_2") }}
                        </q-card-section>
                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>
    </template>
</template>

<script>
import imageCompare from 'vue-image-compare2'
import slide1 from '../assets/slides/restore_slide_1.jpg'
import slide2 from '../assets/slides/restore_slide_2.jpg'
export default {
    data() {
        return {
            compare: false,
            slide1,
            slide2,
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

    .framed-card {
        border: rgba(255, 255, 255, 0.3) 1px solid;
        border-radius: 1em;
        margin-bottom: 0.5em;
    }

    .title-aligned {
        margin: auto;
    }

    .btn-image {
        pointer-events: none;
    }
</style>