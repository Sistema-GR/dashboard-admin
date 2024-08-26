import { ref } from 'vue';

const isSidebarMinimized = ref(false);

function toggleSidebar() {
  isSidebarMinimized.value = !isSidebarMinimized.value;
}

export function useSidebar() {
  return {
    isSidebarMinimized,
    toggleSidebar
  };
}
