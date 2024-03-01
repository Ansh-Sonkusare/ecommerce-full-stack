import { api } from "@/trpc/server";
import Image from "next/image";
import Link from "next/link";
import { type FunctionComponent } from "react";

async function category() {
  const data = await api.product.getProducts.query(10);
  return (
    <div className=" mt-24">
      <div className="font-inter mx-20 flex flex-row items-center justify-evenly gap-10 border-y-2 border-gray-300 p-5 text-[20px]">
        <div>NEW</div>

        <div>STATIONERY</div>

        <div>ACCESSORIES</div>

        <div>THEME</div>

        <div>20% OFF</div>
      </div>
      {/* Product Map */}
      <div className="mx-32 mt-20 grid grid-cols-3 gap-y-20">
        {data.map((product, idx) => (
          <Product
            id={product.id}
            url={product.urls[0] ? product.urls[0] : ""}
            name={product.name}
            price={product.price}
            sale={true}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
interface ProductProps {
  sale?: boolean;
  name: string;
  price: number;
  url: string;
  id: string;
}

const Product: FunctionComponent<ProductProps> = ({
  sale,
  name,
  price,
  url,
  id,
}) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="flex flex-col items-center">
        <div className="relative  rounded-sm  ">
          <Image className="" src={url} alt="Cat" width={400} height={600} />
          {sale && (
            <div className=" absolute right-0  top-0 flex h-24 w-24 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-black text-xl text-white">
              SALE
            </div>
          )}
        </div>
        <div className="pt-2 text-center">
          <p className="text-lg font-semibold">{name}</p>
          <p className="font-semibold text-gray-500">${price} USD</p>
        </div>
      </div>
    </Link>
  );
};

export default category;
