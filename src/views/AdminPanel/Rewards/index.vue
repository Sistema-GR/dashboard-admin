<template>
     <main class="flex flex-col items-center justify-center mx-10 my-10 lg:pl-60 overflow-hidden">

        <div class="flex items-center justify-center rounded-b-lg py-4 w-full bg-primary-900 shadow-lg">
            <p class="text-white font-bold text-2xl">Painel de Gratificação</p>
        </div>
        
        <div class="flex flex-col w-full items-center justify-between px-8 py-5 mt-5 gap-10 lg:flex-row lg:gap-5">

            <Card title="Matrícula" label="u04444" customClass="text-2xl w-full lg:w-4/6" />
            <Card title="Servidor" label="Tom Cook Harris" customClass="text-2xl w-full lg:w-full" />
            <Card title="Valor" label="R$ 4.867,00" customClass="text-2xl w-full lg:w-4/6" />

        </div>

        <div class="flex w-full items-center justify-center py-8">
            <p class="text-red-600 text-2xl font-medium">Aviso: os valores nesta página não consideram eventuais descontos de impostos.</p>
        </div>

        <div class="flex w-full items-center justify-center pt-8 pb-5 border-b-2">
            <p class="font-semibold text-3xl">Detalhamento da Gratificação</p>
        </div>

        <div class="flex w-full items-center justify-center pt-4 pb-3">
            <p class="font-medium text-xl">Gratificação pelos Resultados Atingidos</p>
        </div>

        <div class="flex w-full flex-col gap-10 items-center justify-center mt-4 lg:flex-row">

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

        </div>

        <div class="flex items-center justify-center w-full lg:w-3/6 mt-8 mb-4">

                <Table 
                    title="Valor máximo total da Gratificação" 
                    :columns="grValue" 
                    :data="grValueData" 
                />
            </div>

        <div class="w-full flex justify-center items-center border-t-2 mt-4 py-3">
            <p class="font-medium text-xl mt-4">Análise dos Critérios Individuais</p>
        </div>

        <div class="flex flex-col items-center justify-center w-full gap-6 mb-6 lg:w-3/6">

            <Table 
                title="Tempo de Atuação Mínimo" 
                :columns="serviceValue" 
                :data="serviceValueData" 
            />

        </div>

        <div class="flex flex-col items-center justify-center w-full gap-8 py-5">

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
            
            <div class="flex flex-col md:flex-row w-full gap-10 items-center justify-center py-5">

                <div class="flex flex-col md:flex-row w-full shadow-lg gap-8">
                    
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

                </div>

            </div>

            <div class="flex items-center justify-center w-full py-3">

                    <Table 
                        title="Resumo" 
                        :columns="summaryValue" 
                        :data="summaryValueData" 
                     />
                
            </div>
         
            <div class="w-full flex justify-center items-center border-t-2 mt-4 py-3 mb-3">
                <p class="font-medium text-center text-xl mt-4">Dúvidas: Telefone: 3431-3008 / Email: sed.upl@edu.joinville.sc.gov.br <br> Rua Itajaí, 390 - Centro - 89201090</p>
            </div>  

        </div>

    </main>
</template>

<script>
import Card from '@/views/AdminPanel/Rewards/Card/Card.vue'
import Table from "@/views/AdminPanel/Rewards/Table/Table.vue"

