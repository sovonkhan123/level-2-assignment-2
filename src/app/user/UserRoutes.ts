import express from "express";
import { userController } from "./UserController";

const router = express.Router();

router.post('/products', userController.createUser);

// router.get('/api/products', userController.getallUser);

router.get('/products', (req, res) => {
    if (req.query.searchTerm) {
      return userController.searchUserByTerm(req, res);
    } else {
      return userController.getallUser(req, res);
    }
  });

router.get('/products/:productId', userController.getUser);

router.delete('/products/:productId',userController.deleteUser);

router.put('/products/:productId',userController.updateUser);


export const userRoutes = router;