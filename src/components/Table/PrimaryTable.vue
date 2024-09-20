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

                                <th v-if="showEdit" scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3"></th>
                            </tr>

                        </thead>

                        <tbody class="bg-white">

                            <tr v-for="person in visiblePeople" :key="person.id" class="even:bg-gray-50">

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

        <Pagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          @update:currentPage="currentPage = $event"
        />

    </div>

    <Drawer ref="drawerRef" :title="drawerTitle" v-model:rowData="selectedRowData" :columns="filteredColumns" @update:rowData="updateRowData" @drawer-closed="handleDrawerClosed" />

</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { EyeIcon } from "@heroicons/vue/24/outline";
import Drawer from '../Drawer/Drawer.vue';
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
});

const routeJsonMapping = {
  'Results': '/data/ues_perc_gr.json',
  'Calendar': '/data/dias_nao_contabilizados.json',
  'Profissional': '/data/funcionarios.json',
  'Groups': '/data/valores_grupo.json',
  'Steps': '/data/etapas_metas_ue.json',
  'StageGroup': '/data/funcoes_grupos_etapas.json',
  'Frequency': '/data/frequencia.json',
  'Infrequency': '/data/motivos_infrequencia.json',
  'Resignation': '/data/demissoes.json',
  'Activities': '/data/atividades.json',
  'Service': '/data/service.json',
  'Training': '/data/formacoes.json',
  'General': '/data/dados_gerais.json',
  'Local': '/data/tipo_local.json',
  'Report': '/data/criterios.json'
};

const itemsPerPage = 10;
const currentPage = ref(1);
const filteredColumns = ref([]);
const filteredPeople = ref([]);
const visiblePeople = ref([]);
const selectedRowData = ref({});
const drawerTitle = computed(() => {
  switch (props.route) {
    case 'Results': return 'Resultados';
    case 'Profissional': return 'Profissional';
    case 'Groups': return 'Grupos';
    case 'Steps': return 'Etapas';
    case 'Frequency': return 'Frequência';
    case 'Resignation': return 'Demissão';
    case 'Activities': return 'Atividades';
    case 'Service': return 'Serviço';
    case 'Training': return 'Formação';
    case 'Report': return 'Relatório';
    default: return '';
  }
});
const showEdit = computed(() => ['Results', 'Profissional','Calendar', 'Groups', 'Steps', 'Frequency', 'Activities', 'Service', 'Training', 'Report'].includes(props.route));
const showGr = computed(() => props.route === 'Report');

const filteredPeopleByQuery = computed(() => {
  if (!props.searchQuery) {
    return filteredPeople.value;
  }
  const query = props.searchQuery.toLowerCase();
  return filteredPeople.value.filter(person =>
    Object.values(person).some(value =>
      String(value).toLowerCase().includes(query)
    )
  );
});

const totalPages = computed(() => Math.ceil(filteredPeopleByQuery.value.length / itemsPerPage));

const drawerRef = ref(null);

onMounted(async () => {
  try {
    const jsonUrl = routeJsonMapping[props.route];
    if (!jsonUrl) {
      console.error('No JSON URL found for route:', props.route);
      filteredPeople.value = [];
      filteredColumns.value = [];
      return;
    }

    const response = await fetch(jsonUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      const sample = data[0];
      filteredColumns.value = Object.keys(sample).map(key => ({ key, label: key }));

      filteredPeople.value = data.map((item, index) => ({
        ...item,
        id: index + 1
      }));
    } else {
      console.error('Unexpected data format');
      filteredPeople.value = [];
      filteredColumns.value = [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    filteredPeople.value = [];
    filteredColumns.value = [];
  }
});

watch(() => props.searchQuery, () => {
  currentPage.value = 1; 
  loadMore();
});

watch(() => filteredPeopleByQuery.value.length, () => {
  totalPages.value = Math.ceil(filteredPeopleByQuery.value.length / itemsPerPage);
  loadMore();
});

watch(currentPage, () => {
  loadMore();
});

function loadMore() {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  visiblePeople.value = filteredPeopleByQuery.value.slice(start, end);
}

function updateRowData(updatedRowData) {
  const index = filteredPeople.value.findIndex(person => person.id === updatedRowData.id);
  if (index !== -1) {
    filteredPeople.value[index] = updatedRowData;
    loadMore(); 
  } else {
    console.error("No matching row found for id:", updatedRowData.id);
  }
}

function openDrawer(person) {
  selectedRowData.value = { ...person };
  if (drawerRef.value) {
    drawerRef.value.openDrawer();
  }
}

function handleDrawerClosed() {
  selectedRowData.value = {};
}

</script>
