<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})

defineOptions({
    name: 'SectionTitle'
})
</script>

<template>
    <div class="py-[30px]">
        <h2 class=" font-bold text-[32px]">{{ title }}</h2>
    </div>
</template>


<style scoped></style>