<template>
  <main :class="`flex flex-col pt-10 overflow-hidden transition-all ${isSidebarMinimized ? 'lg:pl-20' : 'lg:pl-60'}`">
    <div class="px-4 mb-5 sm:px-6 lg:px-8">
      <h3 class="text-lg leading-6 text-black font-semibold">{{ title }}</h3>

      <div :class="`flex flex-col items-center w-full bg-white shadow-md mt-5 rounded-md py-3 px-5 ${customClass}`">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Whiteboard",
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
  }
}
</script>
