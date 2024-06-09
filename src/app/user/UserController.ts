import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
    const user =req.body.user;
    console.log(user);
};

const getallUser = async (req: Request, res: Response) => {
    const user =req.body.user;
    console.log(user);
};

export const userController ={
    createUser,
    getallUser

}