<script setup>
import SectionTitle from '@/components/UI/SectionTitle/index.vue'
import ProductCard from '@/components/UI/ProductCard/index.vue'
import { useGetProducts } from '@/hooks/useGetProducts';
import Filters from '../Filters/index.vue'
import { computed, ref } from 'vue';

const { products, loading, error } = useGetProducts()


const searchValue = ref('')
const selectedOption = ref('a-z')

const searchProducts = computed(() => {
    let filtered = products.value.filter(item => item.title.toLowerCase().includes(searchValue.value.toLowerCase()))

    switch (selectedOption.value) {
        case 'a-z':
            filtered.sort((a, b) => a.title.localeCompare(b.title))
            break
        case 'z-a':
            filtered.sort((a, b) => b.title.localeCompare(a.title))
            break
        case 'low-high':
            filtered.sort((a, b) => a.price - b.price)
            break
        case 'high-low':
            filtered.sort((a, b) => b.price - a.price)
            break
    }
    return filtered
})





</script>

<template>
    <section>
        <div class="wrapper">
            <SectionTitle title="Все товары" />
            <Filters v-model:selectedOption="selectedOption" v-model:searchValue="searchValue" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div v-if="loading">...Loading</div>
                <div v-else-if="error">{{ error }}</div>
                <div v-else-if="searchProducts.length === 0" class="col-span-full text-center text-gray-500 py-4">
                    Ничего не найдено 😢
                </div>
                <ProductCard v-else v-for="product in searchProducts" :key="product.id" :id="product.id"
                    :imageUrl="product.imageUrl" :title="product.title" :price="product.price" />
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped></style>