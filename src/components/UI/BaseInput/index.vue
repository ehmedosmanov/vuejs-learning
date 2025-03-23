<script setup>
const modelValue = defineModel();

const props = defineProps({
    placeholder: {
        type: String,
        default: 'Type something...',
    },
    className: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text',
    },
});

const updateValue = (event) => {
    modelValue.value = event.target.value;
};

defineOptions({
    name: 'BaseInput',
});
</script>

<template>
    <input :class="className" :value="modelValue" :type="type" :placeholder="placeholder" @input="updateValue" />
</template>

<style scoped>
input:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 1px #4f46e5;
}
</style>
