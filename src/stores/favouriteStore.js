import { defineStore } from 'pinia'
import { useMealsStore } from "@/stores/mealsStore";



export const useFavouriteStore = defineStore('favourite', {
    state: () => ({
        favourites: null
    }),
    actions: {
        getAddFavMeal(id) {
            const mealsStore = useMealsStore();
            const favMeal = mealsStore.meals?.find(item => item.idMeal == id);
            this.favourites.push(favMeal)
        }
    }
})