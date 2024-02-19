import { type Product } from "@prisma/client";
import { db } from "./db";

import { faker } from "@faker-js/faker";
async function CreateDBData() {
  const products = [];
  for (let i = 0; i < 10; i++) {
    const product = fakeProduct();
    products.push(product);
  }
  console.log(await db.product.createMany({ data: [...products] }));
}

export function fakeProduct(): Product {
  return {
    id: faker.string.uuid(),
    name: faker.animal.cat(),
    description: faker.commerce.productDescription(),
    price: parseInt(faker.commerce.price({ min: 200, max: 800 })),
    urls: [...getImages(5, "")],
  };
}

export function getImages(imgCount: number, category: string) {
  const Images: Array<string> = [];
  for (let i = 0; i < imgCount; i++) {
    const image = faker.image.urlLoremFlickr();
    Images.push(image);
  }
  return Images;
}
