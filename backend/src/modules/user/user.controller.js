import service from './user.service.js';

export const create = async (req, res) => {
    const user = await service.createUser(req.body);
    res.status(201).json(user);
}

export const list = async (req, res) => {
    const users = await service.getPagedUsers(req.query.page || 1, req.query.limit || 10);
    res.json(users);
}