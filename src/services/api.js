import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api', // Backend API'nin base URL'si
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const loginUser = (credentials) => API.post('/users/login', credentials);
export const registerUser = (data) => API.post('/users/register', data);
export const getAccounts = () => API.get('/accounts');
export const createAccount = (data) => API.post('/accounts', data);
export const updateAccount = (id, data) => API.put(`/accounts/${id}`, data);
export const transferMoney = (data) => API.post('/transactions/transfer', data);
export const getTransactionHistory = (accountId) =>
  API.get(`/transactions/account/${accountId}`);
