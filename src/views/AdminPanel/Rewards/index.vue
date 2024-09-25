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

                                <div class="flex w-full items-center justify-between border">

                                    <div class="flex flex-col w-1/3 space-y-2 border">
                                        <p class="invisible">.</p> 
                                        <p class="font-semibold">Nome</p>
                                        <p class="font-semibold">Matrícula</p>
                                        <p class="font-semibold">Cargo</p>
                                    </div>

                                    <div class="flex flex-col w-1/3 space-y-2 border">
                                        <p class="invisible">.</p>
                                        <p>SUSANA RIBEIRO BERNARDO</p>
                                        <p>56968</p>
                                        <p>PROFESSOR 6-9 ANO ENSINO FUNDAMENTAL CIÊNCIAS</p>
                                    </div>

                                    <div class="flex flex-col w-1/3 items-end space-y-2 border">
                                        <p class="font-semibold">Valores a Receber</p>
                                        <div class="flex flex-row space-x-4">
                                            <div class="flex flex-col items-end space-y-2">
                                                <p class="font-semibold">Rede</p>
                                                <p class="font-semibold">Unidades</p>
                                                <p class="font-semibold">Total</p>
                                            </div>
                                            <div class="flex flex-col items-end space-y-2">
                                                <p>R$0,00</p>
                                                <p>R$0,00</p>
                                                <p>R$0,00</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center">
                                        <p>Tempo de Atuação</p>
                                    </div>
                                    <div class="flex w-full items-center justify-center">
                                        <p>Não atingiu o mínimo necessário</p>
                                    </div>
                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center">
                                        <p>Formação (Frequência)</p>
                                    </div>
                                    <div class="flex w-full items-center justify-center">
                                        <p>Não atingiu o mínimo necessário</p>
                                    </div>
                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center">
                                        <p>Atividades</p>
                                    </div>
                                    <div class="flex w-full items-center justify-center">
                                        <p>Não atingiu o mínimo necessário</p>
                                    </div>
                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center">
                                        <p>Alocações em 2024</p>
                                    </div>
                                    <div class="flex w-full items-center justify-between">
                                        <div class="w-6/12 border-r">
                                            <p>EM Dom Jaime De Barros Camara</p>
                                        </div>
                                        <div class="w-2/12 border-r">
                                            <p>Etapa 1 80%</p>
                                        </div>
                                        <div class="w-2/12 border-r">
                                            <p>Etapa 2 0%</p>
                                        </div>
                                        <div class="w-2/12">
                                            <p>Etapa 3 100%</p>
                                        </div>
                                    </div>

                                    <div class="flex w-full justify-center">
                                        <div class="flex flex-row w-6/12">
                                            <div class="flex flex-col items-start w-full">
                                                <p>Início</p>
                                                <p>01/02/2023</p>
                                                <p>03/05/2023</p>
                                                <p>05/05/2023</p>
                                            </div>
                                            <div class="flex flex-col items-start w-full">
                                                <p>Fim</p>
                                                <p>02/05/2023</p>
                                                <p>12/07/2023</p>
                                                <p>12/07/2023</p>
                                            </div>
                                            <div class="flex flex-col items-start w-full">
                                                <p>Função</p>
                                                <p>Professor - CORREÇÃO DE FLUXO</p>
                                                <p>Professor - CIÊNCIAS</p>
                                                <p>Professor - CORREÇÃO DE FLUXO</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Carga Horário</p>
                                            <p>60:00:00.00</p>
                                            <p>04:00:00</p>
                                            <p>15:00:00</p>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Etapa</p>
                                            <p>Etapa 3</p>
                                            <p>Etapa 3</p>
                                            <p>Etapa 3</p>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Grupo</p>
                                            <p>Grupo I</p>
                                            <p>Grupo I</p>
                                            <p>Grupo I</p>
                                        </div>
                                    </div>

                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center">
                                        <p>Alocações em 2024</p>
                                    </div>
                                    <div class="flex w-full items-center justify-between">
                                        <div class="w-6/12 border-r">
                                            <p>EM Prof Ada S Da Silveira</p>
                                        </div>
                                        <div class="w-2/12 border-r">
                                            <p>Etapa 1 80%</p>
                                        </div>
                                        <div class="w-2/12 border-r">
                                            <p>Etapa 2 0%</p>
                                        </div>
                                        <div class="w-2/12">
                                            <p>Etapa 3 100%</p>
                                        </div>
                                    </div>

                                    <div class="flex w-full justify-center">
                                        <div class="flex flex-row w-6/12">
                                            <div class="flex flex-col items-start w-full">
                                                <p>Início</p>
                                                <p>01/02/2023</p>
                                                <p>03/05/2023</p>
                                                <p>05/05/2023</p>
                                            </div>
                                            <div class="flex flex-col items-start w-full">
                                                <p>Fim</p>
                                                <p>02/05/2023</p>
                                                <p>12/07/2023</p>
                                                <p>12/07/2023</p>
                                            </div>
                                            <div class="flex flex-col items-start w-full">
                                                <p>Função</p>
                                                <p>Professor - CORREÇÃO DE FLUXO</p>

                                            </div>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Carga Horário</p>
                                            <p>60:00:00.00</p>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Etapa</p>
                                            <p>Etapa 3</p>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Grupo</p>
                                            <p>Grupo I</p>
                                        </div>
                                    </div>

                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center">
                                        <p>Alocações em 2024</p>
                                    </div>
                                    <div class="flex w-full items-center justify-between">
                                        <div class="w-6/12 border-r">
                                            <p>Caic Prof Mariano Costa</p>
                                        </div>
                                        <div class="w-2/12 border-r">
                                            <p>Etapa 1 80%</p>
                                        </div>
                                        <div class="w-2/12 border-r">
                                            <p>Etapa 2 0%</p>
                                        </div>
                                        <div class="w-2/12">
                                            <p>Etapa 3 100%</p>
                                        </div>
                                    </div>

                                    <div class="flex w-full justify-center">
                                        <div class="flex flex-row w-6/12">
                                            <div class="flex flex-col items-start w-full">
                                                <p>Início</p>
                                                <p>12/09/2022</p>
                                            </div>
                                            <div class="flex flex-col items-start w-full">
                                                <p>Fim</p>
                                                <p>31/01/2023</p>
                                            </div>
                                            <div class="flex flex-col items-start w-full">
                                                <p>Função</p>
                                                <p>Professor - CIÊNCIAS</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Carga Horário</p>
                                            <p>55:00:00.00</p>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Etapa</p>
                                            <p>Etapa 3</p>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Grupo</p>
                                            <p>Grupo I</p>
                                        </div>
                                    </div>

                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center">
                                        <p>Alocações em 2024</p>
                                    </div>
                                    <div class="flex w-full items-center justify-between">
                                        <div class="w-6/12 border-r">
                                            <p>Escola Municipal de Jovens e Adultos</p>
                                        </div>
                                        <div class="w-2/12 border-r">
                                            <p>Etapa 1 80%</p>
                                        </div>
                                        <div class="w-2/12 border-r">
                                            <p>Etapa 2 0%</p>
                                        </div>
                                        <div class="w-2/12">
                                            <p>Etapa 3 100%</p>
                                        </div>
                                    </div>

                                    <div class="flex w-full justify-center">
                                        <div class="flex flex-row w-6/12">
                                            <div class="flex flex-col items-start w-full">
                                                <p>Início</p>
                                                <p>13/07/2023</p>
                                            </div>
                                            <div class="flex flex-col items-start w-full">
                                                <p>Fim</p>
                                                <p>08/08/2023</p>
                                            </div>
                                            <div class="flex flex-col items-start w-full">
                                                <p>Função</p>
                                                <p>Professor - CIÊNCIAS</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Carga Horário</p>
                                            <p>220:00:00.000</p>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Etapa</p>
                                            <p>Rede</p>
                                        </div>
                                        <div class="flex flex-col w-2/12 border-r">
                                            <p>Grupo</p>
                                            <p>Grupo IV</p>
                                        </div>
                                    </div>

                                </div>

                                <div class="flex flex-col w-full items-center border -translate-y-0.5">
                                    <div class="flex w-full border-b items-center justify-center">
                                        <p>Criterio de Frequência (Afastamentos)</p>
                                    </div>
                                    <div class="flex w-full items-center border-b">
                                        <div class="flex w-full items-center justify-center">
                                            <p>90,82%</p>
                                        </div>
                                        <div class="flex w-full items-center justify-center">
                                            <p>Não atingiu</p>
                                        </div>
                                    </div>

                                    <div class="flex flex-row w-full items-center justify-center">
                                        <div class="flex flex-col w-full items-center justify-center">
                                            <p>Início</p>
                                        </div>
                                        <div class="flex flex-col w-full items-center justify-center">
                                            <p>Fim</p>
                                        </div>
                                        <div class="flex flex-col w-full items-center justify-center">
                                            <p>Tipo de afastamento</p>
                                        </div>
                                        <div class="flex flex-col w-full items-center justify-center">
                                            <p>Total Dias</p>
                                        </div>
                                        <div class="flex flex-col w-full items-center justify-center">
                                            <p>Contabilizados</p>
                                        </div>
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

