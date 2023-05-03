<template>
    <div class="row full-width wrap justify-center items-center" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'">
        <q-card class="bg-secondary" dark flat style="width: 100%">
            <q-item class="BG__cardTop">
                <q-item-section></q-item-section>
                <q-card-actions>
                    <q-btn color="grey-9" 
                        :icon="settings.icon"
                        :label="$t(settings.label)"
                        @click="toggleComponent" />
                </q-card-actions>
            </q-item>
            <q-separator dark />
            <advantages-table v-if="this.currentComponent === 'AdvantagesTable'"></advantages-table>
            <advantages-compare v-else-if="this.currentComponent === 'AdvantagesCompare'"></advantages-compare>
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
            // Their are populated before mount
            currentComponent: '',
            settings: {
                icon: '',
                label: ''
            }
        }
    },
    methods: {
        toggleComponent() {
            // Switch components
            this.currentComponent = this.currentComponent === 'AdvantagesTable' ? 'AdvantagesCompare' : 'AdvantagesTable';
            this.settingsSwitcher()
        },
        settingsSwitcher() {
            // Change data to match the current component
            if (this.currentComponent === 'AdvantagesTable') {
                this.settings = {
                    icon: 'compare',
                    label: 'advantages.compare'
                } 
            } else {
                    this.settings = {
                    icon: 'description',
                    label: 'advantages.advant'
                }
            }
        }
    },
    beforeMount() {
        // Assign value to currentComponent before mount to populate the template
        this.toggleComponent();
    }
}

</script>