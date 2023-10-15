import axios from "axios";

axios.defaults.httpAgent = { rejectUnauthorized: false }

let axiosInstance =
    axios.create({
        baseURL: "http://localhost:5003/api",
    });

export const request = axiosInstance;