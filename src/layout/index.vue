<template>
    <Navbar />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

<script setup>
import Navbar from '@/layout/Navbar/index.vue'
import Footer from '@/layout/Footer/index.vue'
</script>
