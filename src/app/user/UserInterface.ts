export type UserVariant = [
  {
    type: string;
    value: string;
  },
  {
    type: string;
    value: string;
  }
];

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
