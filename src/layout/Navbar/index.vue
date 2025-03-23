<script setup>
import MainNavbar from '@/components/Navbar/MainNavbar/index.vue'
import MobileNavbar from '@/components/Navbar/MobileNavbar/index.vue'
import BasketSidebar from '@/components/Navbar/BasketSidebar/index.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);
const isBasketOpen = ref(false);
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
</script>

<template>
    <MainNavbar @open-basket="isBasketOpen = true" :is-basket-open="isBasketOpen" :is-menu-open="isMenuOpen"
        :toggle-menu="toggleMenu" />
    <MobileNavbar :is-basket-open="isBasketOpen" :is-menu-open="isMenuOpen" :toggle-menu="toggleMenu" />
    <BasketSidebar :is-basket-open="isBasketOpen" @close-basket="isBasketOpen = false" />
</template>

<style lang="scss" scoped></style>