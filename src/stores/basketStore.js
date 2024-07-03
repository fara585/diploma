import { defineStore } from "pinia";
import { useShopStore } from "@/stores/shopStore"; // Ensure correct import

export const useBasketStore = defineStore("basket", {
    state: () => ({
        basket: [],
    }),
    getters: {
        basketCount: (state) => state.basket.reduce((count, item) => count + item.quantity, 0),
        totalSum: (state) => Math.floor(state.basket.reduce((sum, item) => sum + item.price * item.quantity, 0)),
    },
    actions: {
        addToBasket(id, source, quantity = 1) {
            const productStore = useShopStore();
            const product = productStore.store.find((product) => product.id === id);

            if (product) {
                const basketItem = this.basket.find((item) => item.id === id);
                if (basketItem) {
                    basketItem.quantity += quantity;
                } else {
                    this.basket.push({ ...product, quantity });
                }
                console.log("Updated basket:", this.basket);
            } else {
                console.error("Product not found:", id);
            }
        },
        removeFromBasket(id) {
            this.basket = this.basket.filter((item) => item.id !== id);
        },
        incrementQuantity(id) {
            const basketItem = this.basket.find((item) => item.id === id);
            if (basketItem) {
                basketItem.quantity += 1;
            }
        },
        decrementQuantity(id) {
            const basketItem = this.basket.find((item) => item.id === id);
            if (basketItem && basketItem.quantity > 1) {
                basketItem.quantity -= 1;
            }
        },
    },
    persist: true,
});
