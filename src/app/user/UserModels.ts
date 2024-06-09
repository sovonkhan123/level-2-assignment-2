import { Schema } from "mongoose";
import { User, UserInventory, UserVariant } from "./UserInterface";

const UserVariantSchema = new Schema<UserVariant>(
    [
        {
          type: {
            type: String,
            required: true
          },
          value: {
            type: String,
            required: true
          }
        },
        {
            type: {
                type: String,
                required: true
              },
              value: {
                type: String,
                required: true
              }
        }
    ]
);

const UserInventorySchema = new Schema<UserInventory>(
{
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
}
);




const UserSchema = new Schema<User>({
    name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  category: {type: String, required: true},
tags: [{
type: String
}],
  variants: UserVariantSchema,
  inventory: UserInventorySchema,
})

