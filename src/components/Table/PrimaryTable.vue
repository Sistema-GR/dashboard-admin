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
                          <tr v-for="person in visiblePeople" :key="person.matricula" class="even:bg-gray-50">

                              <td v-for="column in filteredColumns" :key="column.key" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                {{ person[column.key] }}
                              </td>

                              <td v-if="showEdit" class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                  <a href="#" @click.prevent="openDrawer(person)" class="text-indigo-600 hover:text-indigo-900">
                                    Edit<span class="sr-only">, {{ person }}</span>
                                  </a>
                              </td>

                              <td v-if="showGr" class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                  <RouterLink to="/admin/rewards" class="text-indigo-600 hover:text-indigo-900" @click.prevent="saveRowData(person)">
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

// Define a URL base
const BASE_URL = "http://localhost:8000/csv";

const routeJsonMapping = {
  'Results': `${BASE_URL}/process/percentual-gratificacao/`,
  'Calendar': `${BASE_URL}/process/dias-nao-contabilizados/`,       
  'Profissional': `${BASE_URL}/process/funcionarios/`,              
  'Groups': `${BASE_URL}/process/valores-grupo/`,
  'Steps': `${BASE_URL}/process/etapas-metas/`,
  'StageGroup': `${BASE_URL}/process/funcoes-grupo/`,
  'Frequency': `${BASE_URL}/process/frequencia/`,                   
  'Infrequency': `${BASE_URL}/process/motivos-infrequencia/`,       
  'Resignation': `${BASE_URL}/process/demissoes/`,                  
  'Activities': `${BASE_URL}/process/atividades/`,                  
  'Service': `${BASE_URL}/data/tempo_de_atuacao.json`,
  'Training': `${BASE_URL}/process/formacoes/`,                     
  'General': `${BASE_URL}/process/dados-gerais/`,
  'Local': `${BASE_URL}/process/tipo-local/`,
  'Report': `${BASE_URL}/data/criterios.json`
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

const showEdit = computed(() => ['Results', 'Profissional', 'Calendar', 'Groups', 'Steps', 'Frequency', 'Activities', 'Service', 'Training', 'Report'].includes(props.route));
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
const savedRowData = ref([]);

onMounted(async () => {
  await loadPeople();
  loadSavedData();
});

watch(() => props.searchQuery, () => {
  currentPage.value = 1; 
  loadMore();
});

watch(() => filteredPeopleByQuery.value.length, () => {
  loadMore();
});

watch(currentPage, () => {
  loadMore();
});

async function loadPeople() {
  try {
    const jsonUrl = routeJsonMapping[props.route];
    if (!jsonUrl) {
      console.error('No JSON URL found for route:', props.route);
      filteredPeople.value = [];
      filteredColumns.value = [];
      return;
    }
    
    const response = await fetch(jsonUrl, {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Dados recebidos da API:', data);

    // Ajuste aqui para acessar o array de dados diretamente
    if (data && Array.isArray(data.data)) {
      filteredColumns.value = Object.keys(data.data[0]).map(key => ({ key, label: key }));
      filteredPeople.value = data.data.map(item => ({
        ...item,
        matricula: item.matricula // Usando 'matricula' como chave única
      }));
    } else {
      console.error('Unexpected data format', data);
      filteredPeople.value = [];
      filteredColumns.value = [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    filteredPeople.value = [];
    filteredColumns.value = [];
  }

  loadMore();
}

function loadMore() {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  visiblePeople.value = filteredPeopleByQuery.value.slice(start, end);
}

function updateRowData(updatedRowData) {
  const index = filteredPeople.value.findIndex(person => person.matricula === updatedRowData.matricula);
  if (index !== -1) {
    filteredPeople.value[index] = { ...filteredPeople.value[index], ...updatedRowData };
    loadMore(); 
  } else {
    console.error("No matching row found for matricula:", updatedRowData.matricula);
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

async function saveRowData(person) {
  const matricula = person.matricula;
  const nome = person.Nome;

  let dadosProfissional = [];
  let dadosFrequencia = [];
  let dadosCriterios = [];
  const dadosUser = {}; // Estrutura para armazenar os dados organizados por ID

  // Busca todos os dados do profissional com base na matrícula e no nome
  try {
    const response = await fetch(routeJsonMapping['Profissional']);
    const data = await response.json();
    dadosProfissional = data.filter(prof => prof.matricula === matricula && prof.Nome === nome);
  } catch (error) {
    console.error('Erro ao buscar dados do profissional:', error);
  }

  // Busca todos os dados de frequência para o profissional
  try {
    const response = await fetch(routeJsonMapping['Frequency']);
    const data = await response.json();
    dadosFrequencia = data.filter(frequencia => frequencia.Nome === nome);
  } catch (error) {
    console.error('Erro ao buscar dados de frequência:', error);
  }

  // Busca todos os dados de critérios para o profissional
  try {
    const response = await fetch(routeJsonMapping['Report']);
    const data = await response.json();
    dadosCriterios = data.filter(criterio => criterio.matricula === matricula && criterio.Nome === nome);
  } catch (error) {
    console.error('Erro ao buscar dados de critérios:', error);
  }

  // Estruturar dados com base nos critérios encontrados
  for (let i = 0; i < dadosCriterios.length; i++) {
    const criterio = dadosCriterios[i];
    const id = `id${i + 1}`;

    // Filtra frequências específicas para o critério atual
    const frequenciasFiltradas = dadosFrequencia.filter(frequencia => frequencia.matricula === criterio.matricula);

    // Estrutura os dados conforme solicitado
    dadosUser[id] = {
      dados: criterio,
      frequencia: frequenciasFiltradas,
      profissionais: dadosProfissional,
    };
  }

  // Verifica se já existe um objeto "rowSave" no localStorage, senão cria um novo
  const savedRowData = JSON.parse(localStorage.getItem('rowSave')) || {};
  
  // Se já existir dados para a matrícula, mescla com os dados novos
  if (savedRowData[matricula]) {
    savedRowData[matricula] = { ...savedRowData[matricula], ...dadosUser };
  } else {
    savedRowData[matricula] = dadosUser;
  }

  // Salva os dados atualizados no localStorage
  localStorage.setItem('rowSave', JSON.stringify(savedRowData));
  console.log('Dados salvos:', savedRowData[matricula]);
}

function loadSavedData() {
  const savedData = localStorage.getItem('savedRowData');
  if (savedData) {
    savedRowData.value = JSON.parse(savedData);
    console.log('Dados salvos carregados:', savedRowData.value);
  }
}
</script>
