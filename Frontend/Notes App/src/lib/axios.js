import axios from 'axios'
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
const axiosapi = axios.create(
    {
        baseURL : "http://localhost:5001/api"
    }
)

export default axiosapi