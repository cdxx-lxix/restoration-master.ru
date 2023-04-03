<template>
    <div class="row full-width wrap justify-center items-center" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'">
        <q-card class="bg-secondary" dark flat style="width: 100%">
            <q-item class="BG__cardTop">
                <q-item-section>
                    <q-item-label>{{ $t(settings.title) }}</q-item-label>
                    <q-item-label caption class="text-white">
                        {{ $t('advantages.subtitle') }}
                    </q-item-label>
                </q-item-section>
                <q-card-actions>
                    <q-btn color="grey-9" 
                        :icon="settings.icon"
                        :label="$t(settings.label)"
                        @click="toggleComponent" />
                </q-card-actions>
            </q-item>
            <q-separator dark />
            <component :is="currentComponent"></component>
        </q-card>
    </div>
</template>

<script>

import AdvantagesTable from './AdvantagesTable.vue';
import AdvantagesCompare from './AdvantagesCompare.vue';
export default {
    components: {
        AdvantagesTable,
        AdvantagesCompare
    },
    data() {
        return {
            currentComponent: AdvantagesTable,
            settings: {
                icon: 'compare',
                label: 'advantages.compare',
                title: 'advantages.header'
            }
        }
    },
    methods: {
        toggleComponent() {
            this.currentComponent = this.currentComponent === 'AdvantagesTable' ? 'AdvantagesCompare' : 'AdvantagesTable';
            this.settingsSwitcher()
        },
        settingsSwitcher() {
            if (this.currentComponent === 'AdvantagesTable') {
                this.settings = {
                    icon: 'compare',
                    label: 'advantages.compare',
                    title: 'advantages.header'
                } 
            } else {
                    this.settings = {
                    icon: 'description',
                    label: 'advantages.advant',
                    title: 'advantages.compare_title'
                }
            }
        }
    }
}

</script>