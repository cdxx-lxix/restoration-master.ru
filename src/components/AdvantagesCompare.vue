<template>
    <!-- Desktop and tablets -->
    <template v-if="$windowWidth >= 680">
        <q-card-section horizontal class="cardFit">
            <q-card-section>
                <q-item>
                    <q-item-label class="text-h6 title-aligned">{{ $t("compare.card1") }}</q-item-label>
                </q-item>
                <q-separator dark inset />
                <video controls autoplay muted style="max-width: 100%;">
                    <source :src="beforemp4" type="video/mp4">
                    <source :src="beforewm" type="video/webm">
                    {{ $t('compare.novideo') }}
                </video>
            </q-card-section>

            <q-card-section>
                <q-item>
                    <q-item-label class="text-h6 title-aligned">{{ $t("compare.card2") }}</q-item-label>
                </q-item>
                <q-separator dark inset />
                <video controls autoplay muted style="max-width: 100%;">
                    <source :src="inprogmp" type="video/mp4">
                    <source :src="inprogwm" type="video/webm">
                    {{ $t('compare.novideo') }}
                </video>
            </q-card-section>

            <q-card-section>
                <q-item>
                    <q-item-label class="text-h6 title-aligned">{{ $t("compare.card3") }}</q-item-label>
                </q-item>
                <q-separator dark inset />
                <video controls autoplay muted style="max-width: 100%;">
                    <source :src="aftermp" type="video/mp4">
                    <source :src="afterwm" type="video/webm">
                    {{ $t('compare.novideo') }}
                </video>
            </q-card-section>
        </q-card-section>
    </template>

    <!-- Mobile -->
    <template v-else>
        <q-card-section vertical class="cardFit">
            <q-card-section>
                <q-item>
                    <q-item-label class="text-h6 title-aligned">{{ $t("compare.card1") }}</q-item-label>
                </q-item>
                <div class="video-center">
                    <video controls muted class="video-width">
                        <source :src="beforemp4" type="video/mp4">
                        <source :src="beforewm" type="video/webm">
                        {{ $t('compare.novideo') }}
                    </video>
                </div>

            </q-card-section>

            <q-card-section>
                <q-item>
                    <q-item-label class="text-h6 title-aligned">{{ $t("compare.card2") }}</q-item-label>
                </q-item>
                <div class="video-center">
                    <video controls muted class="video-width">
                        <source :src="inprogmp" type="video/mp4">
                        <source :src="inprogwm" type="video/webm">
                        {{ $t('compare.novideo') }}
                    </video>
                </div>
            </q-card-section>

            <q-card-section>
                <q-item>
                    <q-item-label class="text-h6 title-aligned">{{ $t("compare.card3") }}</q-item-label>
                </q-item>
                <div class="video-center">
                    <video controls muted class="video-width">
                        <source :src="aftermp" type="video/mp4">
                        <source :src="afterwm" type="video/webm">
                        {{ $t('compare.novideo') }}
                    </video>
                </div>
            </q-card-section>
        </q-card-section>
    </template>
</template>

<script>

import afterwm from '../assets/videos/AFTER.webm';
import aftermp from '../assets/videos/AFTER.mp4';
import beforewm from '../assets/videos/BEFORE.webm';
import beforemp4 from '../assets/videos/BEFORE.mp4';
import inprogwm from '../assets/videos/INPROGRESS.webm';
import inprogmp from '../assets/videos/INPROGRESS.mp4';

export default {
    setup() {
        return {
            afterwm,
            aftermp,
            beforemp4,
            beforewm,
            inprogmp,
            inprogwm,
            videoAR: '1'
        }
    }
}
</script>

<style>
.title-aligned {
    margin: auto;
}

.btn-image {
    pointer-events: none;
}

.video-center {
    width: 100%;
    text-align: center;
}

.video-width {
    max-width: 100%;
}
</style>