// import { Schema, model } from "mongoose";
// import { User, UserInventory, UserVariant } from "./UserInterface";

// const UserVariantSchema = new Schema<UserVariant>(
//     [
//         {
//           type: {
//             type: String,
//             required: true
//           },
//           value: {
//             type: String,
//             required: true
//           }
//         },
//         {
//             type: {
//                 type: String,
//                 required: true
//               },
//               value: {
//                 type: String,
//                 required: true
//               }
//         }
//     ]
// );

// const UserInventorySchema = new Schema<UserInventory>(
// {
//     quantity: {
//         type: Number,
//         required: true
//     },
//     inStock: {
//         type: Boolean,
//         required: true
//     }
// }
// );

// const UserSchema = new Schema<User>({
//     name: {type: String, required: true},
//   description: {type: String, required: true},
//   price: {type: Number, required: true},
//   category: {type: String, required: true},
// tags: [{
// type: String,
// required:true
// }],
//   variants: UserVariantSchema,
//   inventory: UserInventorySchema,
// })

// export const userModel = model<User>('user', UserSchema)

import { Schema, model } from "mongoose";
import { User, UserInventory, UserVariant } from "./UserInterface";

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

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String, required: true }],
  variants: { type: [UserVariantSchema], required: true }, // Define variants as an array of UserVariantSchema
  inventory: { type: UserInventorySchema, required: true },
});

export const userModel = model<User>("user", UserSchema);
