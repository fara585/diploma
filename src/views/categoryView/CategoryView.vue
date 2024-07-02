<script setup>
import { useRoute } from "vue-router";
import { useCategoryStore } from '@/stores/categorySingleStore';
import Card from '@/components/card/Card.vue';
const categoryStore = useCategoryStore();
const route = useRoute();
categoryStore.getCategorySingle(route.params.category)

</script>
<template>
    <section class="category">
        <div class="container">
            <h2>Category </h2>
            <div class="category__cards">
                <Card v-for="item in categoryStore.category" :key="item.idMeal" :card="item" />
            </div>
        </div>
    </section>
</template>