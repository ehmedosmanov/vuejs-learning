<script setup>
const { id, title, price } = defineProps({
    id: [Number, String],
    title: String,
    price: Number
})

const emit = defineEmits(['deleteProduct', 'updateProductEvent']) 
</script>

<template>
    <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="h-16 w-16 rounded-md bg-gray-200 flex items-center justify-center">
                <svg class="h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </td>
        <td class="px-6 py-4">
            <div class="text-sm font-medium text-gray-900">{{ title }}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-gray-900">{{ price }}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <div class="flex space-x-2">
                <BaseButton @click="$emit('updateProductEvent', id)"
                    class="inline-flex bg-black items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 hover:bg-black">
                    Edit
                </BaseButton>
                <BaseButton @click="$emit('deleteProduct', id)"
                    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700">
                    Delete
                </BaseButton>
            </div>
        </td>
    </tr>
</template>



<style lang="scss" scoped></style>