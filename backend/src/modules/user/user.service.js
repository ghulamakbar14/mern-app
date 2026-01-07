import User from "./user.model.js";
import bcrypt from "bcryptjs";

const userService = {
  createUser: async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const userData = { ...data, password: hashedPassword };
    return User.create(userData);
  },
  //createUser: (data) => User.create(data),
  getUsers: () => User.find().select("-password"),
  getPagedUsers: async (page, limit) => {
    const skip = (page - 1) * limit;
    const usersPromise = User.find().select("-password").skip(skip).limit(limit);
    const countPromise = User.countDocuments();
    return Promise.all([usersPromise, countPromise]).then(([users, total]) => ({
      users,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    }));
  },
  updateUser: async (userId, updatedData) => {
    if (updatedData.password) {
      updatedData.password = await bcrypt.hash(updatedData.password, 10);
    }
    return User.findByIdAndUpdate(userId, updatedData, { new: true }).select("-password");
  },
};

export default userService;
