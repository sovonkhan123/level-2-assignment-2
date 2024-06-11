import { z } from "zod";

const UserVariantValidationSchema = z.object({
  type: z.string().min(2, { message: "Type is required" }),
  value: z.string().min(2, { message: "Value is required" }),
});

// Define the UserInventory Zod schema
const UserInventoryValidationSchema = z.object({
  quantity: z
    .number()
    .min(0, { message: "Quantity must be a non-negative number" }),
  inStock: z.boolean(),
});

// Define the main User Zod schema
const UserValidationSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  description: z.string().min(10, { message: "Description is required" }),
  price: z.number().min(0, { message: "Price must be a non-negative number" }),
  category: z.string().min(3, { message: "Category is required" }),
  tags: z.array(z.string().min(3, { message: "Tag is required" })),
  variants: z
    .array(UserVariantValidationSchema)
    .min(2, { message: "At least one variant is required" }),
  inventory: UserInventoryValidationSchema,
});

export default UserValidationSchema;
