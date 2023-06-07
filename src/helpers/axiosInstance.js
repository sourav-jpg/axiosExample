import axios from "axios";

let axiosInstance = axios.create({
    baseURL:"http://localhost:4001/"
})

export default axiosInstance