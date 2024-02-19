"use server";
import { z } from "zod";

import { api } from "@/trpc/server";
import { redirect } from "next/navigation";
import { type CartItem } from "./utils";

const checkoutObj = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.number(),
  quantity: z.number().optional().default(1),
});
export const BuyNow = async (product: z.infer<typeof checkoutObj>) => {
  "use server";

  const response = await api.product.getStripeCheckout.query(product);
  redirect(response!);
};

export async function checkoutCart(products: CartItem[]) {
  "use server";

  const response = await api.product.checkoutCart.query(products);
  redirect(response!);
  return true;
  // ...
}
