import { Request, Response } from "express";
import { userServices } from "./UserService";
import UserValidationSchema from "./UserValidation";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    // zod validation
    const zodParseData = UserValidationSchema.parse(user);
    // 
    const result = await userServices.createUserIntoDB(zodParseData);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};

const getallUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req: Request, res: Response) => {
    try{
        const {studentId} = req.params;
        const result = await userServices.getUserFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result
        })
    }catch(err: any){
        console.log(err)
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try{
        const {studentId} = req.params;
        const result = await userServices.deleteUserFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: result
        })
    }catch(err: any){
        console.log(err)
    }
};

export const userController = {
  createUser,
  getallUser,
  getUser,
  deleteUser,
};
