import { Request, Response } from "express";
import { userServices } from "./UserService";
import UserValidationSchema from "./UserValidation";

// for create a product
const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
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
// end here

// for get all product from database
const getallUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
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
// end here

// for get a product
const getUser = async (req: Request, res: Response) => {
    try{
        const {studentId} = req.params;
        const result = await userServices.getUserFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result
        });
    }catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || "something went wrong",
        error: err,
      });
    }
};
// end here

// for deleting a product
const deleteUser = async (req: Request, res: Response) => {
    try{
        const {studentId} = req.params;
        const result = await userServices.deleteUserFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: result
        });
    }catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || "something went wrong",
        error: err,
      });
    }
};
// end here

// for updating a product
const updateUser = async (req: Request, res: Response) => {
    try{
        const {studentId} = req.params;
        const updateData = req.body;
        const result = await userServices.updateUserFromDB(studentId,updateData);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: updateData,
        });
    }catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || "something went wrong",
        error: err,
      });
    }
};
// end here

// for searching product
const searchUserByTerm = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (!searchTerm) {
      return res.status(400).json({
        success: false,
        message: "searchTerm query parameter is required",
      });
    }
    const result = await userServices.searchUserByTermFromDB(searchTerm as string);
    res.status(200).json({
      success: true,
      message: `Products matching search term ${searchTerm} fetched successfully!`,
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
// end here

export const userController = {
  createUser,
  getallUser,
  getUser,
  deleteUser,
  updateUser,
  searchUserByTerm
};
