import express from "express";
import { userController } from "./UserController";

const router = express.Router();

router.post('/api/products', userController.createUser);

router.get('/api/products', userController.getallUser);

router.get('/api/products/:productId', userController.getUser);


export const userRoutes = router;