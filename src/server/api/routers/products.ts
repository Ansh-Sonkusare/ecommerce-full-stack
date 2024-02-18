import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { type Product } from "@prisma/client";
import { fakeProduct } from "@/server/data";
import { env } from "@/env";
import { auth } from "@clerk/nextjs";
export const ProductRouter = createTRPCRouter({
  getProducts: publicProcedure
    .input(z.number().optional())
    .query(async ({ ctx, input = 4 }) => {
      const products = await ctx.db.product.findMany({ take: input });
      return products;
    }),
  getStripeCheckout: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string().nullable(),
        price: z.number(),
        quantity: z.number().optional().default(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      const session = await ctx.stripe.checkout.sessions.create({
        success_url: env.REDIRECT_URL,
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: input.price * 100,
              product_data: {
                name: input.name,
                description: input.description ?? "",
              },
            },
            quantity: input.quantity,
          },
        ],
        payment_method_types: ["card"],

        mode: "payment",
      });
      return session.url;
    }),
  getProductById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const product = await ctx.db.product.findFirst({
        where: {
          id: input,
        },
      });
      return product;
    }),

  fakeProducts: publicProcedure
    .input(z.number().optional())
    .query(async ({ input = 4 }): Promise<Array<Product>> => {
      const products: Array<Product> = [];
      for (let i = 0; i < input; i++) {
        const product = fakeProduct();
        products.push(product);
      }
      return products;
    }),
  fakeProduct: publicProcedure.query(async () => {
    return fakeProduct();
  }),
});
