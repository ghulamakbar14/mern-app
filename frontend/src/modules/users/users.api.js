import api from "../../services/api";

export const getUsers = (page) => api.get(`/users?page=${page}&limit=10`);
export const createUser = (data) => api.post("users", data);
export const updateUser = (id, data) => api.put(`users/${id}`, data);