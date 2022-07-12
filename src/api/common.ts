import axios, { AxiosRequestConfig } from "axios";

export const createAxiosInstance = (options: AxiosRequestConfig) => {
    const instance = axios.create(options)

    return instance
}