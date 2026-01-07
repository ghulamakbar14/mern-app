import api from "../../services/api";

export const getUsers = (page, limit) => api.get(`/users?page=${page}&limit=${limit}`);
export const createUser = (data) => api.post("users", data);
export const updateUser = (id, data) => api.put(`users/${id}`, data);