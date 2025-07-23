import express from "express";
import { 
    register,
    allUsers,
    byEmailUser
} from "../controllers/UserController.js";

const router = express.Router();

router.post('/register', register);
router.get('/users', allUsers);
router.get('/userByEmail/:email', byEmailUser);


export default router;