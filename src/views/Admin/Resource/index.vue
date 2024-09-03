<template>
    <Sidebar :route="'admin'"/>

        <Whiteboard title="Recurso" :isSidebarMinimized="isSidebarMinimized">
            
            <div class="flex flex-row items-center w-full justify-start border border-gray-200 rounded-lg shadow-md overflow-auto">
                <Block title="Novo" number="100" customClass="bg-blue-500 hover:bg-blue-600" @click="navigateTo('/resource/new')" />
                <Block title="Em Progresso" number="20" customClass="bg-orange-500 hover:bg-orange-600" @click="navigateTo('/resource/inprogress')" />
                <Block title="Pendente" number="36" customClass="bg-yellow-500 hover:bg-yellow-600" @click="navigateTo('/resource/awaiting')" />
                <Block title="Reaberto" number="7" customClass="bg-red-500 hover:bg-red-600" @click="navigateTo('/resource/reopened')" />
                <Block title="Finalizado" number="76" customClass="bg-green-500 hover:bg-green-600" @click="navigateTo('/resource/completed')" />
                <Block title="Cancelado" number="20" customClass="bg-gray-500 hover:bg-gray-600" @click="navigateTo('/resource/canceled')" />
            </div>
        
         </Whiteboard>

         <router-view></router-view>
</template>

<script>
import { inject } from 'vue'
import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
import Block from '@/views/Admin/Resource/components/Block/index.vue'
import infoCard from '@/views/Admin/Resource/components/infoCard/index.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import { FunnelIcon } from "@heroicons/vue/24/outline";
import { useRouter } from 'vue-router';

export default {
    name:"Recurso",
    components: {Whiteboard, Block, infoCard, FunnelIcon, Sidebar},

    setup() {
    const isSidebarMinimized = inject('isSidebarMinimized')
    const router = useRouter()

    function navigateTo(route) {
        router.push(route)
    }

    return {
      isSidebarMinimized,
      navigateTo
    }
  }
}

</script>
