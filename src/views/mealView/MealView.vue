<script setup>
import { useMealSingleStore } from "@/stores/mealSingleStore";
import { useRoute } from "vue-router";

const route = useRoute();

const mealSingleStore = useMealSingleStore();
mealSingleStore.getSingleMeal(route.params.id)

</script>
<template>
    <section class="meal">
        <div class="container">
            <h2>{{ mealSingleStore.meal?.strMeal }}</h2>
            <div class="meal__content">
                <ul class="meal__content-list">
                    <li class="meal__content-list-items" v-for="item in 20" :key="item">
                        <span v-if="mealSingleStore.meal?.[`strIngredient${item}`]"
                            class="meal__content-ing">{{ mealSingleStore.meal?.[`strIngredient${item}`] }}:</span>
                        <span v-if="mealSingleStore.meal?.[`strMeasure${item}`]"
                            class="meal__content-measure">{{ mealSingleStore.meal?.[`strMeasure${item}`] }}</span>
                    </li>
                </ul>
                <img :src="mealSingleStore.meal?.strMealThumb ?? '@/assets/img/nophoto.jpeg'" alt="" loading="lazy">
                <p class="meal__content-txt">{{ mealSingleStore.meal?.strInstructions }}
                </p>
            </div>
        </div>
    </section>
</template>
