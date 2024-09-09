<template>
    <Whiteboard title="Status do Recurso" :isSidebarMinimized="isSidebarMinimized">

        <div :class="['flex flex-col w-full border rounded-lg p-4 shadow-md', cardColor]">
            <div class="flex items-center justify-between pb-2 border-b mb-4">
                <p class="text-lg font-semibold">Solicitação</p>
                <span :class="statusClass">{{ status }}</span>
            </div>
  
            <div class="flex items-start mb-4">

                <div class="border rounded-lg mr-3 p-2">
                    <UserIcon class="w-14 h-14 stroke-gray-300" />
                 </div>
  
                <div class="flex flex-col text-sm w-full">
                    <p class="font-medium">Nome do Solicitante: Matheus Gabriel Grawe</p>
                    <p>Descrição: Erro no processamento do pagamento</p>
                    <p>Protocolo: {{ protocol }}</p>
                </div>

                <div class="flex flex-col text-sm">

                    <p class="font-bold">Data de Abertura:</p>
                    <p>{{ openingDate }}</p>

                    <div class="mt-3">
                        <Badges :text="selectedBadge" />
                    </div>

                </div>

            </div>
  


        </div>
    
    </Whiteboard>
  </template>
  
  <script>
  import { UserIcon } from "@heroicons/vue/24/outline";
  import Whiteboard from "@/components/Whiteboard/Whiteboard.vue";
  import Badges from "@/components/Badges/Badges.vue";
  
  export default {
    name: "Status",
    components: { UserIcon, Whiteboard, Badges },
    props: {
      isSidebarMinimized: Boolean,
      status: {
        type: String,
        default: "Aberto",
      },
      protocol: {
        type: String,
        default: "#123456",
      },
      openingDate: {
        type: String,
        default: "01/02/2023",
      },
    },
    data() {
      return {
        selectedBadge: "Formação", 
      };
    },
    computed: {
      cardColor() {
        return {
          "bg-green-100 border-green-300": this.status === "Finalizado",
          "bg-blue-100 border-blue-300": this.status === "Em Progresso",
          "bg-yellow-100 border-yellow-300": this.status === "Pendente",
          "bg-red-100 border-red-300": this.status === "Reaberto",
          "bg-gray-100 border-gray-300": this.status === "Cancelado",
          "bg-white border-gray-300": !["Finalizado", "Em Progresso", "Pendente", "Reaberto", "Cancelado"].includes(this.status),
        };
      },
      statusClass() {
        return {
          "text-green-600": this.status === "Finalizado",
          "text-blue-600": this.status === "Em Progresso",
          "text-yellow-600": this.status === "Pendente",
          "text-red-600": this.status === "Reaberto",
          "text-gray-600": ["Cancelado", "Aberto"].includes(this.status),
        };
      },
    },
  };
  </script>
