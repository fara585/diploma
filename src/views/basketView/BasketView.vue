<script setup>
import { computed, onMounted } from "vue";
import { useShopStore } from "../../stores/shopStore";
import { useBasketStore } from "../../stores/basketStore";

const shopStore = useShopStore();
const basketStore = useBasketStore();

const basketCount = computed(() => basketStore.basketCount);
const totalSum = computed(() => basketStore.totalSum);

onMounted(() => {
    shopStore.getProducts();
});

const incrementQuantity = (id) => {
    basketStore.incrementQuantity(id);
};

const decrementQuantity = (id) => {
    basketStore.decrementQuantity(id);
};

const removeFromBasket = (id) => {
    basketStore.removeFromBasket(id);
};

</script>



<template>
    <section class="basket">
        <div class="container">
            <div class="basket__content">

                <div class="basket__content-left">
                    <h2>Savat</h2>
                    <div class="basket__content-left-products">

                        <div v-for="item in basketStore.basket" :key="item.id"
                            class="basket__content-left-products-card">
                            <div class="basket__content-left-products-card-left">
                                <img :src="item.thumbnail" alt="" />
                                <div>
                                    <p>{{ item.title }}</p>
                                    <div>
                                        <button @click="removeFromBasket(item.id)">
                                            <i class="fal fa-trash-alt"></i>
                                        </button>
                                        <button>
                                            <i class="fas fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="basket__content-left-products-card-right">
                                <p>${{ item.price }}</p>
                                <div>
                                    <button @click="decrementQuantity(item.id)">
                                        <i class="far fa-minus"></i>
                                    </button>
                                    <span>{{ item.quantity }}</span>
                                    <button @click="incrementQuantity(item.id)">
                                        <i class="far fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="basket__content-right">
                    <div class="basket__content-right-top">
                        <h2>Sizning buyurtmangiz</h2>
                        <div>
                            <p>Mahsulot soni</p>
                            <p>{{ basketCount }} ta</p>
                        </div>
                        <div>
                            <p>Jami summa</p>
                            <p>${{ totalSum }}</p>
                        </div>
                    </div>
                    <div class="basket__content-right-middle">
                        <p>Siz uchun bepul yetkazib berish xizmati mavjud.</p>
                    </div>
                    <div class="basket__content-right-bottom">
                        <button>Buyurtmani tasdiqlash</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
h1 {
    margin-top: 100px;
}
</style>