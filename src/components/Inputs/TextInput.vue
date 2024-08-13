<template>
  <div
      :class="`flex flex-col justify-center w-full gap-2 ${this.$props.containerClassName}`"
  >
    <label for="text-input" class="text-amber-50" v-if="label">{{ label }}</label>

    <div
        role="input-container"
        :class="`
      ${this.$props.disabled ? disabledClass : enabledClass}
      flex flex-row items-center justify-between bg-white space-x-2 px-2 py-3 w-full rounded-lg border border-lw-neutral-cold-100 focus-within:ring-lw-tasks-500 focus-within:ring-2 focus-within:border-none
      ${error ? 'border-2 border-red-600' : ''}
      ${success ? 'border-2 border-green-600' : ''}
      ${info ? 'border-2 border-blue-600' : ''}
      ${warning ? 'border-2 border-yellow-400' : ''}
      `"
    >
      <input
          :id="value + type"
          :disabled="disabled"
          :placeholder="placeholder"
          :type="type"
          v-model="value"
          v-bind="$attrs"
          class="bg-transparent appearance-none h-full border-none outline-none w-full"
          @input="updateInput"
      />
    </div>
    <div
        :class="`${
        error
          ? 'text-sm font-medium text-label text-lw-health-600 truncate'
          : 'hidden'
      }`"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    containerClassName: {
      type: String,
    },
    error: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: { type: String, required: true },
    success: Boolean,
    info: Boolean,
    warning: Boolean,
    disabledClass: "bg-gray-200 border-none",
    enabledClass: "bg-lw-neutral-cold-50 hover:bg-lw-neutral-warm-50",
  },
  methods() {
    const emit = defineEmits(["update:value"]);
    const updateInput = ($event) => {
      emit("update:value", $event.target.value);
    };
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>