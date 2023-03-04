<template>
    <div class="fit row wrap justify-center items-center content-center" style="min-width: 80%; max-width: 80%; margin: auto; padding: 1em;">
        <div class="col-12 col-md-auto">
            <q-card class="bg-grey-9" dark flat bordered>
                <q-card-section horizontal>
                    <q-img class="col-5" :src="masterPhoto"/>
                    <q-card-section class="col-7">
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
        data () {
            return {
                masterPhoto
            }
        }
    }
</script>
