<script setup>
import { useToast } from 'primevue/usetoast';
import { Check, Heart, Plus } from 'lucide-vue-next';
import { useBasket } from '@/store/useBasket';
import { useWishlist } from '@/store/useWishlist';

const { id, title, price } = defineProps({
    id: [Number, String],
    title: String,
    price: Number,
});

const toast = useToast();
const { addProduct, isInBasket } = useBasket();
const wishlistStore = useWishlist();

const addToBasket = () => {
    const item = {
        id: id,
        title: title,
        price: price,
    };
    addProduct(item);
    toast.add({
        severity: 'success',
        summary: 'Added',
        detail: 'Product added',
        life: 3000,
    });
};

const addWishlist = () => {
    const item = {
        id: id,
        title: title,
        price: price,
    };

    if (wishlistStore.isInWishlist(id)) {
        wishlistStore.removeFromWishlist(id);
        toast.add({
            severity: 'success',
            summary: 'Removed',
            detail: 'Product removed from wishlist',
            life: 3000,
        });
        return;
    }

    wishlistStore.addToWishlist(item);

    toast.add({
        severity: 'success',
        summary: 'Added',
        detail: 'Product added to wishlist',
        life: 3000,
    });
}

defineOptions({
    name: 'ProductCard',
});
</script>

<template>
    <div class="border px-[20px] relative pb-[30px] pt-[20px] border-[#F3F3F3] rounded-[20px] hover:shadow transition">
        <div>
            <img class="w-full h-full object-cover rounded-[20px]" src="../../../assets/sneakers-1.jpg" alt="" />
        </div>
        <span @click="addWishlist"
            :class="wishlistStore.isInWishlist(id) ? 'bg-red-500 text-[#FF5C00] p-[5px] rounded-[50%]' : 'bg-white p-[5px] rounded-[50%]'"
            class="absolute top-[10px] cursor-pointer left-[10px] bg-white p-[5px] rounded-[50%]">
            <Heart />
        </span>
        <div>
            <h3 class="truncate">{{ title }}</h3>
            <div class="flex items-end justify-between pt-[14px]">
                <div class="flex flex-col gap-[2px]">
                    <span class="text-[#BDBDBD] text-[11px] font-medium">Цена:</span>
                    <span class="font-bold">{{ price }} руб.</span>
                </div>
                <span
                    class="border cursor-pointer border-[#F2F2F2] rounded-[8px] w-[32px] h-[32px] flex items-center justify-center bg-green-400 text-white"
                    v-if="isInBasket(id)">
                    <Check />
                </span>
                <span v-else @click="addToBasket"
                    class="border cursor-pointer border-[#F2F2F2] rounded-[8px] w-[32px] h-[32px] flex items-center justify-center">
                    <Plus />
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
