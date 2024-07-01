import axiosClient from "./axiosClient";

const apiMeals = {
    getMeals() {
        const url = "search.php?f=b"
        return axiosClient.get(url)
    },
    getSingleMeal(id) {
        const url = `lookup.php?i=${id}`
        return axiosClient.get(url)
    }
}

export default apiMeals;