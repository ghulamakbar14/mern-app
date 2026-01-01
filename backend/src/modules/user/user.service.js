import User from "./user.model.js";
import bcrypt from "bcryptjs";

const userService = {
  createUser: async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const userData = { ...data, password: hashedPassword };
    return User.create(userData);
  },
  //createUser: (data) => User.create(data),
  getUsers: () => User.find().select(""),
};

export default userService;
