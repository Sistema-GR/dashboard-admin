<template>
    <Whiteboard title="Recurso" :isSidebarMinimized="isSidebarMinimized">

        <div class="flex flex-row items-center w-full justify-start border border-gray-200 rounded-lg shadow-md overflow-auto">
            <Block title="Novo" number="100" customClass="bg-blue-500 hover:bg-blue-600" />
            <Block title="Em Progresso" number="20" customClass="bg-orange-500 hover:bg-orange-600" />
            <Block title="Pendente" number="36" customClass="bg-yellow-500 hover:bg-yellow-600" />
            <Block title="Reaberto" number="7" customClass="bg-red-500 hover:bg-red-600" />
            <Block title="Finalizado" number="76" customClass="bg-green-500 hover:bg-green-600" />
            <Block title="Cancelado" number="20" customClass="bg-gray-500 hover:bg-gray-600" />
        </div>

        <div class="flex flex-col w-full mt-10 gap-10 lg:flex-row">

            <div class="flex-1 px-2 border rounded-lg shadow-lg">

                <div class="flex items-center justify-between border-b-2 m-3">
                    <p class="text-xl font-semibold my-2">Novos</p>
                    <FunnelIcon class="w-5 h-auto stroke-gray-400 cursor-pointer" />
                </div>

                <div class="m-3 space-y-3">
                    <infoCard situation="Novo" />
                    <infoCard situation="Novo" />
                    <infoCard situation="Novo" />
                </div>

            </div>
            
            <div class="flex-1 px-2 border rounded-lg shadow-lg">

                <div class="flex items-center justify-between border-b-2 m-3">
                     <p class="text-xl font-semibold my-2">Finalizado</p>
                     <FunnelIcon class="w-5 h-auto stroke-gray-400 cursor-pointer" />
                </div>

                <div class="m-3 space-y-3">
                    <infoCard situation="Finalizado"/>
                    <infoCard situation="Finalizado"/>
                    <infoCard situation="Finalizado"/>
                </div>

            </div>

        </div>

    </Whiteboard>
</template>

<script>
import { inject } from 'vue'
import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
import Block from '@/views/Admin/Resource/Block/index.vue'
import infoCard from '@/views/Admin/Resource/infoCard/index.vue'
import { FunnelIcon } from "@heroicons/vue/24/outline";
1
export default {
    name:"Recurso",
    components: {Whiteboard, Block, infoCard, FunnelIcon},

    setup() {
    const isSidebarMinimized = inject('isSidebarMinimized')

    return {
      isSidebarMinimized
    }
  }
}

</script>
