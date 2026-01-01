import AuthService from './auth.service.js';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await AuthService.login(email, password);
        return res.json(result);
    } catch (error) {
        return res.status(401).json({message: error.message});
    }
}