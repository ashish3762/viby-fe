import axios from 'axios';

const API_URL = 'https://viby-be.vercel.app';

export const signIn = async (username, password) => {
    console.log("signin called")
    const response = await axios.post(`${API_URL}/api/auth/login`, {
        username,
        password
    });
    return response.data;
};

export const signUp = async (username, email, password) => {
    const response = await axios.post(`${API_URL}/api/auth/register`, {
        username,
        email,
        password
    });
    return response.data;
}