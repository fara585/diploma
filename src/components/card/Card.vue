<script setup>
import { ref } from "vue";
import Button from "@/components/button/Button.vue";
import IconLike from '@/components/icon/IconLike.vue';

import { useFavouriteStore } from "@/stores/favouriteStore";
const favouriteStore = useFavouriteStore();

const props = defineProps({
    card: {
        typeof: Object,
        required: true
    }
});
const isactive = ref(false);

</script>
<template>
    <div class="card">
        <RouterLink :to="'/meal/' + card.idMeal" class="card__link">
            <img :src="card.strMealThumb ?? '@/assets/img/nophoto.jpeg'" alt="" class="card__img" loading="lazy">
        </RouterLink>
        <h3 class="card__title">{{ card.strMeal }}</h3>
        <div class="card__btn">
            <router-link v-show="card.strCategory" :to="'/category/' + card.strCategory">
                <Button :text="card.strCategory" />
            </router-link>
            <button class="card__btn-btn" @click="isactive = !isactive, favouriteStore.getAddFavMeal(card.idMeal)"
                :class="{ 'active': isactive }">
                <IconLike />
            </button>
        </div>
    </div>
</template>