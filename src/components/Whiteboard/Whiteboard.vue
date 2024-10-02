<template>
  <main :class="`flex flex-col pt-10 overflow-hidden transition-all ${isSidebarMinimized ? 'lg:pl-20' : 'lg:pl-60'}`">
    <div class="px-4 mb-5 sm:px-6 lg:px-8">
      <div class="flex flex-row gap-8 items-center">
        <h3 class="text-lg leading-6 text-black font-semibold">{{ title }}</h3>
        <Breadcrumbs :pages="breadcrumbPages" />
      </div>
      <div :class="`flex flex-col items-center w-full bg-white shadow-md mt-5 rounded-md py-3 px-5 ${customClass}`">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<script>
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

export default {
  name: "Whiteboard",
  components: { Breadcrumbs },
  props: {
    title: {
      type: String,
      required: true,
      default: 'default Title'
    },
    isSidebarMinimized: {
      type: Boolean,
      required: true
    },
    customClass: {
      type: String,
      default: 'custom-whiteboard'
    }
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const breadcrumbPages = ref([{ name: 'Home', href: '/home/overview', current: false }]); // Inicializa com a rota Home

    // Função para atualizar os breadcrumbs
    const updateBreadcrumbs = () => {
      // Limpa as páginas, mantendo a página inicial
      breadcrumbPages.value = [{ name: 'Home', href: '/home/overview', current: false }];
      
      // Divide o caminho da rota atual em segmentos
      const segments = route.path.split('/').filter(segment => segment); // Remove segmentos vazios

      let currentPath = '';
      
      // Adiciona cada segmento como uma página nos breadcrumbs
      segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        breadcrumbPages.value.push({
          name: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitaliza o primeiro caractere
          href: currentPath,
          current: index === segments.length - 1 // Marca como atual se for o último segmento
        });
      });
    };

    // Chama a função de atualização ao carregar a rota inicial
    updateBreadcrumbs();

    // Observa mudanças na rota atual e atualiza os breadcrumbs
    watch(route, updateBreadcrumbs);

    return {
      breadcrumbPages
    };
  },
}
</script>
