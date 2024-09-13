<template>
  <div class="px-4 sm:px-2 lg:px-4 w-full">
    <div class="mt-6 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300 bg-primary-900 rounded-t-md shadow-md">
            <thead>
              <tr>
                <th v-for="column in filteredColumns" :key="column" scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-3 whitespace-nowrap break-words">
                  {{ column }}
                </th>
                <th v-if="showEdit" scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3"></th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="item in visiblePeople" :key="item['Local [nome]']" class="even:bg-gray-50">
                <td v-for="column in filteredColumns" :key="column" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  {{ item[column] }}
                </td>
                <td v-if="showEdit" class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  <a href="#" @click.prevent="openDrawer(item)" class="text-indigo-600 hover:text-indigo-900">
                    Edit<span class="sr-only">, {{ item['Local [nome]'] }}</span>
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
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @update:currentPage="currentPage = $event"
    />
  </div>

  <Drawer ref="drawerRef" :title="drawerTitle" v-model:rowData="selectedRowData" :columns="filteredColumns" @update:rowData="updateRowData" @drawer-closed="handleDrawerClosed" />
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { EyeIcon } from "@heroicons/vue/24/outline";
import Drawer from '../Drawer/Drawer.vue'
import Pagination from '../Pagination/Pagination.vue';

const props = defineProps({
  route: {
    type: String,
    required: true
  },
  searchQuery: {
    type: String,
    default: ''
  }
})

const filteredColumns = ref([])
const filteredPeople = ref([])
const visiblePeople = ref([])
const selectedRowData = ref()
const drawerTitle = computed(() => {
  switch (props.route) {
    case 'Results': return 'Resultados'
    case 'Profissional': return 'Resultados'
    case 'Groups': return 'Groups'
    case 'Steps': return 'Steps'
    case 'Frequency': return 'Frequency'
    case 'Activities': return 'Activities'
    case 'Service': return 'Service'
    case 'Training': return 'Training'
    case 'Report': return 'Report'
    default: return ''
  }
})
const showEdit = computed(() => props.route === 'Results')
const showGr = computed(() => props.route === 'Report')

const drawerRef = ref(null)

const itemsPerPage = 10 // Número de itens por página
const currentPage = ref(1) // Página atual
const totalPages = computed(() => Math.ceil(filteredPeople.value.length / itemsPerPage))

// Mapeamento das rotas para caminhos JSON
const routeJsonMapping = {
  'Results': '/data/df_ues_perc_gr.json',
  'Profissional': '/data/profissional.json',
  'Groups': '/data/groups.json',
  'Steps': '/data/etapas_metas_ue.json',
  'Frequency': '/data/frequency.json',
  'Activities': '/data/activities.json',
  'Service': '/data/service.json',
  'Training': '/data/training.json',
  'Report': '/data/resultado_calculo_399.json'
}

onMounted(async () => {
  try {
    const jsonUrl = routeJsonMapping[props.route] || '/data/df_ues_perc_gr.json'
    const response = await fetch(jsonUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    if (!Array.isArray(data)) {
      throw new Error('Os dados recebidos não são um array.')
    }

    const firstItem = data[0] || {}
    filteredColumns.value = Object.keys(firstItem).filter(key => key !== 'Vulnerabilidade')
    filteredPeople.value = data

    loadMore() // Carregar a primeira página de resultados

  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

watch(() => filteredPeople.value.length, () => {
  totalPages.value = Math.ceil(filteredPeople.value.length / itemsPerPage)
  loadMore()
})

watch(currentPage, () => {
  loadMore()
})

function loadMore() {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  visiblePeople.value = filteredPeople.value.slice(start, end)
}

function updateRowData(updatedRowData) {
  console.log('Updating row data:', updatedRowData)
  const index = filteredPeople.value.findIndex(item => item['Local [nome]'] === updatedRowData['Local [nome]'])
  console.log('Index of updated row:', index)
  if (index !== -1) {
    filteredPeople.value[index] = updatedRowData
    console.log('Updated row data in local array:', filteredPeople.value[index])

    fetch('/api/update-data', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedRowData)
    })
      .then(response => {
        console.log('Response from API:', response)
        return response.json()
      })
      .then(data => {
        console.log('Data updated successfully:', data)
        // TODO: Update the local array of data with the updated data
      })
      .catch(error => console.error('Error updating data:', error))
  }
}

function openDrawer(rowData) {
  selectedRowData.value = rowData
  drawerRef.value.openDrawer();
}

function handleDrawerClosed() {
  selectedRowData.value = null
}
</script>
