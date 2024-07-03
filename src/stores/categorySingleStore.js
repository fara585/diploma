import apiMeals from '@/helpers/api/api'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('categorySingle', {
    state: () => ({
        category: null,
        name: null
    }),
    actions: {
        async getCategorySingle(name) {
            try {
                const res = await apiMeals.getCategorySingle(name);
                this.category = res.meals
                this.name = name
            } catch (error) {
                console.error(error);
            }
        }
    },
    persist: true
})