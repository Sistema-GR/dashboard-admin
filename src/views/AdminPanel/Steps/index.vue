<template>
    <Whiteboard title="Etapas Ues" :isSidebarMinimized="isSidebarMinimized">
        <div class="flex w-full items-start justify-start px-4 mt-4">
            <Search />
        </div>   

        <div class="w-full pb-5">
            <PrimaryTable :route="'Steps'" />
        </div>
    </Whiteboard>
</template>

<script>
import TextInput from '@/components/Inputs/TextInput.vue';
import PrimaryTable from '@/components/Table/PrimaryTable.vue';
import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
import Search from '@/components/Search/Search.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import { inject } from 'vue'

export default {
    name: "Resultados IDEM",
    components: {Whiteboard, PrimaryTable, TextInput, Search, Pagination},

    setup() {
    const isSidebarMinimized = inject('isSidebarMinimized')

    return {
      isSidebarMinimized
    }
  }
}
</script>