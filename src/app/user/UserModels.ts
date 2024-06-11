

import { Schema, model } from "mongoose";
import { UsModel, User, UserInventory, UserVariant } from "./UserInterface";

const UserVariantSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { _id: false } // Prevent creation of an _id field for each variant object
);

const UserInventorySchema = new Schema<UserInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const UserSchema = new Schema<User, UsModel>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String, required: true }],
  variants: { type: [UserVariantSchema], required: true }, 
  inventory: { type: UserInventorySchema, required: true },
});

UserSchema.statics.isUserExists = async function (name: string) {
  const existingUser = await userModel.findOne({ name });
  return existingUser;
};

export const userModel = model<User, UsModel>("user", UserSchema);
