<script setup>
import { useBasket } from '@/store/useBasket';


const basketStore = useBasket()

defineOptions({
    name: 'BasketList',
})

</script>

<template>

    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <ProductCard v-for="product in basketStore.basket" :key="product.id" :id="product.id" :imageUrl="product.imageUrl"
                :title="product.title" :price="product.price" />
        </div>
    </div>

</template>



<style lang="scss" scoped></style>