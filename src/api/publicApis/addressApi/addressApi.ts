import axios from "axios"

export const addressApi = {
    get: (URL:string) => {
       return axios.get(URL);
    }
}