<template>
  <div class="space-y-2">
    <label class="text-sm font-medium">{{ Label }}</label>
    <input 
      type="file" 
      class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm  
             file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4
             dark:file:bg-blue-500 dark:file:text-white"
    />
  </div>
</template>

<script>
export default {
  name: 'FileInput',
  props: {
    Label: {
      type: String,
      required: true,
      default: 'Upload File'
    },
  }
}
</script>
