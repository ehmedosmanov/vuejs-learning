<script setup>
import ProductItem from '@/components/ProductsTable/ProductItem/index.vue'

const { loading, products, error } = defineProps({
    loading: {
        type: Boolean,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    error: {
        type: String,
        required: false,
        default: ''
    }
})

const emit = defineEmits(['updateProductEmit', 'deleteProduct'])

const handleDeleteProduct = (id) => {
    emit('deleteProduct', id)
}

const handleUpdateProduct = (id) => {
    emit('updateProductEmit', id)
}
</script>

<template>
    <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                        Image
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                        Price
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-if="loading">
                    <td class="text-center py-4 text-gray-500">Загрузка...</td>
                </tr>
                <tr v-else-if="error">
                    <td class="text-center py-4 text-red-500">{{ error }}</td>
                </tr>

                <ProductItem v-for="product in products" :key="product.id" :title="product.title" :id="product.id"
                    :price="product.price" @updateProductEvent="handleUpdateProduct"
                    @deleteProduct="handleDeleteProduct" />

            </tbody>
        </table>
    </div>
</template>



<style lang="scss" scoped></style>