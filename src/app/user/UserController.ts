import { Request, Response } from "express";
import { userServices } from "./UserService";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    console.log(user);

    const result = await userServices.createUserIntoDB(user);
    console.log(result);

    res.status(200).json({
      success: true,
      message: "User is created successfully",
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
      message: "user is retrieved successfully",
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
            message: 'student is retrieved successfully',
            data: result
        })
    }catch(err: any){
        console.log(err)
    }
}

export const userController = {
  createUser,
  getallUser,
  getUser
};
