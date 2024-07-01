<script setup>
import Card from "@/components/card/Card.vue";
import { useMealsStore } from '@/stores/mealsStore';

const mealsStore = useMealsStore()
mealsStore.getMeals()


</script>
<template>
    <section class="foods">
        <div class="container">
            <h2>Foods</h2>
            <div class="foods__cards">
                <Card v-for="item in mealsStore.meals" :key="item.idMeal" :card="item" />
            </div>
        </div>
    </section>
</template>
