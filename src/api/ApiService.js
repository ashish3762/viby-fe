import axios from 'axios';

const API_URL = 'https://viby-be.vercel.app';

export const signIn = async (email, password) => {
    console.log("signin called")
    const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password
    });
    return response.data;
};

export const signUp = async (firstName, lastName, email, password) => {
    const response = await axios.post(`${API_URL}/api/auth/register`, {
        firstName,
        lastName,
        email,
        password
    });
    return response.data;
};

export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/api/products`);
    return response.data;
};

export const getSubscriptions = async () => {
    const response = await axios.get(`${API_URL}/api/subscriptions`);
    return response.data;
};

export const getGoods = async () => {
    const response = await axios.get(`${API_URL}/api/goods`);
    return response.data;
};