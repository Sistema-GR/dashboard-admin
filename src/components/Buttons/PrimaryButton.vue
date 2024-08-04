<template>
  <button
      :class="`px-2 py-4 text-white bg-lw-tasks-500 hover:bg-lw-tasks-900 rounded-xl font-bold w-full ${customColor}`"
      v-bind="$attrs"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  inheritAttrs: false,
  props: {
    customColor: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>