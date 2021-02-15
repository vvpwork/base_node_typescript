import axios, { AxiosInstance } from "axios";
import http from "http";
import https from "https";

import dotenv from "dotenv";
dotenv.config();

export const API = (headers?: { [key: string]: any }): AxiosInstance => {
  const instanceAxios = axios.create({
    headers: {
      //   Accpet: "*/*",
      //   "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json",
      //   Host: "burency.baanx.co.uk",
      //   "Cache-Control": "no-cache",
      //   "Postman-Token": "4e9c8f2c-114c-4ed5-bb3e-f55ffbe3f2a2",
      ...headers,
    },
    withCredentials: true,
    baseURL: process.env.BASE_URL,
    timeout: 100000,
    // httpAgent: new http.Agent({ keepAlive: true,  }),
    // httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false }),
  });
  instanceAxios.interceptors.request.use(
    (req) => {

      return req;
    },
    (error) => Promise.reject(error)
  );
//   instanceAxios.defaults.headers.post["Content-Type"] = "application/json";
//   instanceAxios.defaults.headers.post["Accept"] = "application/json";
  instanceAxios.defaults.headers["X-Product-Version"] = "99.0.0";
  instanceAxios.defaults.headers["X-Platform"] = "android";

  return instanceAxios;
};

export const errorHandler = (error: any) => {
  if (error.response) {
    console.log("error response", error.response.headers, error.response.data);
    return { status: error.response.status, data: error.response.data };
  } else if (error.request) {
    console.log("error request", error.message);
    return { status: error.request.status, data: error.request.data };
  } else {
    console.log("Error", error.message);
    return { status: 500, data: error.message };
  }
};
