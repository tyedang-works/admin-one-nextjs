import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);