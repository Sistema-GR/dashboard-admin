<template>
    <div :class="`flex flex-col w-full items-center justify-center shadow-lg mx-4 my-3 py-4 px-4 rounded-xl border-2 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${customClass}`">

        <div class="flex flex-col items-center justify-center border-b-2 w-full pb-2 mb-2 whitespace-nowrap">
            <p class="text-white text-lg font-semibold">{{ title }}</p>
        </div>

        <div class="flex items-center justify-center">
            <p class="text-white text-3xl font-bold">{{ number }}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "Block",

    props: {
      title: {
        type: String,
        required: true,
        default: 'Default Title'
      },
      number: {
        type: String,
        required: true,
        default: '0'
      },
      customClass: {
        type: String,
        default: ''
      }
    },
}
</script>

