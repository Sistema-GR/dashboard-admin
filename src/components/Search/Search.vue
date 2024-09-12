<template>
  <div class="flex items-center w-full lg:w-3/6">
    <div class="relative w-full">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <MagnifyingGlassIcon class="w-5 h-5 text-gray-500" />
      </div>
      <input
        v-model="searchQuery"
        @input="emitSearch"
        type="text"
        class="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        placeholder="Buscar..."
      />
      <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
        Buscar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline"

const emit = defineEmits(['search'])

const searchQuery = ref('')

const emitSearch = () => {
  emit('search', searchQuery.value)
}
</script>
