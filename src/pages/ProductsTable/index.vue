<script setup>
import TableOfProducts from '@/components/ProductsTable/TableOfProducts/index.vue'
import CreateUpdateModal from '@/components/ProductsTable/CreateUpdateModal/index.vue'
import { ref } from 'vue';
import { useGetProducts } from '@/hooks/useGetProducts';


const { loading, products, error, loadProducts } = useGetProducts()


const openModal = ref(false)
const productId = ref(null)


const toggleModal = () => {
    openModal.value = !openModal.value

}

const sendingId = (id) => {
    openModal.value = true
    productId.value = id
}

const handleDeleteProduct = (id) => {
    products.value = products.value.filter(pr => String(pr.id) !== String(id))
}
</script>

<template>
    <section>
        <div class="wrapper">

            <div class="flex items-center w-full justify-between">
                <SectionTitle title="Products" />
                <BaseButton @click="toggleModal">Create</BaseButton>
            </div>
            <TableOfProducts @deleteProduct="handleDeleteProduct" :error="error" :loading="loading" :products="products" @updateProductEmit="sendingId" />
            <CreateUpdateModal :loadProducts="loadProducts" :products="products" :updateId="productId"
                :openModal="openModal" @closeCrudModal="toggleModal" />
        </div>
    </section>
</template>



<style scoped></style>