<script setup>
import { defineProps } from 'vue';
import { ShoppingBasket, Heart, CircleUserRound, X } from 'lucide-vue-next';

defineProps({
    isMenuOpen: Boolean,
    toggleMenu: Function
});
</script>

<template>
    <Transition name="fade">
        <div v-if="isMenuOpen" @click="toggleMenu" class="absolute inset-0 w-full h-full bg-black/40 z-40">
        </div>
    </Transition>

    <Transition name="slide">
        <aside v-if="isMenuOpen"
            class="fixed md:hidden top-0 right-0 border-l-[#ccc] w-full max-w-[200px] sm:max-w-[320px] bg-white border-l h-screen z-50 p-6 shadow-lg">

            <button @click="toggleMenu" class="absolute top-4 right-4">
                <X class="w-6 h-6 text-black" />
            </button>

            <div class="flex flex-col gap-4 mt-10">
                <div class="flex items-center cursor-pointer gap-[10px] text-[#9B9B9B]">
                    <span>
                        <ShoppingBasket />
                    </span>
                    <span class="text-[#5C5C5C] font-semibold">Корзина</span>
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
                    <span class="text-[#5C5C5C] font-semibold">Профиль</span>
                </div>
            </div>

        </aside>
    </Transition>
</template>

<!-- 🔹 Animations -->
<style scoped>
/* 🔹 Slide Animation */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

/* 🔹 Fade Animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
