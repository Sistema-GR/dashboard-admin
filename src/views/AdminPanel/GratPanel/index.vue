<template>
     <Whiteboard title="">

        <div class="flex items-center justify-center rounded-b-lg py-4 w-full bg-primary-900 shadow-lg">
            <p class="text-white font-bold text-2xl">Painel de Gratificação</p>
        </div>

        <div class="flex w-full items-center justify-between px-8 py-5 mt-5 gap-10">

            <div class="flex flex-col items-center justify-center w-4/6 shadow-lg">
                <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                    <p class="text-white text-lg font-medium">Matrícula</p>
                </div>
                <div class="flex w-full items-center justify-center py-2.5">
                    <p class="font-medium">00000</p>
                </div>
            </div>
            
            <div class="flex flex-col items-center justify-center w-full shadow-lg">
                <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                    <p class="text-white text-lg font-medium">Servidor</p>
                </div>
                <div class="flex w-full items-center justify-center py-2.5">
                    <p class="font-medium">XXXX XXXX XXXX</p>
                </div>
            </div>
            
            <div class="flex flex-col items-center justify-center w-4/6 shadow-lg">
                <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                    <p class="text-white text-lg font-medium">Valor</p>
                </div>
                <div class="flex w-full items-center justify-center py-2.5">
                    <p class="font-medium">R$ 0,00</p>
                </div>
            </div>
        </div>

        <div class="flex w-full items-center justify-center py-8">
            <p class="text-red-500 font-medium">Aviso: os valores nesta página não consideram eventuais descontos de impostos.</p>
        </div>

        <div class="flex w-full items-center justify-center pt-10 pb-3 border-b-2">
            <p class="font-semibold text-2xl">Detalhamento da Gratificação</p>
        </div>

        <div class="flex w-full items-center justify-center pt-4 pb-3">
            <p class="font-medium text-xl">Gratificação pelos Resultados Atingidos</p>
        </div>

        <div class="flex w-full flex-row gap-10 items-center justify-center mt-4">

            <div class="flex flex-col items-center justify-center w-full shadow-lg">

                <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                    <p class="text-white text-lg font-medium">Valor máximo pelos resultados das unidades escolares de atuação</p>
                </div>

                <table class="min-w-full text-sm shadow-sm border-gray-300">
                    <thead>
                        <tr class="bg-gray-300">
                            <th class="py-2 px-4 text-left border-b border-gray-300">Matrícula</th>
                            <th class="py-2 px-4 text-left border-b border-gray-300">Unidade</th>
                            <th class="py-2 px-4 text-left border-b border-gray-300">Função</th>
                            <th class="py-2 px-4 text-left border-b border-gray-300">Valor Máximo Unidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b border-gray-300">00000</td>
                            <td class="py-2 px-4 border-b border-gray-300">SED - Sede</td>
                            <td class="py-2 px-4 border-b border-gray-300">Estagiário Nível Superior</td>
                            <td class="py-2 px-4 border-b border-gray-300">R$ 0,00</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div class="flex flex-col items-center justify-center w-full shadow-lg">

                <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                    <p class="text-white text-lg font-medium">Valor máximo pelos resultados da rede</p>
                </div>

                <table class="min-w-full text-sm shadow-sm border-gray-300">
                    <thead>
                        <tr class="bg-gray-300">
                            <th class="py-2 px-4 text-left border-b border-gray-300">Matrícula</th>
                            <th class="py-2 px-4 text-left border-b border-gray-300">Função</th>
                            <th class="py-2 px-4 text-left border-b border-gray-300">Valor Máximo Rede</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b border-gray-300">00000</td>
                            <td class="py-2 px-4 border-b border-gray-300">Estagiário Nível Superior</td>
                            <td class="py-2 px-4 border-b border-gray-300">R$ 0,00</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>

        <div class="flex items-center justify-center w-3/6 mt-8 mb-4">
            <div class="flex flex-col items-center justify-center w-full shadow-lg">

                <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                    <p class="text-white text-lg font-medium">Valor máximo total da Gratificação</p>
                </div>

                <table class="min-w-full text-sm shadow-sm border-gray-300">
                    <thead>
                        <tr class="bg-gray-300">
                            <th class="py-2 px-4 text-left border-b border-gray-300">Matrícula</th>
                            <th class="py-2 px-4 text-left border-b border-gray-300">Função</th>
                            <th class="py-2 px-4 text-left border-b border-gray-300">Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b border-gray-300">00000</td>
                            <td class="py-2 px-4 border-b border-gray-300">Estagiário Nível Superior</td>
                            <td class="py-2 px-4 border-b border-gray-300">R$ 0,00</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

        <div class="w-full flex justify-center items-center border-t-2 mt-4 py-3">
            <p class="font-medium text-xl mt-4">Análise dos Critérios Individuais</p>
        </div>

        <div class="flex flex-col items-center justify-center w-3/6 my-3">

            <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                <p class="text-white text-lg font-medium">Tempo de Atuação Mínimo</p>
            </div>

            <table class="min-w-full text-sm shadow-lg border-gray-300 mb-8">
                <thead>
                    <tr class="bg-gray-300">
                        <th class="py-2 px-4 text-left border-b border-gray-300">Matrícula</th>
                        <th class="py-2 px-4 text-left border-b border-gray-300">Tempo de Atuação</th>
                        <th class="py-2 px-4 text-left border-b border-gray-300">Recebimento da Gratificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="py-2 px-4 border-b border-gray-300">00000</td>
                        <td class="py-2 px-4 border-b border-gray-300">Não atua há mais de 6 meses</td>
                        <td class="py-2 px-4 border-b border-gray-300">Não apto a receber a gratificação</td>
                    </tr>
                </tbody>
            </table>


        </div>

        <div class="flex flex-col items-center justify-center w-full my-0">
            <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                <p class="text-white text-lg font-medium">Frequência</p>
            </div>

            <table class="w-full text-sm shadow-lg border-gray-300 mb-10">
                <thead>
                    <tr class="bg-gray-300">
                        <th class="py-2 px-4 text-left border-b border-gray-300">Matrícula</th>
                        <th class="py-2 px-4 text-left border-b border-gray-300">Nome do colaborador</th>
                        <th class="py-2 px-4 text-left border-b border-gray-300">Dias totais de afastamento</th>
                        <th class="py-2 px-4 text-left border-b border-gray-300">% Frequência</th>
                        <th class="py-2 px-4 text-left border-b border-gray-300">% De recebimento da gratificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="py-2 px-4 border-b border-gray-300">00000</td>
                        <td class="py-2 px-4 border-b border-gray-300">Tom Cock Harris</td>
                        <td class="py-2 px-4 border-b border-gray-300">Não há dados</td>
                        <td class="py-2 px-4 border-b border-gray-300">%</td>
                        <td class="py-2 px-4 border-b border-gray-300">%</td>
                    </tr>
                </tbody>
            </table>

            <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                <p class="text-white text-lg font-medium">Detalhamento do Afastamento</p>
            </div>

            <table class="w-full text-sm shadow-lg border-gray-300 mb-10">
                <thead>
                    <tr class="bg-gray-300">
                        <th class="py-2 px-4 text-left border-b border-gray-300">Matrícula</th>
                        <th class="py-2 px-4 text-left border-b border-gray-300">Nome do colaborador</th>
                        <th class="py-2 px-4 text-left border-b border-gray-300">Motivo</th>
                        <th class="py-2 px-4 text-left border-b border-gray-300">Data Início</th>
                        <th class="py-2 px-4 text-left border-b border-gray-300">Data Fim</th>
                        <th class="py-2 px-4 text-left border-b border-gray-300">Dias Úteis de Afastamento Contabilizados</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="py-2 px-4 border-b border-gray-300">00000</td>
                        <td class="py-2 px-4 border-b border-gray-300">Tom Cock Harris</td>
                        <td class="py-2 px-4 border-b border-gray-300">Não há dados</td>
                        <td class="py-2 px-4 border-b border-gray-300">DD/MM/YYYY</td>
                        <td class="py-2 px-4 border-b border-gray-300">DD/MM/YYYY</td>
                        <td class="py-2 px-4 border-b border-gray-300">00</td>
                    </tr>
                </tbody>
            </table>

            

            <div class="flex w-full flex-row gap-10 items-center justify-center mt-4 mb-8">

                <div class="flex flex-col items-center justify-center w-full shadow-lg">

                    <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                        <p class="text-white text-lg font-medium">Formação</p>
                    </div>

                    <table class="min-w-full text-sm shadow-sm border-gray-300">
                        <thead>
                            <tr class="bg-gray-300">
                                <th class="py-2 px-4 text-left border-b border-gray-300">Matrícula</th>
                                <th class="py-2 px-4 text-left border-b border-gray-300">Nome</th>
                                <th class="py-2 px-4 text-left border-b border-gray-300">Realizou as formações oferecidas?</th>
                                <th class="py-2 px-4 text-left border-b border-gray-300">Recebimento da gratificação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-300">00000</td>
                                <td class="py-2 px-4 border-b border-gray-300">Tom Cock Harris</td>
                                <td class="py-2 px-4 border-b border-gray-300">Estagiário Nível Superior</td>
                                <td class="py-2 px-4 border-b border-gray-300">Apto a receber a gratificação</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="flex flex-col items-center justify-center w-full shadow-lg">

                    <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                        <p class="text-white text-lg font-medium">Atividades</p>
                    </div>

                    <table class="min-w-full text-sm shadow-sm border-gray-300">
                        <thead>
                            <tr class="bg-gray-300">
                                <th class="py-2 px-4 text-left border-b border-gray-300">Matrícula</th>
                                <th class="py-2 px-4 text-left border-b border-gray-300">Nome</th>
                                <th class="py-2 px-4 text-left border-b border-gray-300">Cumpriu com as atividades solicitadas?</th>
                                <th class="py-2 px-4 text-left border-b border-gray-300">Recebimento da gratificação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 px-4 border-b border-gray-300">00000</td>
                                <td class="py-2 px-4 border-b border-gray-300">Tom Cock Harris</td>
                                <td class="py-2 px-4 border-b border-gray-300">Sim</td>
                                <td class="py-2 px-4 border-b border-gray-300">Apto a receber a gratificação</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="w-full flex justify-center items-center border-t-2 mt-4 py-3 mb-3">
                <p class="font-medium text-xl mt-4">Resumo</p>
            </div>  

            <div class="flex flex-col items-center justify-center w-full my-3">

                <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
                    <p class="text-white text-lg font-medium">Valor Final da Gratificação</p>
                </div>

                <table class="min-w-full text-sm shadow-lg border-gray-300 mb-8">
                    <thead>
                        <tr class="bg-gray-300">
                            <th class="py-2 px-4 text-left border-b border-gray-300">Matrícula</th>
                            <th class="py-2 px-4 text-left border-b border-gray-300">Nome</th>
                            <th class="py-2 px-4 text-left border-b border-gray-300">Valor Bruto</th>
                            <th class="py-2 px-4 text-left border-b border-gray-300">Valor de Desconto pelos critérios individuais</th>
                            <th class="py-2 px-4 text-left border-b border-gray-300">Valor a Receber</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-4 border-b border-gray-300">00000</td>
                            <td class="py-2 px-4 border-b border-gray-300">Tom Cock Harris</td>
                            <td class="py-2 px-4 border-b border-gray-300">R$ 0,00</td>
                            <td class="py-2 px-4 border-b border-gray-300">%</td>
                            <td class="py-2 px-4 border-b border-gray-300">R$ 0,00</td>
                        </tr>
                    </tbody>
                </table>


            </div>

            <div class="w-full flex justify-center items-center border-t-2 mt-4 py-3 mb-3">
                <p class="font-medium text-center text-xl mt-4">Dúvidas: Telefone: 3431-3008 / Email: sed.upl@edu.joinville.sc.gov.br <br> Rua Itajaí, 390 - Centro - 89201090</p>
            </div>  

        </div>

    </Whiteboard>
</template>

<script>
import RewardDashboard from '@/components/RewardDashboard/RewardDashboard.vue';

import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';

export default {
    name: "RewardDashboard",
    components: {RewardDashboard, Whiteboard}
}
</script>