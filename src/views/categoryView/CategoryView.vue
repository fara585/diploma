<script setup>
import { useRoute } from "vue-router";
import { useCategoryStore } from '@/stores/categorySingleStore';
import Card from '@/components/card/Card.vue';
const categoryStore = useCategoryStore();
const route = useRoute();
categoryStore.getCategorySingle(route.params.category);
import { computed } from "vue";

const filteredCategory = computed(() => {
  return categoryStore.category
    ? categoryStore.category.filter((item) =>
      item.strMeal.toLowerCase()
    )
    : [];
});

</script>
<template>
    <section class="category">
        <div class="container">
            <h2>Category </h2>
            <div class="category__cards">
                <Card v-for="item in categoryStore.category" :key="item.idMeal" :card="item" :isBtn="false" />
                <Card v-for="item in filteredCategory" :key="item.idMeal" :card="item" :isBtn="false" />
            </div>
        </div>
    </section>
</template>