<template>
    <div class="fit row wrap justify-center items-center content-center"
        :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="aboutme">
        <div class="col-12 col-md-auto">
            <q-card class="bg-grey-9" dark flat bordered>
                <q-item>
                    <q-item-section>
                        <q-item-label>{{ $t("about.header") }}</q-item-label>
                        <q-item-label caption class="text-white">
                            {{ $t("about.subtitle") }}
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <q-card-section vertical>
                    <q-img :src="masterPhoto" />
                    <q-card-section>
                        <q-card-section>
                            <div class="text-h6">{{ $t("about.name") }}</div>
                            <div class="text-subtitle2">{{ $t("about.title") }}</div>
                        </q-card-section>

                        <q-separator dark inset />

                        <q-card-section>
                            {{ $t("about.aboutme") }}
                        </q-card-section>
                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
import masterPhoto from '../assets/master_photo.jpg'
export default {
    data() {
        return {
            masterPhoto
        }
    }
}
</script>
