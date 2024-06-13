import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z.string().email().min(3, { message: "Email is required" }),
  productId: z.string().min(1, { message: "ProductId is required" }),
  price: z.number().min(0, { message: "Price must be a non-negative number" }),
  quantity: z.number().min(0, { message: "Quantity must be a non-negative number" }),
});

export default orderValidationSchema;