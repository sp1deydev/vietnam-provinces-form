import axios from "axios";
import { BASE_API_URL } from "../constants/api";

let baseURL = BASE_API_URL || "";

const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json", // Thêm Content-Type
    },
})

export default axiosClient;