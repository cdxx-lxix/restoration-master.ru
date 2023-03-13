<template>
    <div class="row full-width wrap justify-center items-center" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'">
        <q-card class="bg-grey-9" dark flat bordered>
            <q-item>
                <q-item-section>
                    <q-item-label>{{ $t('advantages.header') }}</q-item-label>
                    <q-item-label caption class="text-white">
                        {{ $t('advantages.subtitle') }}
                    </q-item-label>
                </q-item-section>
            </q-item>
            <q-card-section horizontal>
                <q-card-section class="col-4">
                    <q-card-section>
                        <div class="text-h6">{{ $t("advantages.card1_1") }}</div>
                    </q-card-section>

                    <q-separator dark inset />

                    <q-card-section>
                        {{ $t("advantages.card1_2") }}
                    </q-card-section>
                </q-card-section>

                <q-card-section class="col-4">
                    <q-card-section>
                        <div class="text-h6">{{ $t("advantages.card2_1") }}</div>
                    </q-card-section>

                    <q-separator dark inset />

                    <q-card-section>
                        {{ $t("advantages.card2_2") }}
                    </q-card-section>
                </q-card-section>

                <q-card-section class="col-4">
                    <q-card-section>
                        <div class="text-h6">{{ $t("advantages.card3_1") }}</div>
                    </q-card-section>

                    <q-separator dark inset />

                    <q-card-section>
                        {{ $t("advantages.card3_2") }}
                    </q-card-section>
                </q-card-section>
            </q-card-section>
        </q-card>
    </div>
</template>