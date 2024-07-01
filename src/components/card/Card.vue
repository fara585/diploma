<script setup>
import Button from "@/components/button/Button.vue";
import IconLike from '@/components/icon/IconLike.vue'
const props = defineProps({
    card: {
        typeof: Object,
        required: true
    }
})
</script>
<template>
    <RouterLink :to="'/meal/' + card.idMeal" class="card">
        <img :src="card.strMealThumb ?? '@/assets/img/nophoto.jpeg'" alt="" class="card__img" loading="lazy">
        <h3 class="card__title">{{ card.strMeal }}</h3>
        <div class="card__btn">
            <Button :text="card.strCategory" />
            <button class="card__btn-btn">
                <IconLike />
            </button>
        </div>
    </RouterLink>
</template>