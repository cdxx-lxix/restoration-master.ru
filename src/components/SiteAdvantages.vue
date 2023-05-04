<template>
    <div class="row full-width wrap justify-center items-center" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'">
        <q-card class="bg-secondary" dark flat style="width: 100%">
            <advantages-table />
        </q-card>
    </div>
</template>

<script>

import AdvantagesTable from './AdvantagesTable.vue';
export default {
    components: {
        AdvantagesTable
    }
}

</script>