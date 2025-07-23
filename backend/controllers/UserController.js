import { 
    registerUser,
    getAllUsers,
    getUserByEmail
} from "../service/UserService.js";


export const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({ message: 'User berhasil dibuat', data: user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const allUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const byEmailUser = async (req, res) => {
    try {
        const user = await getUserByEmail(req.params.email);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

// export const saveUser = async (req, res) => {
//     const user = new User(req.body);
//     try {
//         const insertUser = await user.save();
//         res.status(201).json(insertUser);
//     } catch (error) {
//         res.status(400).json({message: error.message});
//     }
// }