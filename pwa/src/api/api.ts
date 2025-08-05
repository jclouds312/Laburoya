import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const createUser = (userData) => api.post('/user', userData);
export const getAllUsers = () => api.get('/user');
export const updateUser = (id, data) => api.put(`/user/${id}`, data);
export const deleteUser = (id) => api.delete(`/user/${id}`);

export const createPayment = (amount) => api.post('/payments/create', { amount });
