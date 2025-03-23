<script setup>
const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const variantClasses = {
  primary: 'bg-[#9DD458] text-white font-semibold hover:bg-[#8AB051] transition-colors',
};



defineOptions({
  name: 'BaseButton'
})
</script>

<template>
  <button :type="props.type" :disabled="props.disabled" :class="`
      px-4 py-2 rounded font-medium transition-all duration-200 cursor-pointer
      ${props.disabled
      ? 'bg-gray-300 cursor-not-allowed'
      : variantClasses[props.variant]
    }
      ${props.className}
    `">
    <slot></slot>
  </button>
</template>
