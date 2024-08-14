<template>
    <Whiteboard title="Resultados IDEM">

        <div class="flex flex-col items-center justify-center py-2">
            <p class="font-semibold text-sm lg:text-lg">Resultado da Rede</p>
        </div>
            
            <div class="flex flex-col items-center justify-between text-start mt-5 gap-x-10 w-full lg:flex-row sm:gap-y-5 px-4 gap-y-5">
                <div class="flex flex-col w-full gap-y-2"> 
                    <p>Etapa 1</p>
                        <TextInput
                        placeholder="%:"
                        v-model="textValue"
                        :error="errorMessage"
                        :success="isSuccess"
                        :info="isInfo"
                        :warning="isWarning"
                        :disabled="true"
                        type="text"
                        />
                </div> 

                <div class="flex flex-col w-full gap-y-2"> 
                    <p>Etapa 1</p>
                        <TextInput
                        placeholder="%:"
                        v-model="textValue"
                        :error="errorMessage"
                        :success="isSuccess"
                        :info="isInfo"
                        :warning="isWarning"
                        :disabled="true"
                        type="text"
                        />
                </div> 

                <div class="flex flex-col w-full gap-y-2"> 
                    <p>Etapa 1</p>
                        <TextInput
                        placeholder="%:"
                        v-model="textValue"
                        :error="errorMessage"
                        :success="isSuccess"
                        :info="isInfo"
                        :warning="isWarning"
                        :disabled="true"
                        type="text"
                        />
                </div> 
            </div>
        
        <PrimaryTable />
    </Whiteboard>
</template>

<script>
import TextInput from '@/components/Inputs/TextInput.vue';
import PrimaryTable from '@/components/Table/PrimaryTable.vue';
import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';

export default {
    name: "Resultados IDEM",
    components: {Whiteboard, PrimaryTable, TextInput}
}
</script>