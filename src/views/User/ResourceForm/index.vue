<template>
    <Whiteboard title="Formulário de Recurso" :isSidebarMinimized="isSidebarMinimized">

        <div class="flex flex-col w-full px-4">

            <p class="font-medium text-sm text-justify mb-8 mt-4">
                Este formulário destina-se à interposição de recursos por parte dos profissionais vinculados à Secretaria de Educação de Joinville, relacionados à Gratificação por Resultados, conforme estipulado pela Lei nº 9.214/2022 e pelo Decreto Municipal nº 49.309/2022.
                <br><br> 
                O período para submissão de respostas neste formulário é de 17/05/2024 até 16/06/2024, encerrando-se às 23h59 do último dia.
            </p>

            <p class="font-bold text-sm mb-8 text-justify pb-4">
                Observação: Para a efetivação do recurso, é imprescindível anexar documentos que fundamentem e comprovem a justificativa do recurso, bem como as eventuais discrepâncias nos dados utilizados para o cálculo do pagamento.
            </p>

            <div class="flex flex-col space-y-6 border-t-2 py-4">

                <div class="flex items-center border-b-2 py-2 pb-6">
                    <label class="font-semibold w-1/4 text-sm">Nome Completo</label>
                    <span class="text-gray-700 w-3/4 ml-4 text-sm">Tom Cock Harris</span>
                </div>
                
                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4 text-sm">E-mail</label>
                    <span class="text-gray-700 w-3/4 ml-4 text-sm">tom.harris@example.com</span>
                </div>

                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4 text-sm">CPF</label>
                    <span class="text-gray-700 w-3/4 ml-4 text-sm">123.456.789-00</span>
                </div>

                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4 text-sm">Matrícula</label>
                    <select v-model="selectedMatricula" class="border rounded-md p-2 text-sm w-3/4 ml-4">
                        <option disabled value="">Selecione a Matrícula</option>
                        <option v-for="matricula in matriculas" :key="matricula" :value="matricula">
                            {{ matricula }}
                        </option>
                    </select>
                </div>

                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4 text-sm">Unidade de Atuação</label>
                    <select v-model="selectedUnidade" class="border rounded-md p-2 text-sm w-3/4 ml-4">
                        <option disabled value="">Selecione a Unidade</option>
                        <option v-for="unidade in unidades" :key="unidade" :value="unidade">
                            {{ unidade }}
                        </option>
                    </select>
                </div>

                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4 text-sm">Razão do Recurso</label>
                    <div class="w-3/4 ml-4">
                        <button @click="toggleBadgeDropdown" class="flex items-center space-x-2">
                            <Badges :text="selectedBadge" />
                            <ChevronDownIcon class="w-5 h-auto"/>
                        </button>
                        <TransitionRoot :show="isBadgeDropdownOpen" as="div" class="absolute mt-2 w-64 bg-white rounded-md shadow-lg z-10">
                            <TransitionChild
                            as="div"
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            class="max-h-96 overflow-y-auto"
                            >
                            <ul>
                                <li v-for="(badge, index) in badges" :key="index" @click="selectBadge(badge)" class="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 whitespace-nowrap">
                                <Badges :text="badge" />
                                </li>
                            </ul>
                            </TransitionChild>
                        </TransitionRoot>
                    </div>
                </div>

                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4 text-sm">Descrição</label>
                    <div class="w-3/4 ml-4">
                        <textarea v-model="description" class="w-full border rounded-md p-2 text-sm" rows="4" placeholder="Descreva o motivo do recurso aqui..."></textarea>
                    </div>
                </div>

                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4 text-sm">Documentos</label>
                    <div class="w-3/4 ml-4 ">
                        <input type="file" @change="handleFileUpload" multiple class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                    </div>
                </div>

                <div v-if="files.length > 0" class="mt-4">

                    <div class="mb-2">
                        <h3 class="font-semibold text-sm sm:text-base">Arquivos Anexados:</h3>
                    </div>

                    <div class="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                        <div class="flex flex-col w-full gap-3 border-2 border-blue-500 rounded-lg p-1">
                            <div v-for="(file, index) in files" :key="index" class="flex items-center justify-between gap-4 w-full text-sm text-blue-500 cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <PaperClipIcon class="w-5 h-5 text-gray-500"/> 
                                    <span class="underline"> {{ file.name }} </span>
                                </div>
                                <ArrowDownTrayIcon class="w-6 h-6 stroke-gray-700" />
                            </div>
                        </div>
                    </div>

                </div>

                <div class="flex items-center mt-6">
                    <input type="checkbox" id="terms" v-model="termsAccepted" class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out">
                    <label for="terms" class="ml-2 block text-sm leading-5 text-gray-700">
                        Li as informações acima e aceito os termos deste recurso
                    </label>
                </div>

                <div class="flex w-full justify-end">
                    <PrimaryButton
                        customColor="bg-blue-500 text-sm w-6/12 md:w-3/12"
                        value="Enviar"
                    />
                </div>

            </div>
        </div>
    </Whiteboard>
</template>

<script>
import { inject, ref } from 'vue';
import TextInput from '@/components/Inputs/TextInput.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
import FileInput from '@/components/Inputs/FileInput.vue';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import Badges from '@/components/Badges/Badges.vue';
import { ArrowDownTrayIcon, PaperClipIcon, ChevronDownIcon  } from "@heroicons/vue/24/outline";
import { TransitionRoot, TransitionChild } from '@headlessui/vue';

export default {
    name: "ResourceForm",
    components: { Sidebar, Whiteboard, TextInput, FileInput, PrimaryButton, ArrowDownTrayIcon, PaperClipIcon, TransitionRoot, TransitionChild, ChevronDownIcon, Badges },

    setup() {
        const isSidebarMinimized = inject('isSidebarMinimized');
        const files = ref([]);
        const description = ref('');
        const selectedMatricula = ref('');
        const selectedUnidade = ref('');

        const handleFileUpload = (event) => {
            files.value = Array.from(event.target.files);
        };

        return {
            isSidebarMinimized,
            files,
            description,
            selectedMatricula,
            selectedUnidade,
            handleFileUpload
        };
    },
    data() {
      return {
        selectedStatus: 'bg-blue-500', 
        selectedBadge: 'Grupo', 
        isBadgeDropdownOpen: false, 
        badges: [
          "Falta", "Formação", "Impostos", "Mudança de matrícula/Unidade",
          "Carga horária", "Grupo", "Tempo de atuação", "Esclarecimento",
          "Discordância", "Pagamento Indevido", "Local", 
          "Alega atuação em outra etapa", "Atividades", "Mais de um critério"
        ],
        matriculas: ['u00000', 'u00001', 'u00002'],
        unidades: ['Abdon Baptista', 'Aventureiro', 'Boemmewald']
      };
    },
    methods: {
      toggleBadgeDropdown() {
        this.isBadgeDropdownOpen = !this.isBadgeDropdownOpen;
      },
      selectBadge(badge) {
        this.selectedBadge = badge;
        this.isBadgeDropdownOpen = false;
      },
    }
};
</script>
