<template>
    <div class="flex flex-col items-center justify-center w-full">

        <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-azure-800">
           <p class="text-white text-lg font-medium">{{ title }}</p>
         </div>

        <div class="w-full">

            <div v-for="(row, rowIndex) in data" :key="rowIndex" class="flex flex-col border-b border-gray-300">

              <div v-for="(column, colIndex) in columns" :key="colIndex" class="flex  px-4 bg-solitude-200 gap-3 border-b-2 border-white rounded-lg shadow-xl">
                <div class="font-bold w-3/12 border-r-2 mr-1 py-2 rounded-lg">
                  {{ column.label }}:
                </div>

                <div class="w-full items-center justify-start flex">
                  {{ row[column.key] }}
                </div>
              </div>

            </div>

        </div>
      </div>
</template>

<script>
export default {
  name: "VerticalTable",
  props: {
    title: {
      type: String,
      default: "Table"
    },
    columns: {
      type: Array,
      default: () => [
        { key: 'matricula', label: 'Matrícula' },
        { key: 'unidade', label: 'Unidade' },
        { key: 'funcao', label: 'Função' },
        { key: 'valorMaximo', label: 'Valor Máximo Unidade' }
      ]
    },
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
