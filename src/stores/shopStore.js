import { defineStore } from "pinia";
import apiStore from '@/helpers/api/api';

export const useShopStore = defineStore("store", {
    state: () => ({
        store: null,
    }),
    actions: {
        async getProducts() {
            try {
                const res = await apiStore.getProducts();
                this.store = res.products;
                console.log("Products loaded:", this.store);
            } catch (error) {
                console.error("Error loading products:", error);
            }
        },
    },
});
