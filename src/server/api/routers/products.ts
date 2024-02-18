import { z } from "zod";
import { faker } from "@faker-js/faker";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { type Product } from "@prisma/client";

export const ProductRouter = createTRPCRouter({
  ListAllProducts: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.db.product.findMany();
    return products;
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
  generateProducts: publicProcedure
    .input(z.number().optional())
    .query(async ({ input = 4 }): Promise<Array<Product>> => {
      const products = [];
      for (let i = 0; i < input; i++) {
        const product = generateProduct();
        products.push(product);
      }
      return products;
    }),
  generateProduct: publicProcedure.query(async () => {
    return generateProduct();
  }),
});

function generateProduct(): Product {
  return {
    id: faker.string.uuid(),
    name: faker.animal.cat(),
    description: faker.commerce.productDescription(),
    price: parseInt(faker.commerce.price({ min: 200, max: 800 })),
    urls: [faker.image.urlLoremFlickr({ category: "cats" })],
  };
}
