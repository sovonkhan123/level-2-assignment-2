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

const getUserFromDB = async (id: string) => {
  const result = await userModel.findOne({ id });
  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = await userModel.deleteOne({ id });
  return result;
};

const updateUserFromDB = async (id: string, updateData: any) => {
  const result = await userModel.updateOne({ _id: id }, { $set: updateData }, { new: true });
  return result;
};

const searchUserByTermFromDB = async (searchTerm: string) => {
  const result = await userModel.find({ name: new RegExp(searchTerm, 'i') });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getUserFromDB,
  deleteUserFromDB,
  updateUserFromDB,
  searchUserByTermFromDB,
};
