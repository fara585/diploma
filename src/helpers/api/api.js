import axiosClient from "./axiosClient";
import axiosSecondClient from "./axiosSecondClient";



const apiMeals = {

    getMeals() {
        const url = "search.php?f=b"
        return axiosClient.get(url)
    },
    getSingleMeal(id) {
        const url = `lookup.php?i=${id}`
        return axiosClient.get(url)
    },
    getCategorySingle(name) {
        const url = `filter.php?c=${name}`
        return axiosClient.get(url)
    },

    // -----------------------------------

    getProducts() {
        const url = `/products?limit=80&skip=20&}`
        return axiosSecondClient.get(url);
    },
    getNewProducts() {
        const url = `/products?limit=15&skip=50&}`
        return axiosSecondClient.get(url);
    },
    getDiscProducts() {
        const url = `/products?limit=15&skip=50&}`
        return axiosSecondClient.get(url);
    },
    getCategories() {
        const url = `/products/category-list`
        return axiosSecondClient.get(url);
    },
    getSingleCategories(name) {
        const url = `/products/category/${name}`
        return axiosSecondClient.get(url);
    },
    getSingleProduct(id) {
        const url = `/products/${id}`
        return axiosSecondClient.get(url);
    },
}


export default apiMeals;
