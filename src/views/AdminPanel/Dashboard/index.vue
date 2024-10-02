<template>
    <Whiteboard title="Dashboard" :isSidebarMinimized="isSidebarMinimized">
      <div class="flex flex-row w-full items-center justify-between py-4 border-b rounded-lg shadow-lg bg-white">
        <p class="text-2xl italic font-semibold text-gray-800 ml-2">Primeira Versão</p>
  
        <div class="flex flex-col items-end">
          <p class="text-normal text-gray-600 mr-3">Valor Global: <span class="font-semibold text-gray-900">R$ 8.640,60</span></p>
          <p class="text-normal text-gray-600 mr-3">Periodo: <span class="font-semibold text-gray-900">01/02/2023 a 20/12/2023</span></p>
        </div>
      </div>
  
      <div class="flex w-full py-4">
        <div class="flex flex-row gap-2 items-center">
          <p class="text-3xl font-semibold text-gray-800">Total a Pagar:</p>
          <p class="text-3xl font-bold text-green-500">R$ 6.300.032,01</p>
        </div>
      </div>
  
      <div class="flex flex-wrap w-full items-center justify-center gap-5 p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <div class="flex flex-col items-center gap-3 shadow-lg p-4 bg-white rounded-lg">
          <p class="font-medium text-lg text-gray-700">Gráfico de Distribuição de Pagamento</p>
          <DoughnutChart :chart-data="paymentDistributionData" :options="paymentDistributionOptions" />
        </div>
  
        <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
          <p class="font-medium text-lg text-gray-700">Gráfico de Motivos do Não Recebimento</p>
          <BarChart :chart-data="nonPaymentReasonsData" :options="nonPaymentReasonsOptions" />
        </div>
  
        <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
          <p class="font-medium text-lg text-gray-700">Gráfico de Situação dos Profissionais</p>
          <BarChart :chart-data="professionalsData" :options="professionalsOptions" />
        </div>

        <div class="flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow-lg">
          <p class="font-medium text-lg text-gray-700">Gráfico de Situação dos Profissionais</p>
          <BarChart :chart-data="faixaPaymentsData" :options="faixaOptions" />
        </div>
      </div>
    </Whiteboard>
  </template>
  
  
  <script>
  import { ref, inject } from 'vue'
  import Sidebar from '@/components/Sidebar/Sidebar.vue';
  import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
  import { DoughnutChart, BarChart } from 'vue-chart-3';
  
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    DoughnutController,
    BarController
  } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, PointElement, LineElement, BarElement, LinearScale, DoughnutController, BarController);
  
  export default {
    name: "AdminPanel",
    components: { Sidebar, Whiteboard, DoughnutChart, BarChart },
  
    data() {
      return {
        paymentDistributionData: {
          labels: ['Pessoas que Receberam', 'Pessoas que Não Receberam'],
          datasets: [
            {
              label: 'Distribuição de Pagamento',
              backgroundColor: ['#00CC00', '#A9A9A9'], 
              data: [4142, 2150], 
            },
          ],
        },
        paymentDistributionOptions: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'bottom', 
            },
          },
        },
        nonPaymentReasonsData: {
          labels: [
            'Atividades',
            'Formação',
            'Frequência',
            'Mais de 1 critério individual',
            'Múltiplos critérios.',
            'Tempo de atuação'
          ],
          datasets: [
            {
              label: 'Motivos do Não Recebimento',
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57', '#3357FF'], 
              data: [12, 53, 1210, 502, 93, 1427], 
            },
          ],
        },
        nonPaymentReasonsOptions: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'none', 
            },
          },
        },
        // Dados para o gráfico de situação dos profissionais
        professionalsData: {
          labels: ['Total Geral', 'Ativos', 'Inativos'],
          datasets: [
            {
              label: 'Nº de Profissionais',
              backgroundColor: ['#36A2EB', '#FF6384', '#FFA500'], // Cores para cada categoria
              data: [4137, 3668, 469, ], // Números correspondentes
            },
          ],
        },
        professionalsOptions: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'none', 
            },
          },
        },

        faixaPaymentsData: {
        labels: [
          'Até R$ 1.500',
          'De R$ 1.500 a R$ 3.000',
          'De R$ 3.000 a R$ 4.500',
          'De R$ 4.500 a R$ 6.000',
          'Mais que R$ 6.000',
          'Não recebe nada',
          'Total'
        ],
        datasets: [
          {
            label: 'Nº de profissionais',
            data: [2046, 1814, 139, 26, 112, 3204, 7341],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              '#FF3340',
            ],
          },
        ],
      },
        faixaOptions: {
            responsive: true,
            plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribuição de Profissionais por Faixa de Pagamento',
            },
            },
        },
      };
    },
  
    setup() {
    const isSidebarMinimized = inject('isSidebarMinimized')

    return {
      isSidebarMinimized
    }
  }
  }
  </script>
  