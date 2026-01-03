import api from '../../api/axios';

export const getUsers = (page) => api.get(`/users?page=${page}&limit=10`);
export const createUser = (data) => api.post("users", data);