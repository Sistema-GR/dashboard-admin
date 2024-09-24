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
                    <p class="text-lg font-medium">Gratificação pelos resultados atingidos</p>
                    <ChevronDownIcon :class="`w-6 h-auto transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`" />
                </DisclosureButton>
                <DisclosurePanel class="w-full py-10 px-5 space-y-10 lg:px-10">

                    <Table 
                        title="Resumo da Tabela 399" 
                        :columns="resumo399Columns" 
                        :data="resumo399Data" 
                    />
                    <Table 
                        title="Valor máximo pelos resultados das unidades escolares de atuação" 
                        :columns="unitValue" 
                        :data="unitValueData" 
                    />
                    <Table 
                        title="Valor máximo pelos resultados da rede" 
                        :columns="redeValue" 
                        :data="redeValueData" 
                    />
                    <Table 
                        title="Valor máximo total da Gratificação" 
                        :columns="grValue" 
                        :data="grValueData" 
                    />

                </DisclosurePanel>
            </template>
        </Disclosure>

        <Disclosure>
            <template #default="{ open }">
                <DisclosureButton class="flex flex-row w-full items-center justify-between mt-0.5 py-4 px-5 bg-solitude-200 cursor-pointer hover:bg-gray-400 ease-in-out duration-200">
                    <p class="text-lg font-medium">Análise dos critérios individuais</p>
                    <ChevronDownIcon :class="`w-6 h-auto transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`" />
                </DisclosureButton>
                <DisclosurePanel class="w-full py-10 px-5 space-y-10 lg:px-10">
                    <Table 
                        title="Tempo de Atuação Mínimo" 
                        :columns="serviceValue" 
                        :data="serviceValueData" 
                    />
                    <Table 
                        title="Frequência" 
                        :columns="freqValue" 
                        :data="freqValueData" 
                    />
                    <Table 
                        title="Detalhe do Afastamento" 
                        :columns="leaveValue" 
                        :data="leaveValueData" 
                    />
                    <Table 
                        title="Formação" 
                        :columns="trainingValue" 
                        :data="trainingValueData" 
                    />
                    <Table 
                        title="Atividades" 
                        :columns="activitiesValue" 
                        :data="activitiesValueData" 
                    />
                </DisclosurePanel>
            </template>
        </Disclosure>

        <Disclosure>
            <template #default="{ open }">
                <DisclosureButton class="flex flex-row w-full items-center justify-between mt-0.5 py-4 px-5 bg-cornflowe-blue-500 cursor-pointer hover:bg-gray-400 ease-in-out duration-200">
                    <p class="text-lg font-medium">Resumo</p>
                    <ChevronDownIcon :class="`w-6 h-auto transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`" />
                </DisclosureButton>
                <DisclosurePanel class="w-full py-10 px-5 space-y-10 lg:px-10">
                    <Table 
                        title="Resumo" 
                        :columns="summaryValue" 
                        :data="summaryValueData" 
                     />
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
import Table from './Table/Table.vue';
import DetailsDrawer from './DetailsDrawer/DetailsDrawer.vue';

const isSidebarMinimized = inject('isSidebarMinimized');

const detailsDrawer = ref(null); 

function openDrawer() {
  if (detailsDrawer.value) {
    detailsDrawer.value.openDrawer();
  }
}

const resumo399Columns = ref([
    { key: 'matricula', label: 'Matrícula' },
    { key: 'ue', label: 'UE' },
    { key: 'ueDisciplina', label: 'Disciplina ou Função' },
    { key: 'dataInicio', label: 'Data de Início' },
    { key: 'dataFim', label: 'Data de Fim' },
    { key: 'cargaHoraria', label: 'Carga Horária' },
    { key: 'grupo', label: 'Grupo' },
    { key: 'etapasAtuacao', label: 'Etapas de Atuação' },
    { key: 'resultadoAtingimento', label: 'Resultado de Atingimento' }
]);

const resumo399Data = ref([
    {
        matricula: 'u04444',
        ue: 'EM Prof Saul Santanna O Dias',
        ueDisciplina: ' Professor - BLOCO 2',
        dataInicio: '01/01/2023',
        dataFim: '30/06/2023',
        cargaHoraria: '220 horas',
        grupo: 'Grupo III',
        etapasAtuacao: 'Etapa III',
        resultadoAtingimento: 'R$ 3.223,26'
    },
]);

