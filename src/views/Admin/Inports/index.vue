<template>
    <Whiteboard title="Inports">
        <div class="w-full space-y-10">
            <FileInput Label="Importar Arquivo com Nome Senior.csv" />
            <FileInput Label="Importar Arquivo com Nome Evn.csv" />
            <FileInput Label="Importar Arquivo com Nome Grupos.csv" />
            <FileInput Label="Importar Arquivo com Nome Grupos.csv" />
        </div>
        <div class="flex w-full items-end justify-end mt-8">
            <div>
              <RouterLink to="/admin/results">
              <PrimaryButton
              customColor="bg-blue-500 py-2 px-3 text-sm "
              value="Continuar"
             />
          </RouterLink>
        </div>
      </div>
    </Whiteboard>
</template>

<script>
import FileInput from '@/components/Inputs/FileInput.vue';
import Whiteboard from "@/components/Whiteboard/Whiteboard.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";

export default{
    name:"Inports",
    components: {FileInput, Whiteboard, PrimaryButton}
}
</script>