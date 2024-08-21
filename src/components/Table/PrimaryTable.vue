<template>
  <div class="px-4 sm:px-2 lg:px-4 w-full">
    <div class="mt-6 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300 bg-primary-900 rounded-t-md shadow-md">
            <thead>
              <tr>
                <th v-for="column in filteredColumns" :key="column.key" scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-3 whitespace-nowrap break-words">
                  {{ column.label }}
                </th>
                <th v-if="showEdit" scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="person in filteredPeople" :key="person.matricula" class="even:bg-gray-50">
                <td v-for="column in filteredColumns" :key="column.key" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  {{ person[column.key] }}
                </td>
                <td v-if="showEdit" class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  <a href="#" @click.prevent="openDrawer(person)" class="text-indigo-600 hover:text-indigo-900">
                    Edit<span class="sr-only">, {{ person }}</span>
                  </a>
                </td>
                <td v-if="showGr" class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  <RouterLink to="/admin/rewards" class="text-indigo-600 hover:text-indigo-900">
                    <EyeIcon class="w-5 h-5" />
                    <span class="sr-only">Visualização da Gratificação</span>
                  </RouterLink>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  </div>

  <Drawer ref="drawerRef" :title="drawerTitle" :rowData="selectedRowData" :columns="filteredColumns" />
  
</template>

<script setup>
import Drawer from '../Drawer/Drawer.vue';
import { ref, computed } from 'vue'
import tableData from '@/components/Table/data.json';  
import { EyeIcon } from "@heroicons/vue/24/outline";

components: {EyeIcon}

const props = defineProps({
  route: {
    type: String,
    required: true
  }
})

const filteredColumns = computed(() => {
  return tableData[props.route]?.columns || []
})

const filteredPeople = computed(() => {
  return tableData[props.route]?.people || []
})

const showEdit = computed(() => props.route === 'Frequency' || props.route === 'Activities' || props.route === 'Service' || props.route === 'Training')
const showGr = computed(() => props.route === 'Report')

const drawerRef = ref(null)
const selectedRowData = ref({}) 

function openDrawer(person) {
  selectedRowData.value = { ...person }; 
  if (drawerRef.value) {
    drawerRef.value.openDrawer();
  }
}

function closeDrawer() {
  if (drawerRef.value) {
    drawerRef.value.closeDrawer()
  }
}

const drawerTitle = computed(() => {
  switch (props.route) {
    case 'Frequency':
      return 'Frequência'
    case 'Activities':
      return 'Atividades'
    case 'Service':
      return 'Tempo de Atuação'
    case 'Training':
      return 'Formação'
  }
})
</script>
