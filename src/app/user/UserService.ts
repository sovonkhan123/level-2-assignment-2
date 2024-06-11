import { User } from "./UserInterface";
import { userModel } from "./UserModels";

const createUserIntoDB = async (userData: User) => {
  if (await userModel.isUserExists(userData.name)) {
    throw new Error("Product already exists");
  }
  const result = await userModel.create(userData);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await userModel.find();
  return result;
};

const getUserFromDB = async (id: String) => {
  const result = await userModel.findOne({ id });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getUserFromDB,
};
