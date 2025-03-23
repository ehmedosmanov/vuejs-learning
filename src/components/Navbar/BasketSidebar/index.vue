<script setup>
import { useBasket } from '@/store/useBasket';
import { X } from 'lucide-vue-next';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    isBasketOpen: Boolean
})

const basketStore = useBasket()

watch(
    () => props.isBasketOpen,
    (value) => {
        document.body.style.overflow = value ? 'hidden' : 'auto'
    }
)
const route = useRoute();

watch(
    () => route.path,
    () => {
        emit('closeBasket');
    }
)

const emit = defineEmits(['closeBasket'])
</script>

<template>
    <Transition name="fade">
        <div v-if="props.isBasketOpen" @click="$emit('closeBasket')"
            class="absolute inset-0 w-full h-full bg-black/40 z-40">
        </div>
    </Transition>

    <Transition name="slide">
        <aside v-if="props.isBasketOpen"
            class="fixed top-0 right-0 border-l-[#ccc] w-full max-w-[200px] sm:max-w-[320px] bg-white border-l h-screen z-50 pt-6 pr-3 pl-6 shadow-lg">

            <button @click="$emit('closeBasket')" class="absolute top-4 right-4">
                <X class="w-6 h-6 text-black" />
            </button>

            <div class=" absolute top-4 left-4">
                <h4 class="font-semibold">Корзина</h4>
            </div>

            <div v-if="basketStore.basket.length > 0"
                class="pt-[40px] h-[650px] overflow-y-auto pr-2 flex flex-col gap-4">
                <BasketCard v-for="product in basketStore.basket" :key="product.id" :basketProduct="product" />
            </div>
            <div v-else class="text-center flex justify-center items-center h-[650px]">
                <p class="text-center">Корзина пуста</p>
            </div>

            <div class="mt-auto flex justify-center items-center">
                <BaseButton @click="$router.push('/basket')">Basket</BaseButton>
            </div>

        </aside>
    </Transition>
</template>


<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>