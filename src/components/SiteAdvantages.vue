<template>
    <div class="row full-width wrap justify-center items-center" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'">
        <q-card class="bg-secondary" dark flat>
            <q-card-section class="row" :class="$windowWidth >= 680 ? 'cardFit' : ''">
                <q-card-section :class="$windowWidth >= 680 ? 'col-6' : 'col-12 ADVANT__framedCard'">
                    <q-item role="none">
                        <q-item-label class="text-h6 ADVANT__titleAligned">{{ $t("advantages.card1_1") }}</q-item-label>
                        <q-space />
                        <q-card-actions><q-btn unelevated flat icon="format_paint" class="noclick" /></q-card-actions>
                    </q-item>
                    <q-separator dark inset />
                    <q-card-section>{{ $t("advantages.card1_2") }}</q-card-section>
                </q-card-section>

                <q-card-section :class="$windowWidth >= 680 ? 'col-6' : 'col-12 ADVANT__framedCard'">
                    <q-item role="none">
                        <q-item-label class="text-h6 ADVANT__titleAligned">{{ $t("advantages.card2_1") }}</q-item-label>
                        <q-space />
                        <q-card-actions><q-btn unelevated flat icon="handyman" class="noclick" /></q-card-actions>
                    </q-item>
                    <q-separator dark inset />
                    <q-card-section>{{ $t("advantages.card2_2") }}</q-card-section>
                </q-card-section>
                <q-card-section class="col-12" :class="$windowWidth >= 680 ? '' : 'ADVANT__framedCard'">
                    <q-item role="none">
                        <q-item-label class="text-h6 ADVANT__titleAligned">{{ $t("advantages.scrTitle") }}</q-item-label>
                        <q-space />
                        <q-card-actions><q-btn unelevated flat icon="handyman" class="noclick" /></q-card-actions>
                    </q-item>
                    <q-separator dark inset />
                    <q-card-section>{{ $t("advantages.scrInfo") }}</q-card-section>
                </q-card-section>
            </q-card-section>
        </q-card>
    </div>
</template>