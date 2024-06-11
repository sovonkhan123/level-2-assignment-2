// export type UserVariant = [
//   {
//     type: string;
//     value: string;
//   },
//   {
//     type: string;
//     value: string;
//   }
// ];

import { Model } from "mongoose";

// export type UserInventory = {
//   quantity: number;
//   inStock: boolean;
// };

// export type User = {
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   tags: string[];
//   variants: UserVariant;
//   inventory: UserInventory;
// };
export type UserVariant = {
  type: string;
  value: string;
}[];

export type UserInventory = {
  quantity: number;
  inStock: boolean;
};

export type User = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: UserVariant;
  inventory: UserInventory;
};

export interface UsModel extends Model<User> {
  isUserExists(name: string): Promise<User| null>
}
