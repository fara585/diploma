import axios from "axios";

const axiosSecondClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL_SECOND,
    headers: {
        accept: "application/json"
    }
});

axiosSecondClient.interceptors.request.use(async (config) => {
    return config
});

axiosSecondClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response
}, (error) => {
    throw error;
})

export default axiosSecondClient