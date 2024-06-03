import axios from 'axios';

export const baseApi = axios.create({
    baseURL: 'https://tic-tac-toe-api-nvgm.onrender.com/api',
    headers: {'Content-Type': 'application/json'},
    timeout: 30 * 1000,
    validateStatus: (status) => status >= 200 && status < 300
})