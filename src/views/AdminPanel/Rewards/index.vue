<template>
    <Whiteboard title="" :isSidebarMinimized="isSidebarMinimized" customClass="bg-blue-500 px-0" class="-translate-y-10">

        <div class="flex w-full items-center justify-center bg-gradient-to-r from-azure-800 to-primary-900 -translate-y-3">
            <p class="text-white text-3xl py-5 uppercase font-bold w-full text-center">Painel da Gratificação</p>
        </div>


        <div class="flex flex-col justify-center items-center w-full mt-10 gap-10 px-5 lg:flex-row lg:px-10">
            <div class="w-full -translate-y-2">
                <Card title="Servidor" label="Tom Cook Harris" customClass="text-2xl w-full lg:w-full" />
            </div>
            <div class="flex flex-col items-center w-full lg:w-3/6">
                <Card title="Valor Total" label="R$ 8.662,00" customClass="text-2xl" />
                <p class="text-xs font-medium underline cursor-pointer translate-y-1" @click="openDrawer">Exibir Detalhamento</p>
            </div>

            <DetailsDrawer ref="detailsDrawer"/>
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

        <div class="flex w-full items-center justify-center bg-primary-800">
            <p class="text-white text-3xl py-5 text-center">Detalhamento da Gratificação</p>
        </div>

        <Disclosure>
            <template #default="{ open }">
                <DisclosureButton class="flex flex-row w-full items-center justify-between mt-0.5 py-4 px-5 bg-solitude-200 hover:bg-gray-400 ease-in-out duration-200 cursor-pointer">
                    <p class="text-lg font-medium">Detalhamento por Matrícula</p>
                    <ChevronDownIcon :class="`w-6 h-auto transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`" />
                </DisclosureButton>
                <DisclosurePanel class="w-full py-8 px-3">

                    <Disclosure>
                        <template #default="{open}">
                            <DisclosureButton class="flex flex-row w-full items-center justify-between mt-0.5 py-4 px-5 bg-solitude-200 hover:bg-gray-400 ease-in-out duration-200 cursor-pointer">
                                <p class="text-lg font-medium">Matrícula 56968</p>
                                <ChevronDownIcon :class="`w-6 h-auto transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`" />
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
                                                    <p class="whitespace-nowrap">SUSANA RIBEIRO BERNARDO</p>
                                                    <p>56968</p>
                                                    <p class="whitespace-nowrap">PROFESSOR 6-9 ANO ENSINO FUNDAMENTAL CIÊNCIAS</p>
                                                </td>
                                                <td class="border p-3">
                                                    <p>Rede:</p>
                                                    <p>Unidades:</p>
                                                    <p>Total:</p>
                                                </td>
                                                <td class="border p-3">
                                                    <p>R$0,00</p>
                                                    <p>R$0,00</p>
                                                    <p>R$0,00</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <table class="w-full border-collapse border ">
                                    <thead>
                                        <tr class="bg-azure-800">
                                            <th class="border-b p-2 text-center text-white">Tempo de Atuação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border p-2 text-center">Não atingiu o mínimo necessário</td>
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
                                            <td class="border p-2 text-center">Não atingiu o mínimo necessário</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table class="w-full border-collapse border ">
                                    <thead>
                                        <tr class="bg-azure-800">
                                            <th class="border-b p-2 text-center text-white">Atividades</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border p-2 text-center">Não atingiu o mínimo necessário</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5 overflow-x-auto">
                                    <div class="flex w-full border-b items-center justify-center py-3 bg-azure-800">
                                        <p class="text-xl text-center font-medium text-white">Alocações em 2024</p>
                                    </div>

                                    <div v-for="(institutionData, index) in institutions" :key="index" class="w-full">
                                        <div class="overflow-x-auto"> 
                                            <table class="min-w-full border-collapse border border-gray-200">
                                                <thead>
                                                    <tr>
                                                        <th class="border border-gray-200 px-4 py-2 w-6/12 text-lg" colspan="3">{{ institutionData.name }}</th>
                                                        <th v-for="(etapa, etapaIndex) in institutionData.etapas" :key="etapaIndex" class="border border-gray-200 px-4 py-2 whitespace-nowrap">
                                                        {{ etapa.name }}<br>{{ etapa.percent }}
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th v-for="header in headers" :key="header" class="border border-gray-200 px-4 py-2">{{ header }}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(row, rowIndex) in institutionData.rows" :key="rowIndex">
                                                        <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="border border-gray-200 px-4 py-2 whitespace-nowrap">{{ cell }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div v-if="index < institutions.length - 1" class="w-full bg-azure-800 py-3"></div>
                                    </div>
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
                                                <tr v-for="(afastamento, index) in afastamentos" :key="index">
                                                    <td class="border border-gray-200 px-4 py-2">{{ afastamento.inicio }}</td>
                                                    <td class="border border-gray-200 px-4 py-2">{{ afastamento.fim }}</td>
                                                    <td class="border border-gray-200 px-4 py-2">{{ afastamento.tipo }}</td>
                                                    <td class="border border-gray-200 px-4 py-2">{{ afastamento.totalDias }}</td>
                                                    <td class="border border-gray-200 px-4 py-2">{{ afastamento.contabilizados }}</td>
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
                                                <tr v-for="(item, index) in criterios" :key="index" class="hover:bg-gray-50">
                                                    <td class="border border-gray-200 px-4 py-2">{{ item.criterio }}</td>
                                                    <td class="border border-gray-200 px-4 py-2">{{ item.valor }}</td>
                                                    <td class="border border-gray-200 px-4 py-2">{{ item.status }}</td>
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
import Card from './Card/Card.vue';
import DetailsDrawer from './DetailsDrawer/DetailsDrawer.vue';

const isSidebarMinimized = inject('isSidebarMinimized');

const detailsDrawer = ref(null); 

function openDrawer() {
  if (detailsDrawer.value) {
    detailsDrawer.value.openDrawer();
  }
}

const institutions = ref([
  {
    name: "EM Dom Jaime De Barros Camara",
    etapas: [
      { name: "Etapa 1", percent: "80%" },
      { name: "Etapa 2", percent: "0%" },
      { name: "Etapa 3", percent: "100%" }
    ],
    rows: [
      ["01/02/2023", "02/05/2023", "Professor - CORREÇÃO DE FLUXO", "60:00:00", "Etapa 3", "Grupo I"],
      ["03/05/2023", "12/07/2023", "Professor - CIÊNCIAS", "04:00:00", "Etapa 3", "Grupo I"],
      ["05/05/2023", "12/07/2023", "Professor - CORREÇÃO DE FLUXO", "15:00:00", "Etapa 3", "Grupo I"]
    ]
  },
  {
    name: "EM Prof Ada S Da Silveira",
    etapas: [
      { name: "Etapa 1", percent: "80%" },
      { name: "Etapa 2", percent: "0%" },
      { name: "Etapa 3", percent: "100%" }
    ],
    rows: [
      ["01/02/2023", "02/05/2023", "Professor - CIÊNCIAS", "180:00:00", "Etapa 3", "Grupo I"]
    ]
  },
  {
    name: "Caic Prof Mariano Costa",
    etapas: [
      { name: "Etapa 1", percent: "80%" },
      { name: "Etapa 2", percent: "0%" },
      { name: "Etapa 3", percent: "100%" }
    ],
    rows: [
      ["12/09/2022", "31/01/2023", "Professor - CIÊNCIAS", "55:00:00.000", "Etapa 3", "Grupo I"]
    ]
  },
  {
    name: "Escola Municipal de Jovens e Adultos",
    etapas: [
      { name: "Etapa 1", percent: "80%" },
      { name: "Etapa 2", percent: "0%" },
      { name: "Etapa 3", percent: "100%" }
    ],
    rows: [
      ["13/07/2023", "08/08/2023", "Professor - CIÊNCIAS", "220:00:00.000", "Rede", "Grupo IV"]
    ]
  }
]);

const headers = ["Início", "Fim", "Função", "Carga Horária", "Etapa", "Grupo"];

const afastamentos = ref([
  {
    inicio: "01/01/2024",
    fim: "10/01/2024",
    tipo: "Afastamento Médico",
    totalDias: 10,
    contabilizados: 10,
  },
  {
    inicio: "15/01/2024",
    fim: "20/01/2024",
    tipo: "Licença",
    totalDias: 5,
    contabilizados: 5,
  },
  {
    inicio: "25/01/2024",
    fim: "30/01/2024",
    tipo: "Férias",
    totalDias: 5,
    contabilizados: 5,
  },
]);

const criterios = ref([
  { criterio: 'Frequência', valor: '92%', status: 'Não Apto' },
  { criterio: 'Tempo de Atuação', valor: 'Atuou há mais de 6 meses', status: 'Apto a Receber Gratificação' },
  { criterio: 'Formação', valor: '100%', status: 'Apto a Receber Gratificação' },
  { criterio: 'Atividades', valor: '100%', status: 'Apto a Receber Gratificação' },
]);
</script>


