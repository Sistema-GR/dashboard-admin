<template>
    <Whiteboard title="Grupos">

        <div class="flex flex-col w-full lg:flex-row">

            <div class="flex flex-col w-full items-center justify-center">
                 <p class="text-xl font-semibold">Resultados</p>
                 <PrimaryTable :route="'unitMax'" />
            </div>

                <div class="border-2 mx-4"></div>

            <div class="flex flex-col w-full items-center justify-center">
                    <p class="text-xl font-semibold">Resultados</p>
                 <PrimaryTable :route="'redeMax'" />
            </div>

        </div>

        <div class="flex flex-col w-full items-center justify-center mt-8 pb-5">
            <p class="text-xl font-semibold mt-5">Resultados</p>
            <PrimaryTable :route="'finalResults'" />
        </div>

    </Whiteboard>
</template>

<script>
import TextInput from '@/components/Inputs/TextInput.vue';
import PrimaryTable from '@/components/Table/PrimaryTable.vue';
import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
import Search from '@/components/Search/Search.vue';

export default {
    name: "Resultados IDEM",
    components: {Whiteboard, PrimaryTable, TextInput, Search}
}
</script>*/