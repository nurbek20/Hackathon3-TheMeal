// import React from "react";
import axios from 'axios';
import { API_URL } from './api-url';
import Cookies from 'js-cookie';


const instance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type":"application/json"
    }
})

instance.interceptors.request.use((config) => {
    const token = Cookies.get('token')
    if(token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})
instance.interceptors.response.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

export default instance;