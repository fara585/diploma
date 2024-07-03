<script setup>
// import Cart from "@/components/cart/Cart.vue"
import HeaderLayout from '@/layouts/header/HeaderLayout.vue';
import FooterLayout from '@/layouts/footer/FooterLayout.vue';

</script>
<template>
    <div class="wrapper">
        <HeaderLayout />
        <!-- <Cart /> -->
        <FooterLayout />
        <RouterView />
    </div>
</template>
