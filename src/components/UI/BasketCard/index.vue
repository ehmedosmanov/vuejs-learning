<script setup>
import { Minus, Plus, X } from 'lucide-vue-next';
import { useBasket } from '@/store/useBasket';

const props = defineProps({
    basketProduct: Object
})
const basketStore = useBasket()


defineOptions({
  name: 'BasketCard'
})
</script>

<template>
    <div :key="props.basketProduct.id"
        class="rounded-[20px] p-[16px] border border-[#F3F3F3] flex items-center gap-4 relative bg-white">
        <div class="w-[60px] h-[60px] flex-shrink-0 rounded-[10px] overflow-hidden">
            <img src="../../../assets/sneakers-1.jpg" :alt="props.basketProduct.title"
                class="w-full h-full object-cover" />
        </div>

        <div class="flex-1">
            <h4 class="text-sm truncate w-[152px] font-semibold leading-tight mb-[4px]">
                {{ props.basketProduct.title }}
            </h4>
            <span class="text-[14px] text-gray-600 block mb-[8px]">
                {{ basketStore.productPriceWithQuantity(props.basketProduct.id) }} руб.
            </span>

            <div class="flex items-center gap-2">
                <button @click="basketStore.decreaseQuantity(props.basketProduct.id)"
                    class="w-[24px] cursor-pointer  h-[24px] border border-gray-300 rounded flex items-center justify-center text-[16px] hover:bg-gray-100">
                    <Minus class="w-[10px]" />
                </button>
                <span class="text-sm">{{ props.basketProduct.quantity }}</span>
                <button @click="basketStore.increaseQuantity(props.basketProduct.id)"
                    class="w-[24px] cursor-pointer  h-[24px] border border-gray-300 rounded flex items-center justify-center text-[16px] hover:bg-gray-100">
                    <Plus class="w-[10px]" />
                </button>
            </div>
        </div>

        <button @click="basketStore.removeFromBasket(props.basketProduct.id)"
            class=" cursor-pointer absolute top-3 right-3 text-gray-400 hover:text-red-500">
            <X class="w-4 h-4" />
        </button>
    </div>
</template>

<style scoped></style>