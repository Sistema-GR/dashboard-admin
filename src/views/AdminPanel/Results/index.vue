<template>
    <Whiteboard title="Resultados IDEM" :isSidebarMinimized="isSidebarMinimized">

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
            
            <div class="flex w-full items-center justify-start px-4 mt-8">
                <Search />
            </div>
            
            <div class="w-full pb-5">
                <PrimaryTable :route="'Results'" />
                <Pagination />
            </div> 
           
    </Whiteboard>
</template>

<script>
import TextInput from '@/components/Inputs/TextInput.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import Search from '@/components/Search/Search.vue';
import PrimaryTable from '@/components/Table/PrimaryTable.vue';
import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
import { inject } from 'vue'

export default {
    name: "Resultados IDEM",
    components: {Whiteboard, PrimaryTable, TextInput, Search, Pagination},
    setup() {
    const isSidebarMinimized = inject('isSidebarMinimized')

    return {
      isSidebarMinimized
    }
  }
}
</script>