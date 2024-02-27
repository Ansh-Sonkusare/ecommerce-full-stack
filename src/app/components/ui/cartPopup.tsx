"use client";
import { type FunctionComponent } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { type CartItem, useCart } from "@/lib/utils";
import Link from "next/link";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";

import { Button, type ButtonProps } from "@/components/ui/button";
import { Package, TrashIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { checkoutCart } from "@/lib/actions";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {}
const CartPopup: FunctionComponent<NavbarProps> = () => {
  const { cart, emptyCart, count, updateProduct } = useCart();
  const isDisable = count() <= 0;
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Image
            alt="Shopping Cart"
            src="/grocery-store.png"
            height={40}
            width={30}
          ></Image>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-3xl">Cart</SheetTitle>
            <div className="fixed bottom-2 z-10 flex w-80 justify-center">
              <Button
                size="lg"
                variant={"default"}
                className="w-full  bg-green-500"
                disabled={isDisable}
                onClick={async () => {
                  await checkoutCart(cart);
                  emptyCart();
                }}
              >
                Buy All <Package className="mx-4" />
              </Button>
            </div>

            <ScrollArea className="mt-4 h-[100vh] px-6 pb-8">
              {count() <= 0 && (
                <div className="relative top-[40vh] text-center text-4xl  text-gray-600">
                  Your Cart is Empty
                </div>
              )}

              {cart.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </ScrollArea>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

function Product(prop: { product: CartItem }) {
  const { updateProduct } = useCart();

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <Link href={`/product/${prop.product.id}`}>
          <Image
            className=" shadow-md "
            src={prop.product.urls[0] ? prop.product.urls[0] : ""}
            alt="Cat"
            width={400}
            height={400}
          />
        </Link>
        <div>{prop.product.name}</div>
        <div className="bolder">$ {prop.product.price}</div>

        <div className="mb-4 mt-2 flex justify-center gap-4 ">
          <Select
            value={String(prop.product.quantity)}
            name="quantity"
            defaultValue="1"
            onValueChange={(e) => updateProduct(prop.product, parseInt(e))}
          >
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectContent>
          </Select>
          <DeleteButton productId={prop.product.id} />
        </div>
      </div>
    </>
  );
}
interface DeleteButtonProps extends ButtonProps {
  productId: string;
}

const DeleteButton: FunctionComponent<DeleteButtonProps> = ({ productId }) => {
  const { removeProduct } = useCart();
  return (
    <Button onClick={() => removeProduct(productId)} variant={"destructive"}>
      <TrashIcon />
    </Button>
  );
};

// interface SelectQuantityProps {}

// const SelectQuantity: FunctionComponent<SelectQuantityProps> = () => {
//   return (
//     <Select
//       value={String(quantity)}
//       name="quantity"
//       onValueChange={(e) => {
//         setquantity(parseInt(e));
//         updateProduct(prop.product, quantity);
//       }}
//       defaultValue="1"
//     >
//       <SelectTrigger className="w-24">
//         <SelectValue placeholder="Select" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="1">1</SelectItem>
//         <SelectItem value="2">2</SelectItem>
//         <SelectItem value="3">3</SelectItem>
//         <SelectItem value="4">4</SelectItem>
//         <SelectItem value="5">5</SelectItem>
//       </SelectContent>
//     </Select>
//   );
// };

export default CartPopup;