export default {
    name: "RewardDashboard",
    components: {Card, Table},

    data() {
        return {
            unitValue: [
                { key: 'matricula', label: 'Matrícula' },
                { key: 'unidade', label: 'Unidade' },
                { key: 'funcao', label: 'Função' },
                { key: 'valorMaximo', label: 'Valor Máximo Unidade' }
            ],
            unitValueData: [
                {
                    matricula: 'u04444',
                    unidade: 'SED - Sede',
                    funcao: 'Analista',
                    valorMaximo: 'R$ 1000,00'
                }
            ],

            redeValue: [
                { key: 'matricula', label: 'Matrícula' },
                { key: 'funcao', label: 'Função' },
                { key: 'valorMaximo', label: 'Valor Máximo Unidade' }
            ],
            redeValueData: [
                {
                    matricula: 'u04444',
                    funcao: 'Analista',
                    valorMaximo: 'R$ 1000,00'
                }
            ],

            grValue: [
                { key: 'matricula', label: 'Matrícula' },
                { key: 'funcao', label: 'Função' },
                { key: 'valorMaximo', label: 'Valor Máximo Unidade' }
            ],
            grValueData: [
                {
                    matricula: 'u04444',
                    funcao: 'Analista',
                    valorMaximo: 'R$ 1000,00'
                }
            ],

            serviceValue: [
                { key: 'matricula', label: 'Matrícula' },
                { key: 'service', label: 'Tempo de Atuação' },
                { key: 'bonus', label: 'Recebimento da Gratificação' }
            ],
            serviceValueData: [
                {
                    matricula: 'u04444',
                    service: 'Não atua há mais de 6 meses na rede',
                    bonus: 'R$ 1000,00'
                }
            ],

            freqValue: [
                { key: 'matricula', label: 'Matrícula' },
                { key: 'name', label: 'Nome do Colaborador' },
                { key: 'dias_totais_afastamento', label: 'Dias totais de afastamento' },
                { key: 'freq', label: '% Frequência' },
                { key: 'freq_percent', label: '% De recebimento da Gratificação' }
            ],
            freqValueData: [
                {
                    matricula: 'u04444',
                    name: 'João Silva',
                    dias_totais_afastamento: 15,
                    freq: 85,
                    freq_percent: 75,
                }
            ],

            leaveValue: [
                { key: 'matricula', label: 'Matrícula' },
                { key: 'name', label: 'Nome do Colaborador' },
                { key: 'reason', label: 'Motivo' },
                { key: 'data_init', label: 'Data Início' },
                { key: 'data_end', label: 'Data Fim' },
                { key: 'counted_business_days', label: 'Dias úteis de afastamento contabilizados' },
                
            ],
            leaveValueData: [
                {
                    matricula: 'u04444',
                    name: 'João Silva',
                    reason: 'Doença',
                    data_init: '01/02/2023',
                    data_end: '20/12/2024',
                    counted_business_days: 207,
                }
            ],

            trainingValue: [
                { key: 'matricula', label: 'Matrícula' },
                { key: 'name', label: 'Nome' },
                { key: 'completed_training', label: 'Realizou as formações oferecidas?' },
                { key: 'bonus', label: 'Recebimento da gratificação' },
                
            ],
            trainingValueData: [
                {
                    matricula: 'u04444',
                    name: 'João Silva',
                    completed_training: 'Sim',
                    bonus: 'Apto a receber a gratificação',
                    
                }
            ],

            activitiesValue: [
                { key: 'matricula', label: 'Matrícula' },
                { key: 'name', label: 'Nome' },
                { key: 'completed_activities', label: 'Realizou as Atividades oferecidas?' },
                { key: 'bonus', label: 'Recebimento da gratificação' },
                
            ],
            activitiesValueData: [
                {
                    matricula: 'u04444',
                    name: 'João Silva',
                    completed_activities: 'Sim',
                    bonus: 'Apto a receber a gratificação',
                    
                }
            ],

            summaryValue: [
                { key: 'matricula', label: 'Matrícula' },
                { key: 'name', label: 'Nome' },
                { key: 'grossValue', label: 'Valor Bruto' },
                { key: 'discountByCriteriaValue', label: 'Valor de desconto pelos critérios individuais' },
                { key: 'amountToReceive', label: 'Valor a Receber' },
            ],
            summaryValueData: [
                {
                    matricula: 'u04444',
                    name: 'João Silva',
                    grossValue: 'R$ 1.0000',
                    discountByCriteriaValue: 0,
                    amountToReceive: 'R$ 1.000'
                }
            ],
        };
    },
}
</script>