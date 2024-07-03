<script setup>
import { ref, onMounted } from "vue";
import { useShopStore } from "@/stores/shopStore";
import { useBasketStore } from "@/stores/basketStore";

const shopStore = useShopStore();
const basketStore = useBasketStore();

onMounted(() => {
    shopStore.getProducts();
});

const addToBasket = (id) => {
    if (!isInBasket(id)) {
        basketStore.addToBasket(id, "shop");
    }
};

const isInBasket = (id) => {
    return basketStore.basket.some((item) => item.id === id);
};
</script>

<template>
    <section class="cart">
        <div class="container">
            <h1>Products</h1>
            <div class="cart__content" v-if="shopStore.store">
                <div v-for="item in shopStore.store" :key="item.id" class="cart__content-card">
                    <div class="cart__content-card-img">
                        <img :src="item.thumbnail" alt="" />
                    </div>

                    <div class="cart__content-card-text">
                        <p>{{ item.name }}</p>
                        <div class="cart__content-card-text-box">
                            <div>
                                <i class="fas fa-star"></i>
                                <span> {{item.rating}} </span>
                            </div>
                            <div>
                                <i class="fal fa-comment-alt-lines"></i>
                                {{item.weight}}
                            </div>
                        </div>
                        <p>$ {{ item.price }}</p>
                    </div>

                    <div class="cart__content-card-buttons">
                        <button @click="addToBasket(item.id)">
                            <i :class="isInBasket(item.id) ? 'far fa-check' : 'fal fa-cart-plus'"></i>
                        </button>
                        <button>
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
/* Add necessary styles for basket items and counter */
.cart__content-card-buttons button {
    background: none;
    border: none;
    cursor: pointer;
}
</style>
