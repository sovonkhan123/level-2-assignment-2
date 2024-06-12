import express from "express";
import { userController } from "./UserController";

const router = express.Router();

router.post('/api/products', userController.createUser);

// router.get('/api/products', userController.getallUser);

router.get('/api/products', (req, res) => {
    if (req.query.searchTerm) {
      return userController.searchUserByTerm(req, res);
    } else {
      return userController.getallUser(req, res);
    }
  });

router.get('/api/products/:productId', userController.getUser);

router.delete('/api/products/:productId',userController.deleteUser);

router.put('/api/products/:productId',userController.updateUser);


export const userRoutes = router;