<template>
    <Whiteboard title="Calendário Escolar" :isSidebarMinimized="isSidebarMinimized">
        <div class="flex flex-col w-full mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">

            <div class="flex w-full justify-between gap-4 pb-4 border-b border-gray-300">
                <div class="text-black font-semibold w-1/3 text-left text-sm sm:text-xl">Nome</div>
                <div class="text-black font-semibold w-1/3 text-center text-sm sm:text-xl">Data Início</div>
                <div class="text-black font-semibold w-1/3 text-end text-sm sm:text-xl">Data Final</div>
            </div>

            <div v-for="(event, index) in events" :key="index" class="flex w-full justify-between gap-4 py-4 border-b border-gray-200">
                <div class="text-sm sm:text-lg text-gray-700 w-1/3 font-semibold text-left">{{ event.name }}</div>
                <div class="text-sm sm:text-lg text-gray-700 w-1/3 text-center">{{ formatDate(event.start_date) }}</div>
                <div class="text-sm sm:text-lg text-gray-700 w-1/3 text-end">{{ formatDate(event.end_date) }}</div>
            </div>

        </div>
    </Whiteboard>
</template>


<script>
import { inject } from 'vue';
import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
import data from '@/views/AdminPanel/Calendar/data.json'; 

export default {
    name: "EduPlanner",
    components: { Whiteboard },
    data() {
        return {
            events: data 
        };
    },

    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            return new Date(date).toLocaleDateString('pt-BR', options); 
        }
    },

    setup() {
        const isSidebarMinimized = inject('isSidebarMinimized');
        return { isSidebarMinimized };
    }
};
</script>
