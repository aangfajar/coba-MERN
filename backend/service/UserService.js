import { 
    create,
    getAll,
    getByEmail
} from "../repositories/UserRepository.js";

export const registerUser = async (userData) => {
    const existing = await getByEmail(userData.email)
    if (existing) throw new Error ('Email sudah terdaftar');

    return await create(userData);
}

export const getAllUsers = async () => {
    return await getAll();
}

export const getUserByEmail = async (email) => {
    return await getByEmail(email);
}