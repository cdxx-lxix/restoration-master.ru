<template>
    <div class="fit row wrap justify-center items-center content-center" style="min-width: 80%; max-width: 80%; margin: auto; padding: 1em;">
        <div class="col-12 col-md-auto">
            <q-card class="bg-grey-9" dark flat bordered>
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
    </div>
</template>