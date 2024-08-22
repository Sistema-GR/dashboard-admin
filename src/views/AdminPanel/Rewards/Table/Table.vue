<template>
    <div class="flex flex-col items-center justify-center w-full shadow-lg">
      <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
        <p class="text-white text-lg font-medium">{{ title }}</p>
      </div>
  
      <!-- Container with horizontal scrolling -->
      <div class="overflow-x-auto w-full">
        <table class="min-w-full text-sm shadow-sm border-gray-300">
          <thead>
            <tr class="bg-gray-300">
              <th v-for="(column, index) in columns" :key="index" class="py-2 px-4 text-left border-b border-gray-300">
                {{ column.label }}
              </th>
            </tr>
          </thead>
  
          <tbody>
            <tr v-for="(row, rowIndex) in data" :key="rowIndex">
              <td v-for="(column, colIndex) in columns" :key="colIndex" class="py-2 px-4 border-b border-gray-300">
                {{ row[column.key] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Table",
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
  
  <style scoped>
  /* Ensure the table is responsive with horizontal scrolling on smaller screens */
  @media (max-width: 768px) {
    .table-container {
      overflow-x: auto;
    }
  
    table {
      min-width: 600px; /* Adjust this value as needed for your table */
    }
  }
  </style>
  