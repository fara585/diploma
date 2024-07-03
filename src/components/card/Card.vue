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
    },
    isBtn: Boolean,
    categoryName: String
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
            <router-link v-show="isBtn" :to="'/category/' + card.strCategory || categoryName">
                <Button :text="card.strCategory || categoryName" />
            </router-link>
            <button class="card__btn-btn" @click="
            favouriteStore.getAddFavMeal(card.idMeal), (isActive = !isActive)
            " :class="{
            active: favouriteStore.favIds?.find((item) => item == card.idMeal),
        }">
                <IconLike />
            </button>
        </div>
    </div>
</template>