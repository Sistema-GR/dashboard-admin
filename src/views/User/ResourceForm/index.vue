<template>
    <Whiteboard title="Formulário de Recurso">
        <div class="w-full">
            <p class="font-medium text-justify mb-8">
                Este formulário destina-se à interposição de recursos por parte dos profissionais vinculados à Secretaria de Educação de Joinville, relacionados à Gratificação por Resultados, conforme estipulado pela Lei nº 9.214/2022 e pelo Decreto Municipal nº 49.309/2022.
                <br><br> 
                O período para submissão de respostas neste formulário é de 17/05/2024 até 16/06/2024, encerrando-se às 23h59 do último dia.
            </p>
            <p class="font-bold mb-8 text-justify pb-4">
                Observação: Para a efetivação do recurso, é imprescindível anexar documentos que fundamentem e comprovem a justificativa do recurso, bem como as eventuais discrepâncias nos dados utilizados para o cálculo do pagamento.
            </p>

            <div class="flex flex-col space-y-6 border-t-2 py-4">
                <div class="flex items-center border-b-2 py-2 pb-6">
                    <label class="font-semibold w-1/4">Nome Completo</label>
                    <span class="text-gray-700 w-3/4 ml-4">Tom Cock Harris</span>
                </div>
                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4">E-mail</label>
                    <span class="text-gray-700 w-3/4 ml-4">tom.harris@example.com</span>
                </div>
                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4">CPF</label>
                    <span class="text-gray-700 w-3/4 ml-4">123.456.789-00</span>
                </div>
                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4">Matrícula</label>
                    <span class="text-gray-700 w-3/4 ml-4">u00000</span>
                </div>
                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4">Unidade de Atuação</label>
                    <span class="text-gray-700 w-3/4 ml-4">Abdon Baptista</span>
                </div>
                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4">Descrição</label>
                    <div class="w-3/4 ml-4">
                        <TextInput type="text" containerClassName="w-full"></TextInput>
                    </div>
                </div>
                <div class="flex items-center border-b-2 py-0 pb-6">
                    <label class="font-semibold w-1/4">Documentos</label>
                    <div class="w-3/4 ml-4">
                        <FileInput Label=""></FileInput>
                    </div>
                </div>
                <div class="flex justify-end border-b-2 py-0 pb-6">
                    <PrimaryButton
                        customColor="bg-blue-500 py-2 px-3 text-sm"
                        value="Enviar"
                    />
                </div>
            </div>
        </div>
    </Whiteboard>
</template>

<script>
import TextInput from '@/components/Inputs/TextInput.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
import FileInput from '@/components/Inputs/FileInput.vue';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';

export default {
    name: "ResourceForm",
    components: { Sidebar, Whiteboard, TextInput, FileInput, PrimaryButton }
}
</script>