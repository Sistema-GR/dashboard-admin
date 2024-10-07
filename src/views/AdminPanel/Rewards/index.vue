<template>
    <Whiteboard title="" :isSidebarMinimized="isSidebarMinimized" class="-translate-y-10">
        <div class="flex w-full items-center justify-center bg-gradient-to-r from-azure-800 to-primary-900 -translate-y-3">
            <p class="text-white text-3xl py-5 uppercase font-bold w-full text-center">Painel da Gratificação</p>
        </div>
        <!-- ######################################################################################################### -->
        <div class="flex flex-row items-center w-full px-10 gap-10 pt-8 pb-4">

            <div class="w-full" v-for="row in savedData" :key="row.id">
                <div :class="`flex flex-col items-center justify-center bg-transparent rounded-lg`">
                    <div class="flex items-center justify-center w-full py-3 rounded-lg bg-azure-800">
                        <p class="text-white text-lg font-medium">Nome Do Servidor</p>
                    </div>
                    <div class="flex w-full items-center justify-center py-2.5 rounded-b-lg -translate-y-1 bg-solitude-100 shadow-lg shadow-slate-200">
                        <p class="font-medium whitespace-nowrap">{{ row.Nome }}</p>
                    </div>  
                </div>
            </div>

            <div class="w-full" v-for="row in savedData" :key="row.id">
                <div :class="`flex flex-col items-center justify-center  bg-transparent rounded-lg`">
                    <div class="flex items-center justify-center w-full py-3 rounded-lg bg-azure-800">
                        <p class="text-white text-lg font-medium">Valor</p>
                    </div>
                    <div class="flex w-full items-center justify-center py-2.5 rounded-b-lg -translate-y-1 bg-solitude-100 shadow-lg shadow-slate-200">
                        <p class="font-medium">R$ {{ row['Valor Total (bruto)'] }}</p>
                    </div>  
                </div>
            </div>

        </div>

        <div class="flex w-full items-center justify-center py-8 px-5 lg:px-0">
            <p class="text-red-600 text-2xl font-medium text-center">Aviso: os valores nesta página não consideram eventuais descontos de impostos.</p>
        </div>

        <div class="flex flex-row w-full items-center bg-solitude-200">
            <div class="flex w-full items-center justify-center">
                <img src="../../../assets/images/Ilustração.png" class="w-full lg:w-2/4 lg:-translate-x-8 pt-4"/>
            </div>

            <div class="flex flex-col items-center justify-center w-full text-normal mx-2 lg:text-2xl gap-3 lg:gap-0">
                <p>Ficou com alguma <span class="font-bold uppercase">DÚVIDA</span> sobre <span class="font-bold uppercase">VALOR</span>?</p>
                <p>Consulte o <span class="font-bold uppercase">DETALHAMENTO</span> abaixo!</p>
                <div class="flex items-center justify-center p-1 border-2 border-black rounded-full animate-bounce lg:mt-6">
                    <ArrowDownIcon class="w-6 h-auto stroke-black" />
                </div>
            </div>
        </div>

        <Disclosure>
            <template #default="{ open }">
                <DisclosureButton class="flex flex-row w-full items-center justify-between mt-0.5 py-4 px-5 bg-solitude-200 hover:bg-gray-400 ease-in-out duration-200 cursor-pointer">
                    <p class="text-lg font-medium">Detalhamento por Matrícula</p>
                    <ChevronDownIcon class="w-6 h-auto transform transition-transform" />
                </DisclosureButton>
                <DisclosurePanel class="w-full py-8">

                    <Disclosure v-for="row in savedData" :key="row.id">
                        <template #default="{open}">
                            <DisclosureButton class="flex flex-row w-full items-center justify-between mt-0.5 py-4 px-5 bg-solitude-200 hover:bg-gray-400 ease-in-out duration-200 cursor-pointer">
                                <p class="text-lg font-medium">Matrícula {{ row.Matricula }}</p>
                                <ChevronDownIcon class="w-6 h-auto transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}" />
                            </DisclosureButton>
                            <DisclosurePanel class="w-full">

                                <div class="overflow-x-auto w-full">
                                    <table class="min-w-full border-collapse rounded-lg shadow-lg">
                                        <thead>
                                            <tr class="bg-azure-800">
                                                <th class="p-3 font-semibold text-white text-left">Descrição</th>
                                                <th class="p-3 font-semibold text-white text-left">Dados</th>
                                                <th class="p-3 font-semibold text-white text-left">Valores a Receber</th>
                                                <th class="p-3 font-semibold text-white text-left">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="border p-3">
                                                    <p>Nome:</p>
                                                    <p>Matrícula:</p>
                                                    <p>Cargo:</p>
                                                </td>
                                                <td class="border p-3">
                                                    <p class="whitespace-nowrap">{{ row.Nome }}</p>
                                                    <p>{{ row.Matricula }}</p>
                                                    <p class="whitespace-nowrap">{{ row.Cargo }}</p>
                                                </td>
                                                <td class="border p-3">
                                                    <p>Rede:</p>
                                                    <p>Unidades:</p>
                                                    <p>Total:</p>
                                                </td>
                                                <td class="border p-3">
                                                    <p>R$ {{ row['Valor GR R'] }}</p>
                                                    <p>R$ {{ row['Valor GR Un'] }}</p>
                                                    <p class="whitespace-nowrap">R$ {{ row['Valor Total (bruto)'] }}</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <table class="w-full border-collapse border mt-8">
                                    <thead>
                                        <tr class="bg-azure-800">
                                            <th class="border-b p-2 text-center text-white">Tempo de Atuação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border p-2 text-center">{{ row['Atua a mais de 6 meses?'] }}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table class="w-full border-collapse border ">
                                    <thead>
                                        <tr class="bg-azure-800">
                                            <th class="border-b p-2 text-center text-white">Formação (Frequência)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border p-2 text-center">{{ row.Formações }}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table class="w-full border-collapse border mb-8">
                                    <thead>
                                        <tr class="bg-azure-800">
                                            <th class="border-b p-2 text-center text-white">Atividades</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border p-2 text-center">{{ row.Atividades }}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">

                                    <div class="flex w-full items-center justify-center py-3 bg-azure-800">
                                        <p class="text-xl font-medium text-white">Alocações em 2024</p>
                                    </div>
                           

                                    <table class="min-w-full border-collapse border border-gray-200">
                                        <thead>
                                            <tr>
                                                <th class="border border-gray-200 px-4 py-2 w-6/12 text-lg" colspan="3">{{ row['NM_Local de alocação'] }}</th>
                                                <th class="border border-gray-200 px-4 py-2">Etapa 1<br>80%</th>
                                                <th class="border border-gray-200 px-4 py-2">Etapa 2<br>0%</th>
                                                <th class="border border-gray-200 px-4 py-2">Etapa 3<br>100%</th>
                                            </tr>
                                            <tr>
                                                <th class="border border-gray-200 px-4 py-2">Início</th>
                                                <th class="border border-gray-200 px-4 py-2">Fim</th>
                                                <th class="border border-gray-200 px-4 py-2">Função</th>
                                                <th class="border border-gray-200 px-4 py-2">Carga Horária</th>
                                                <th class="border border-gray-200 px-4 py-2">Etapa</th>
                                                <th class="border border-gray-200 px-4 py-2">Grupo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center">
                                                <td class="border border-gray-200 px-4 py-2">{{ row['Data de Início Ajustada'] }}</td>
                                                <td class="border border-gray-200 px-4 py-2">{{ row['Data fim alocações FINAL'] }}</td>
                                                <td class="border border-gray-200 px-4 py-2">{{ row['NM_Disciplina'] }}</td>
                                                <td class="border border-gray-200 px-4 py-2">{{ row['Real'] }}</td>
                                                <td class="border border-gray-200 px-4 py-2"></td>
                                                <td class="border border-gray-200 px-4 py-2">{{ row['Grupos GR'] }}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>



                                <div class="flex flex-col w-full items-center border -translate-y-0.5 overflow-x-auto">
                                    <div class="flex w-full border-b items-center justify-center bg-azure-800 py-3">
                                        <p class="text-xl text-center font-medium text-white">Critério de Frequência (Afastamentos)</p>
                                    </div>

                                    <div class="flex w-full items-center justify-center border">
                                        <div class="flex w-full items-center justify-center border-r py-2">
                                            <p class="text-xl font-semibold">90,82%</p>
                                        </div>
                                        <div class="flex w-full items-center justify-center">
                                            <p class="text-xl font-semibold">Não atingiu</p>
                                        </div>
                                    </div>

                                    <div class="overflow-x-auto w-full"> 
                                        <table class="min-w-full border-collapse border">
                                            <thead>
                                                <tr>
                                                    <th class="border border-gray-200 px-4 py-2">Início</th>
                                                    <th class="border border-gray-200 px-4 py-2">Fim</th>
                                                    <th class="border border-gray-200 px-4 py-2">Tipo de Afastamento</th>
                                                    <th class="border border-gray-200 px-4 py-2">Total Dias</th>
                                                    <th class="border border-gray-200 px-4 py-2">Contabilizados</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="frequencia in row.frequencia" :key="frequencia.id" class="text-center">
                                                    <td class="border border-gray-200 px-4 py-2">{{ frequencia['Início Afas.'] }}</td> 
                                                    <td class="border border-gray-200 px-4 py-2">{{ frequencia['Fim Afas.'] }}</td> 
                                                    <td class="border border-gray-200 px-4 py-2">{{ frequencia['Motivo'] }}</td> 
                                                    <td class="border border-gray-200 px-4 py-2">{{ frequencia['Qtde Dias Afast'] }}</td> 
                                                    <td class="border border-gray-200 px-4 py-2">{{ frequencia['Contabiliza?'] }}</td> 
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>


                                <div class="flex flex-col w-full items-center border -translate-y-0.5 overflow-auto">
                                    <div class="flex w-full border-b items-center justify-center py-3 bg-azure-800">
                                        <p class="text-xl text-center font-medium text-white">Critérios de Verificação para Gratificação</p>
                                    </div>

                                    <div class="overflow-x-auto w-full">
                                        <table class="min-w-full border-collapse border whitespace-nowrap">
                                            <thead>
                                                <tr class="">
                                                    <th class="border border-gray-200 px-4 py-2 text-left">Critério</th>
                                                    <th class="border border-gray-200 px-4 py-2 text-left">Valor</th>
                                                    <th class="border border-gray-200 px-4 py-2 text-left">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="row in savedData" :key="row.id" class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-4 py-2">{{ row.criterio }}</td>
                                                    <td class="border border-gray-200 px-4 py-2">{{ row.valor }}</td>
                                                    <td class="border border-gray-200 px-4 py-2">{{ row.status }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>


                            </DisclosurePanel>
                        </template>
                    </Disclosure>

                </DisclosurePanel>
            </template>
        </Disclosure>

        <div class="flex w-full items-center justify-end">
            <router-link to="/user/form">
                <div class="flex flex-row items-center justify-center px-3 py-2 mt-3 gap-1 bg-tropical-blue-200 hover:bg-gray-400 ease-in-out duration-200 cursor-pointer">
                    <ExclamationCircleIcon class="w-6 h-auto" />
                    <p class="font-medium">Recurso</p>
                </div>
            </router-link>
        </div>
      
    </Whiteboard>
  </template>
  
  <script setup>
  import { inject, ref } from 'vue';
  import { ChevronDownIcon, ExclamationCircleIcon, ArrowDownIcon } from "@heroicons/vue/24/outline";
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
  import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
  import DetailsDrawer from './DetailsDrawer/DetailsDrawer.vue';
  
  const isSidebarMinimized = inject('isSidebarMinimized');
  const detailsDrawer = ref(null); 
  const savedData = JSON.parse(localStorage.getItem('savedRowData')) || [];
  
  // Variável reativa para armazenar a linha selecionada
  const selectedRow = ref(null); // Inicialmente, nenhuma linha está selecionada
  
  // Função para abrir o Drawer
  function openDrawer() {
    if (detailsDrawer.value) {
      detailsDrawer.value.openDrawer(); // Verifique se openDrawer está definido no DetailsDrawer
    }
  }
  
  // Função para selecionar um servidor
  const selectServer = (row) => {
    if (selectedRow.value && selectedRow.value.id === row.id) {
      // Se a linha clicada já estiver selecionada, não faça nada
      return;
    }
  
    selectedRow.value = row; // Atualiza a linha selecionada
  
    // Salva a linha selecionada no localStorage
    localStorage.setItem('selectedServer', JSON.stringify(row));
    
    console.log("Servidor selecionado:", row); // Log para verificação
  };
  </script>
  