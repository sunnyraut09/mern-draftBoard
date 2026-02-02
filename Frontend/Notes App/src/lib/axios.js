import axios from 'axios'

const axiosapi = axios.create(
    {
        baseURL : "http://localhost:5001/api"
    }
)

export default axiosapi