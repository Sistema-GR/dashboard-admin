<template>
  <main :class="`flex flex-col overflow-hidden transition-all ${isSidebarMinimized ? 'lg:pl-20' : 'lg:pl-60'}`">
    <div class="px-4 mb-5 sm:px-6 lg:px-8">
      <Breadcrumbs class="flex w-full pt-4" v-if="showBreadcrumbs" :pages="breadcrumbPages" />
      <div class="flex flex-row gap-8 pt-6 items-center">
        <h3 class="text-lg leading-6 text-black font-semibold">{{ title }}</h3>
       
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
    const breadcrumbPages = ref([{ name: 'Home', href: '/home/overview', current: false }]); // Página inicial
    const showBreadcrumbs = ref(true); // Estado para controlar a exibição dos breadcrumbs

    // Função para atualizar os breadcrumbs
    const updateBreadcrumbs = () => {
      const segments = route.path.split('/').filter(segment => segment); // Remove segmentos vazios
      const newBreadcrumbs = [{ name: 'Home', href: '/home/overview', current: false }]; // Reseta com Home

      let currentPath = '';

      // Adiciona cada segmento como uma página nos breadcrumbs
      segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        newBreadcrumbs.push({
          name: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitaliza o primeiro caractere
          href: currentPath,
          current: index === segments.length - 1 // Marca como atual se for o último segmento
        });
      });

      breadcrumbPages.value = newBreadcrumbs; // Atualiza breadcrumbs
      showBreadcrumbs.value = shouldShowBreadcrumbs(); // Atualiza a visibilidade dos breadcrumbs
    };

    // Função para determinar se os breadcrumbs devem ser exibidos com base na rota
    const shouldShowBreadcrumbs = () => {
      const hiddenRoutes = ['/user/rewards', '/admin/rewards']; // Adicione suas rotas aqui
      return !hiddenRoutes.includes(route.path);
    };

    // Chama a função de atualização ao carregar a rota inicial
    updateBreadcrumbs();

    // Observa mudanças na rota e atualiza os breadcrumbs
    watch(route, updateBreadcrumbs);

    return {
      breadcrumbPages,
      showBreadcrumbs
    };
  },
}
</script>
