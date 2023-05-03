<template>
    <!-- Desktop and tablets -->
    <template v-if="$windowWidth >= 680">
        <q-card-section horizontal class="cardFit">
            <q-card-section class="col-6">
                <q-item>
                    <q-item-label class="text-h6 ADVANT__titleAligned">{{ $t("advantages.card1_1") }}</q-item-label>
                    <q-space />
                    <q-card-actions><q-btn unelevated flat icon="construction" class="ADVANT__btnImage" /></q-card-actions>
                </q-item>
                <q-separator dark inset />
                <q-card-section>
                    {{ $t("advantages.card1_2") }}
                </q-card-section>
            </q-card-section>

            <q-separator vertical dark inset />

            <q-card-section class="col-6">
                <q-item>
                    <q-item-label class="text-h6 ADVANT__titleAligned">{{ $t("advantages.card2_1") }}</q-item-label>
                    <q-space />
                    <q-card-actions><q-btn unelevated flat icon="view_timeline" class="ADVANT__btnImage" /></q-card-actions>
                </q-item>
                <q-separator dark inset />
                <q-card-section>
                    {{ $t("advantages.card2_2") }}
                </q-card-section>
            </q-card-section>

        </q-card-section>
    </template>

    <!-- Mobile -->
    <template v-else>
        <q-card-section vertical>
            <q-card-section class="col-6 ADVANT__framedCard">
                <q-item>
                    <q-item-label class="text-h6 ADVANT__titleAligned">{{ $t("advantages.card1_1") }}</q-item-label>
                    <q-space />
                    <q-card-actions><q-btn unelevated flat icon="home" class="ADVANT__btnImage" /></q-card-actions>
                </q-item>
                <q-separator dark inset />
                <q-card-section>
                    {{ $t("advantages.card1_2") }}
                </q-card-section>
            </q-card-section>

            <q-card-section class="col-6 ADVANT__framedCard">
                <q-item>
                    <q-item-label class="text-h6 ADVANT__titleAligned">{{ $t("advantages.card2_1") }}</q-item-label>
                    <q-space />
                    <q-card-actions><q-btn unelevated flat icon="thumb_up" class="ADVANT__btnImage" /></q-card-actions>
                </q-item>
                <q-separator dark inset />
                <q-card-section>
                    {{ $t("advantages.card2_2") }}
                </q-card-section>
            </q-card-section>

        </q-card-section>
    </template>
</template>