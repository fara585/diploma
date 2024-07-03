<script setup>
import { useFavouriteStore } from '@/stores/favouriteStore';
import IconLike from '@/components/icon/IconLike.vue';
const favouriteStore = useFavouriteStore();

</script>

<template>
    <section class="favourite">
        <div class="container">
            <h2 class="favourite__title">Favourites</h2>

            <div class="favourite__cards">
                <div class="card" v-for="item in favouriteStore.favourites" :key="item.idMeal">
                    <RouterLink :to="'/meal/' + item.idMeal" class="card__link">
                        <img :src="item.strMealThumb ?? '@/assets/img/nophoto.jpeg'" alt="" class="card__img"
                            loading="lazy">
                    </RouterLink>
                    <h3 class="card__title">{{ item.strMeal }}</h3>
                    <div class="card__btn">
                        <router-link v-show="isBtn" :to="'/category/' + item.strCategory || categoryName">
                            <Button :text="item.strCategory || categoryName" />
                        </router-link>
                        <button class="card__btn-btn-fav active" @click="favouriteStore.removeProduct(item.idMeal)">
                            <IconLike />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
