<script setup>
import { useBasket } from '@/store/useBasket';
import { CircleUserRound, Heart, MenuIcon, ShoppingBasket, XCircleIcon, XIcon } from 'lucide-vue-next';

defineProps({
    isMenuOpen: Boolean,
    isBasketOpen: Boolean,
    toggleMenu: {
        type: Function,
        required: true
    }
})

const basketStore  = useBasket()
const emit = defineEmits(['openBasket'])
</script>

<template>
    <nav class="border-b border-b-[#EAEAEA]">
        <div class="wrapper py-[45px]">
            <div class="flex items-center justify-between">
                <!-- LOGO -->
                <div class="logo">
                    <RouterLink class="flex items-center gap-[16px]" to="/">
                        <img class="w-[40px] h-[40px]" src="@/assets/logo-sneak.png" alt="Logo" />
                        <div class="flex flex-col leading-[20px]">
                            <h4 class="text-[20px] font-bold text-black">REACT SNEAKERS</h4>
                            <span class="text-[14px] text-[#9D9D9D]">Магазин лучших кроссовок</span>
                        </div>
                    </RouterLink>
                </div>
                <div class="md:flex hidden items-center gap-[32px]">
                    <div @click="$emit('openBasket')"
                        class="flex items-center cursor-pointer gap-[10px] text-[#9B9B9B]">
                        <span>
                            <ShoppingBasket />
                        </span>
                        <span class="text-[#5C5C5C] font-semibold">{{ basketStore.total }} руб.</span>
                    </div>
                    <div class="flex items-center cursor-pointer gap-[10px] text-[#9B9B9B]">
                        <span>
                            <Heart />
                        </span>
                        <span class="text-[#5C5C5C] font-semibold">Закладки</span>
                    </div>
                    <div class="flex items-center cursor-pointer gap-[10px] text-[#9B9B9B]">
                        <span>
                            <CircleUserRound />
                        </span>
                        <span @click="$router.push('/products-table')" class="text-[#5C5C5C] font-semibold">CRUD</span>
                    </div>
                </div>
                <button @click="toggleMenu" class="md:hidden text-black">
                    <MenuIcon v-if="!isMenuOpen" />
                    <XIcon v-else />
                </button>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped></style>