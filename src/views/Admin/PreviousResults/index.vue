<template>
    <Whiteboard title="Cálculo Anteriores" :isSidebarMinimized="isSidebarMinimized">
      <div class="flex flex-row w-full items-center justify-between p-4 rounded-md cursor-pointer" @click="toggleDropdown">
        <p class="text-3xl font-semibold">{{ year }}</p>
        <ChevronDownIcon class="w-6 h-6 text-gray-500 cursor-pointer" />
      </div>
  
      <div v-if="dropdownOpen" class="w-full px-5 border-gray-300 pt-4">
        <div class="border-b-2 w-full"></div>
            <p class="text-normal font-medium text-gray-500">Últimas Versões</p>
        <div class="mt-4 flex flex-col w-full">
          <div 
            v-for="item in versions" 
            :key="item.version" 
            class="flex flex-col p-3 border-b border-gray-200  hover:bg-gray-50"
            @click="toggleDetails(item)"
          >
            <div class="flex items-center justify-between">
              <p class="italic text-gray-700">{{ item.version }}</p>
              <ChevronDownIcon class="w-5 h-5 text-gray-500" />
            </div>
            <div v-if="selectedVersion === item" class="mt-2">

                <div class="flex flex-row gap-1">
                    <p class="font-medium">Criado por:</p>
                    <p class="text-gray-600">{{ item.createdBy }}</p>
                </div>

                <div class="flex flex-row gap-1">
                    <p class="font-medium">Data:</p>
                    <p class="text-gray-600">{{ item.date }}</p>
                </div>

                <div class="flex flex-row gap-1">
                    <p class="font-medium">Descrição:</p>
                    <p class="text-gray-600">{{ item.description }}</p>
                </div>
                
                <div class="flex flex-row w-full items-center justify-end gap-3">
                  <SecondaryButton label="Excluir" customClass=""/>
                  <SecondaryButton label="Criar Cópiar" customClass=""/>
                </div>

            </div>
          </div>
        </div>
      </div>
    </Whiteboard>
  </template>
  
  <script>
  import { inject } from 'vue'
  import SecondaryButton from '@/components/Buttons/SecondaryButton.vue';
  import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
  import { ChevronDownIcon } from "@heroicons/vue/24/outline";
  
  export default {
    name: "PreviousResults",
    components: { Whiteboard, ChevronDownIcon, SecondaryButton },
    data() {
      return {
        year: '2024',
        versions: [
          { version: '2024_Primeira_versão_v1.0', createdBy: 'Alice', date: '2024-01-01', description: 'Primeira versão do projeto.' },
          { version: '2024_Segunda_versão_v1.1', createdBy: 'Bob', date: '2024-02-15', description: 'Melhorias e correções.' },
          { version: '2024_Terceira_versão_v1.2', createdBy: 'Charlie', date: '2024-03-20', description: 'Nova funcionalidade adicionada.' }
        ],
        dropdownOpen: false,
        selectedVersion: false
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      toggleDetails(selectedItem) {
        this.selectedVersion = this.selectedVersion === selectedItem ? null : selectedItem;
      }
    },
    setup() {
    const isSidebarMinimized = inject('isSidebarMinimized')

    return {
      isSidebarMinimized
    }
  }
  }
  </script>