const unitValue = ref([
    { key: 'matricula', label: 'Matrícula' },
    { key: 'unidade', label: 'Unidade' },
    { key: 'funcao', label: 'Função' },
    { key: 'valorMaximo', label: 'Valor máximo unidade' }
]);

const unitValueData = ref([
    {
        matricula: 'u04444',
        unidade: 'SED - Sede',
        funcao: 'Analista',
        valorMaximo: 'R$ 4.867,00'
    },
]);

const redeValue = ref([
    { key: 'matricula', label: 'Matrícula' },
    { key: 'funcao', label: 'Função' },
    { key: 'valorMaximo', label: 'Valor máximo unidade' }
]);

const redeValueData = ref([
    {
        matricula: 'u04444',
        funcao: 'Analista',
        valorMaximo: 'R$ 4.867,00'
    }
]);

const grValue = ref([
    { key: 'matricula', label: 'Matrícula' },
    { key: 'funcao', label: 'Função' },
    { key: 'valorMaximo', label: 'Valor máximo unidade' }
]);

const grValueData = ref([
    {
        matricula: 'u04444',
        funcao: 'Analista',
        valorMaximo: 'R$ 4.867,00'
    }
]);

const serviceValue = ref([
    { key: 'matricula', label: 'Matrícula' },
    { key: 'service', label: 'Tempo de atuação' },
    { key: 'bonus', label: 'Recebimento da gratificação' }
]);

const serviceValueData = ref([
    {
        matricula: 'u04444',
        service: 'Não atua há mais de 6 meses na rede',
        bonus: 'R$ 4.867,00'
    }
]);

const freqValue = ref([
    { key: 'matricula', label: 'Matrícula' },
    { key: 'name', label: 'Nome do colaborador' },
    { key: 'dias_totais_afastamento', label: 'Dias totais de afastamento' },
    { key: 'freq', label: '% Frequência' },
    { key: 'freq_percent', label: '% De recebimento da gratificação' }
]);

const freqValueData = ref([
    {
        matricula: 'u04444',
        name: 'João Silva',
        dias_totais_afastamento: 15,
        freq: 85,
        freq_percent: 75,
    }
]);

const leaveValue = ref([
    { key: 'matricula', label: 'Matrícula' },
    { key: 'name', label: 'Nome do colaborador' },
    { key: 'reason', label: 'Motivo' },
    { key: 'data_init', label: 'Data Início' },
    { key: 'data_end', label: 'Data Fim' },
    { key: 'counted_business_days', label: 'Dias úteis de afastamento contabilizados' },
]);

const leaveValueData = ref([
    {
        matricula: 'u04444',
        name: 'João Silva',
        reason: 'Doença',
        data_init: '01/02/2023',
        data_end: '20/12/2024',
        counted_business_days: 207,
    }
]);

const trainingValue = ref([
    { key: 'matricula', label: 'Matrícula' },
    { key: 'name', label: 'Nome' },
    { key: 'completed_training', label: 'Realizou as formações oferecidas' },
    { key: 'bonus', label: 'Recebimento da gratificação' },
]);

const trainingValueData = ref([
    {
        matricula: 'u04444',
        name: 'João Silva',
        completed_training: 'Sim',
        bonus: 'Apto a receber a gratificação',
    }
]);

const activitiesValue = ref([
    { key: 'matricula', label: 'Matrícula' },
    { key: 'name', label: 'Nome' },
    { key: 'completed_activities', label: 'Realizou as atividades oferecidas' },
    { key: 'bonus', label: 'Recebimento da gratificação' },
]);

const activitiesValueData = ref([
    {
        matricula: 'u04444',
        name: 'João Silva',
        completed_activities: 'Sim',
        bonus: 'Apto a receber a gratificação',
    }
]);

const summaryValue = ref([
    { key: 'matricula', label: 'Matrícula' },
    { key: 'name', label: 'Nome' },
    { key: 'grossValue', label: 'Valor bruto' },
    { key: 'discountByCriteriaValue', label: 'Valor de desconto pelos critérios individuais' },
    { key: 'amountToReceive', label: 'Valor a receber' },
]);

const summaryValueData = ref([
    {
        matricula: 'u04444',
        name: 'João Silva',
        grossValue: 'R$ 4.867,00',
        discountByCriteriaValue: 0,
        amountToReceive: 'R$ 4.867,00'
    }
]);

</script>

