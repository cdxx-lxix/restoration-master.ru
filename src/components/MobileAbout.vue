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
                    <div class="text-h6">{{ $t("about.name") }}</div>
                    <p class="text-subtitle2">{{ $t("about.title") }}</p>
                    <q-separator dark style="margin-bottom: 0.7em;" />
                    <p class="text-body2">{{ $t("about.aboutme") }}</p>
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
