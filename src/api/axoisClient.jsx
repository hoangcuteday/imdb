import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
    params: {
        api_key: import.meta.env.VITE_REACT_APP_API_KEY,
    },
    headers: {
        "Content-Type": "application/json",
    },

})

export default axiosClient;