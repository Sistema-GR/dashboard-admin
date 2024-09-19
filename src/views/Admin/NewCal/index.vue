<template>

    <Whiteboard title="Novo Cálculo" :isSidebarMinimized="isSidebarMinimized">

        <div class="flex flex-col w-full lg:flex-row">
          
            <div class="flex-1 flex items-center justify-center my-36">

                <div class="text-start space-y-5 w-4/6">

                    <div class="space-y-2">

                        <p>Selecione o Ano</p>
                        <TextInput
                        v-model="textValue"
                        :error="errorMessage"
                        :success="isSuccess"
                        :info="isInfo"
                        :warning="isWarning"
                        :disabled="isDisabled"
                        type="date"
                      />

                    </div>

                    <div class="space-y-2">

                        <p>Selecione a Data Inícial a considerar</p>
                        <TextInput
                        v-model="textValue"
                        :error="errorMessage"
                        :success="isSuccess"
                        :info="isInfo"
                        :warning="isWarning"
                        :disabled="isDisabled"
                        type="date"
                      />

                    </div>

                    <div class="space-y-2">

                        <p>Selecione a Data Final a considerar</p>
                        <TextInput
                        v-model="textValue"
                        :error="errorMessage"
                        :success="isSuccess"
                        :info="isInfo"
                        :warning="isWarning"
                        :disabled="isDisabled"
                        type="date"
                    />
                    
                    </div>

                </div>

            </div>

          <div class="border lg:py-5 my-5"></div>
          
          <div class="flex-1 flex items-center justify-center my-36">

              <div class="text-start space-y-5 w-4/6">

                  <div class="space-y-2">
                    <p>Valor Global</p>
                        <TextInput
                        placeholder="R$:"
                        v-model="textValue"
                        :error="errorMessage"
                        :success="isSuccess"
                        :info="isInfo"
                        :warning="isWarning"
                        :disabled="isDisabled"
                        type="text"
                      />
                  </div>

              </div>

          </div>

        </div>

        <div class="flex w-full items-end justify-end">

            <div>
                <RouterLink to="/home/inports">
                  <PrimaryButton
                    class="bg-blue-500 py-2 px-3 text-sm"
                    value="Continuar"
                    @click="handleClick"
                  />
                </RouterLink>
            </div>

        </div>

    </Whiteboard>

</template>

<script>
import { inject } from 'vue'
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import TextInput from "@/components/Inputs/TextInput.vue";
import Whiteboard from "@/components/Whiteboard/Whiteboard.vue";
  
 export default {
    name: "NewCal",
    components: {TextInput, Whiteboard, PrimaryButton },


    setup() {
    const isSidebarMinimized = inject('isSidebarMinimized')

    return {
      isSidebarMinimized
    }
  }
}
</script>
