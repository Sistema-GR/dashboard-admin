<template>
    <span :class="badgeClass">

      <svg :class="svgClass" viewBox="0 0 6 6" aria-hidden="true">
        <circle cx="3" cy="3" r="3" />
      </svg>

      {{ text }}

    </span>
  </template>
  
  <script>
  export default {
    name: "Badge",
    props: {
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      badgeClass() {
        switch (this.text) {
          case "Falta":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600";

          case "Formação":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700";

          case "Impostos":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800";

          case "Mudança de matrícula/Unidade":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700";

          case "Carga horária":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700";

          case "Grupo":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700";

          case "Tempo de atuação":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700";

          case "Esclarecimento":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700";

          case "Discordância":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600";

          case "Pagamento Indevido":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700";

          case "Local":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800";

          case "Alega atuação em outra etapa":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700";

          case "Atividades":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700";

          case "Mais de um critério":
            return "inline-flex items-center gap-x-1.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700";

          default:
            return "inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600";
        }
      },
      svgClass() {
        switch (this.text) {
          case "Falta":
          case "Discordância":
            return "h-1.5 w-1.5 fill-gray-400";

          case "Formação":
          case "Pagamento Indevido":
            return "h-1.5 w-1.5 fill-red-500";

          case "Impostos":
          case "Local":
            return "h-1.5 w-1.5 fill-yellow-500";

          case "Mudança de matrícula/Unidade":
          case "Alega atuação em outra etapa":
            return "h-1.5 w-1.5 fill-green-500";

          case "Carga horária":
          case "Atividades":
            return "h-1.5 w-1.5 fill-blue-500";

          case "Grupo":
          case "Mais de um critério":
            return "h-1.5 w-1.5 fill-indigo-500";

          case "Tempo de atuação":
          case "Esclarecimento":
            return "h-1.5 w-1.5 fill-purple-500";

          case "Mais de um critério":
            return "h-1.5 w-1.5 fill-pink-500";
            
          default:
            return "h-1.5 w-1.5 fill-gray-400";
        }
      }
    }
  };
  </script>
  