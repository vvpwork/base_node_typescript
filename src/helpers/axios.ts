import axios, { AxiosInstance } from "axios";
import dotenv from 'dotenv';
dotenv.config()

export const API = (headers: { [key: string]: any }) => {
    axios.create({
        headers:{
            "X-Product-Version": '99.0.0',
            "X-Platform": 'android',
            ...headers,
        },
        baseURL: process.env.BASE_URL || 'https://burency.baanx.co.uk/api/v1/', 
    })
};
