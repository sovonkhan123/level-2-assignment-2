import express from "express";
import { userController } from "./UserController";

const router = express.Router();

router.get('/api/products', userController.getallUser)
router.post('/api/products', userController.createUser)


export const userRoutes = router;