<template>

    <button 
        v-bind="$attrs"
        :class="`flex w-full px-2 py-4 text-white rounded-xl font-bold${customColor}`">
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