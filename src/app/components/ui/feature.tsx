import { api } from "@/trpc/server";
import { type Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes, type FunctionComponent } from "react";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FeatureProps extends HTMLAttributes<HTMLDivElement> {}

export const Feature: FunctionComponent<FeatureProps> = async ({ id }) => {
  const products = await api.product.getProducts.query();

  return (
    <div className="mb-20 mt-52 flex flex-col items-center" id={id}>
      <h2 className="font-inter mb-4 text-center text-5xl font-semibold">
        Feature Products
      </h2>
      <div className="grid grid-cols-2 gap-x-24 gap-y-8 p-14 ">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
function Product({ product }: { product: Product }) {
  return (
    <div>
      <Link href={`/product/${product.id}`}>
        <Image
          className="rounded-3xl shadow-md hover:scale-105 hover:shadow-lg"
          src={product.urls[0] ? product.urls[0] : ""}
          alt="Cat"
          width={400}
          height={400}
        />
      </Link>
      <div className="mb-4 mt-8 text-center">
        <p className="font-semibold">{product.name}</p>
        <p className=" text-gray-600">${product.price} USD</p>
      </div>
    </div>
  );
}
export default Feature;
