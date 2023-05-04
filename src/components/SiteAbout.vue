<template>
    <!-- Desktop and tablets -->
    <template v-if="$windowWidth >= 880">
        <div class="fit row wrap justify-center items-center content-center"
            :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="aboutme">
            <div class="col-12 col-md-auto">
                <q-card class="bg-secondary" dark flat>
                    <q-item>
                        <q-card-section horizontal>
                            <q-img basic :src="masterPhoto" class="IMAGE__highlight" loading="lazy" alt="Master's photo"/>
                            <q-card-section>
                                <q-card-section>
                                    <div class="text-h6">{{ $t("about.title") }}</div>
                                </q-card-section>

                                <q-separator dark inset />

                                <q-card-section>
                                    {{ $t("about.aboutme") }}
                                </q-card-section>
                            </q-card-section>
                        </q-card-section>
                    </q-item>
                </q-card>
            </div>
        </div>
    </template>

    <!-- Mobile -->
    <template v-else>
        <div class="fit" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="aboutme">
            <q-card class="bg-secondary" dark flat>
                <q-item class="BG__cardTop">
                    <q-item-section></q-item-section>
                    <q-card-actions>
                        <q-btn color="grey-9" icon="expand_more" :href="$menuLinkTwo" />
                    </q-card-actions>
                </q-item>
                <q-separator dark />
                <q-card-section vertical>
                    <q-img basic :src="masterPhoto" loading="lazy" />
                    <div class="text-h6" style="margin-top: 0.5em;">{{ $t("about.name") }}</div>
                    <div class="text-subtitle2" style="margin-bottom: 0.5em;">{{ $t("about.title") }}</div>
                    <q-separator dark />
                    <p style="margin-top: 0.5em;">{{ $t('about.aboutme') }}</p>
                </q-card-section>
            </q-card>
        </div>
    </template>
</template>

<script>
import masterPhoto from '../assets/master_photo.png'
export default {
    data() {
        return {
            masterPhoto,
            chemistry: 'Hey',
            tools: 'Hoy'
        }
    }
}
</script>
