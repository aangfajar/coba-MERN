import User from "../models/UserModel.js";

export const create = async (data) => {
    return await User.create(data);
}

export const getAll = async () => {
    return await User.find();
}

export const getByEmail = async (email) => {
    return await User.findOne({email});
}