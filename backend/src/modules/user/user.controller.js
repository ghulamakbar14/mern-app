import service from './user.service.js';

export const create = async (req, res) => {
    req.body.password = req.body.password || '1234';
    const user = await service.createUser(req.body);
    res.status(201).json(user);
}

export const update = async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    const user = await service.updateUser(userId, updatedData);
    res.json(user);
}

export const list = async (req, res) => {
    const users = await service.getPagedUsers(req.query.page || 1, req.query.limit || 10);
    res.json(users);
}