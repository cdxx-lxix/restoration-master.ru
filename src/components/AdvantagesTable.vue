<template>
    <!-- Desktop and tablets -->
    <template v-if="$windowWidth >= 680">
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
    </template>

    <!-- Mobile -->
    <template v-else>
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
    </template>
</template>

<style>

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