import axios from "axios";

axios.defaults.httpAgent = { rejectUnauthorized: false };

let axiosInstance = axios.create({
  baseURL: "https://travel-api-tau.vercel.app/api",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Network request failed:", error);
    return Promise.reject(error);
  }
);

export const request = axiosInstance;
