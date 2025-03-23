<script setup>

const modelValue = defineModel()

const props = defineProps({
    options: {
        type: Array,
        default: [],
        required: true
    },
    className: {
        type: String,
        default: ''
    }
})

const handleChange = (event) => {
    modelValue.value = event.target.value
}

defineOptions({
    name: 'BaseSelect',
});
</script>


<template>
    <select id="sort" :value="modelValue" @change="handleChange" :class="className"
        class="block w-full rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm appearance-none border shadow-sm">
        <option v-for="optionItem in props.options" :value="optionItem.value">
            {{ optionItem.text }}
        </option>
    </select>
</template>

<style scoped></style>