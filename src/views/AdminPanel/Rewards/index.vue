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

                                <table class="w-full border-collapse border">
                                    <thead>
                                        <tr class="bg-azure-800">
                                            <th class="border p-2 font-semibold text-white">Descrição</th>
                                            <th class="border p-2 font-semibold text-white">Valores a Receber</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border p-2">
                                                <div class="flex flex-col">
                                                    <div class="flex flex-row gap-2">
                                                        <span class="font-semibold">Nome:</span>
                                                        <span>SUSANA RIBEIRO BERNARDO</span>
                                                    </div>
                                                    <div class="flex flex-row gap-2">
                                                        <span class="font-semibold">Matrícula:</span>
                                                        <span>56968</span>
                                                    </div>
                                                    <div class="flex flex-row gap-2">
                                                        <span class="font-semibold">Cargo:</span>
                                                        <span>PROFESSOR 6-9 ANO ENSINO FUNDAMENTAL CIÊNCIAS</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="border p-2">
                                                <div class="flex flex-col">
                                                    <div class="flex justify-between">
                                                        <span class="font-semibold">Rede:</span>
                                                        <span>R$0,00</span>
                                                    </div>
                                                    <div class="flex justify-between">
                                                        <span class="font-semibold">Unidades:</span>
                                                        <span>R$0,00</span>
                                                    </div>
                                                    <div class="flex justify-between">
                                                        <span class="font-semibold">Total:</span>
                                                        <span>R$0,00</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

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

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center py-3 bg-azure-800">
                                        <p class="text-xl font-medium text-white">Alocações em 2024</p>
                                    </div>
                                    <table class="min-w-full border-collapse border border-gray-200">
                                        <thead>
                                            <tr>
                                                <th class="border border-gray-200 px-4 py-2 w-6/12 text-lg" colspan="3">EM Dom Jaime De Barros Camara</th>
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
                                            <tr>
                                                <td class="border border-gray-200 px-4 py-2">01/02/2023</td>
                                                <td class="border border-gray-200 px-4 py-2">02/05/2023</td>
                                                <td class="border border-gray-200 px-4 py-2">Professor - CORREÇÃO DE FLUXO</td>
                                                <td class="border border-gray-200 px-4 py-2">60:00:00</td>
                                                <td class="border border-gray-200 px-4 py-2">Etapa 3</td>
                                                <td class="border border-gray-200 px-4 py-2">Grupo I</td>
                                            </tr>
                                            <tr>
                                                <td class="border border-gray-200 px-4 py-2">03/05/2023</td>
                                                <td class="border border-gray-200 px-4 py-2">12/07/2023</td>
                                                <td class="border border-gray-200 px-4 py-2">Professor - CIÊNCIAS</td>
                                                <td class="border border-gray-200 px-4 py-2">04:00:00</td>
                                                <td class="border border-gray-200 px-4 py-2">Etapa 3</td>
                                                <td class="border border-gray-200 px-4 py-2">Grupo I</td>
                                            </tr>
                                            <tr>
                                                <td class="border border-gray-200 px-4 py-2">05/05/2023</td>
                                                <td class="border border-gray-200 px-4 py-2">12/07/2023</td>
                                                <td class="border border-gray-200 px-4 py-2">Professor - CORREÇÃO DE FLUXO</td>
                                                <td class="border border-gray-200 px-4 py-2">15:00:00</td>
                                                <td class="border border-gray-200 px-4 py-2">Etapa 3</td>
                                                <td class="border border-gray-200 px-4 py-2">Grupo I</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center py-3 bg-azure-800">
                                        <p class="text-xl font-medium text-white">Alocações em 2024</p>
                                    </div>
                                    <table class="min-w-full border-collapse border border-gray-200">
                                        <thead>
                                            <tr>
                                                <th class="border border-gray-200 px-4 py-2 w-6/12 text-lg" colspan="3">EM Prof Ada S Da Silveira</th>
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
                                            <tr>
                                                <td class="border border-gray-200 px-4 py-2">01/02/2023</td>
                                                <td class="border border-gray-200 px-4 py-2">02/05/2023</td>
                                                <td class="border border-gray-200 px-4 py-2">Professor - CIÊNCIAS</td>
                                                <td class="border border-gray-200 px-4 py-2">180:00:00</td>
                                                <td class="border border-gray-200 px-4 py-2">Etapa 3</td>
                                                <td class="border border-gray-200 px-4 py-2">Grupo I</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center py-3 bg-azure-800">
                                        <p class="text-xl font-medium text-white">Alocações em 2024</p>
                                    </div>
                                    <table class="min-w-full border-collapse border border-gray-200">
                                        <thead>
                                            <tr>
                                                <th class="border border-gray-200 px-4 py-2 w-6/12 text-lg" colspan="3">EM Dom Jaime De Barros Camara</th>
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
                                            <tr>
                                                <td class="border border-gray-200 px-4 py-2">12/09/2022</td>
                                                <td class="border border-gray-200 px-4 py-2">31/01/2023</td>
                                                <td class="border border-gray-200 px-4 py-2">Professor - CIÊNCIAS</td>
                                                <td class="border border-gray-200 px-4 py-2">55:00:00</td>
                                                <td class="border border-gray-200 px-4 py-2">Etapa 3</td>
                                                <td class="border border-gray-200 px-4 py-2">Grupo I</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center py-3 bg-azure-800">
                                        <p class="text-xl font-medium text-white">Alocações em 2024</p>
                                    </div>
                                    <table class="min-w-full border-collapse border border-gray-200">
                                        <thead>
                                            <tr>
                                                <th class="border border-gray-200 px-4 py-2 w-6/12 text-lg" colspan="3">EM Dom Jaime De Barros Camara</th>
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
                                            <tr>
                                                <td class="border border-gray-200 px-4 py-2">13/07/2023</td>
                                                <td class="border border-gray-200 px-4 py-2">08/08/2023</td>
                                                <td class="border border-gray-200 px-4 py-2">Professor - CIÊNCIAS</td>
                                                <td class="border border-gray-200 px-4 py-2">220:00:00</td>
                                                <td class="border border-gray-200 px-4 py-2">Rede</td>
                                                <td class="border border-gray-200 px-4 py-2">Grupo I</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center bg-azure-800 py-3">
                                        <p class="text-xl font-medium text-white">Critério de Frequência (Afastamentos)</p>
                                    </div>
                                    
                                    <div class="flex w-full items-center justify-center border">
                                        <div class="flex w-full items-center justify-center border-r py-2">
                                            <p class="text-xl font-semibold">90,82%</p>
                                        </div>
                                        <div class="flex w-full items-center justify-center">
                                            <p class="text-xl font-semibold">Não atingiu</p>
                                        </div>
                                    </div>

                                    <table class="min-w-full border-collapse border">
                                        <thead>
                                            <tr class="">
                                                <th class="border border-gray-200 px-4 py-2">Início</th>
                                                <th class="border border-gray-200 px-4 py-2">Fim</th>
                                                <th class="border border-gray-200 px-4 py-2">Tipo de Afastamento</th>
                                                <th class="border border-gray-200 px-4 py-2">Total Dias</th>
                                                <th class="border border-gray-200 px-4 py-2">Contabilizados</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="border border-gray-200 px-4 py-2">01/01/2024</td>
                                                <td class="border border-gray-200 px-4 py-2">10/01/2024</td>
                                                <td class="border border-gray-200 px-4 py-2">Afastamento Médico</td>
                                                <td class="border border-gray-200 px-4 py-2">10</td>
                                                <td class="border border-gray-200 px-4 py-2">10</td>
                                            </tr>
                                            <tr>
                                                <td class="border border-gray-200 px-4 py-2">15/01/2024</td>
                                                <td class="border border-gray-200 px-4 py-2">20/01/2024</td>
                                                <td class="border border-gray-200 px-4 py-2">Licença</td>
                                                <td class="border border-gray-200 px-4 py-2">5</td>
                                                <td class="border border-gray-200 px-4 py-2">5</td>
                                            </tr>
                                            <tr>
                                                <td class="border border-gray-200 px-4 py-2">25/01/2024</td>
                                                <td class="border border-gray-200 px-4 py-2">30/01/2024</td>
                                                <td class="border border-gray-200 px-4 py-2">Férias</td>
                                                <td class="border border-gray-200 px-4 py-2">5</td>
                                                <td class="border border-gray-200 px-4 py-2">5</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
import Table from './Table/Table.vue';
import DetailsDrawer from './DetailsDrawer/DetailsDrawer.vue';

const isSidebarMinimized = inject('isSidebarMinimized');

const detailsDrawer = ref(null); 

function openDrawer() {
  if (detailsDrawer.value) {
    detailsDrawer.value.openDrawer();
  }
}


</script>

