"use client";
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState, type HTMLAttributes } from "react";

import { api } from "@/trpc/react";
import { BuyNow } from "@/lib/actions";
import { useCart } from "@/lib/utils";

// eslint-disable-next-line @next/next/no-async-client-component
export default function Product({ params }: { params: { productId: string } }) {
  const [Model, setModel] = useState<boolean>(false);
  const { addProduct, getProduct } = useCart();

  const [quantity, setquantity] = useState<number>(
    getProduct(params.productId) ? getProduct(params.productId) : 1,
  );
  const { data: product, isLoading } = api.product.getProductById.useQuery(
    params.productId,
    {
      refetchOnWindowFocus: false,
    },
  );
  const handleBuy = async () => {
    setModel(!Model);
    await BuyNow({ ...product!, quantity: quantity });

    setquantity(1);
  };

  const handleAddCart = async () => {
    addProduct({ ...product!, quantity: 1 });
    setquantity(1);
  };

  const [mainImage, setmainImage] = useState<string>("");

  useEffect(() => {
    product?.urls[0] && setmainImage(product?.urls[0]);
  }, [product?.urls]);

  return (
    <>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <>
          {" "}
          <div className="mx-auto mt-40 grid max-w-7xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-16">
            <div className="mt-20 grid items-start gap-6">
              <h1 className="text-3xl font-bold lg:text-4xl">
                {product?.name}
              </h1>
              <div className="grid items-start gap-4 md:grid-cols-2"></div>
              <div className="text-4xl font-bold">${product?.price}</div>
              <div className="flex items-start md:hidden">
                <div className="grid gap-4">
                  <h1 className="text-2xl font-bold sm:text-3xl">
                    {product?.name}
                  </h1>
                  <div></div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-0.5">
                      <StarIcon className="h-5 w-5 fill-primary" />
                      <StarIcon className="h-5 w-5 fill-primary" />
                      <StarIcon className="h-5 w-5 fill-primary" />
                      <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                      <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                    </div>
                  </div>
                </div>
                <div className="ml-auto text-4xl font-bold">$99</div>
              </div>
              <Separator className="border-gray-200 dark:border-gray-800" />
              <div className="grid gap-4 text-sm leading-loose md:gap-10">
                <p>{product?.description}</p>
              </div>

              <div className="grid gap-4  md:gap-10">
                <div className="flex items-center gap-2">
                  <ChevronRightIcon className="h-3 w-3" />
                  <Label className="text-base" htmlFor="quantity">
                    Quantity
                  </Label>
                </div>
                <Select
                  value={String(quantity)}
                  name="quantity"
                  onValueChange={(e) => setquantity(parseInt(e))}
                  defaultValue="1"
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
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    variant={"secondary"}
                    className="bg-green-500 "
                    onClick={handleBuy}
                  >
                    Buy Now ;D
                  </Button>
                  <Button
                    onClick={handleAddCart}
                    type="button"
                    size="lg"
                    variant="outline"
                  >
                    <HeartIcon className="mr-2 h-4 w-4" />
                    Add to wishlist
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid w-[80%] items-start gap-4">
              <Image
                alt="Product Image"
                className="aspect-square w-[full] overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
                height={600}
                src={mainImage}
                width={600}
              />

              <div className="hidden items-start gap-4 md:flex">
                {product?.urls.map((image) => {
                  return (
                    <>
                      <button
                        onClick={() => setmainImage(image)}
                        className="overflow-hidden rounded-lg border transition-colors hover:border-gray-900 dark:hover:border-gray-50"
                      >
                        <Image
                          alt="Preview thumbnail"
                          className="aspect-square object-cover"
                          height={100}
                          src={image}
                          width={100}
                        />
                        <span className="sr-only">View Image 1</span>
                      </button>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <AlertDialog open={Model} onOpenChange={() => setModel(!Model)}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
    </>
  );
}

function ChevronRightIcon(props: HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function StarIcon(props: HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function HeartIcon(props: HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function SkeletonCard() {
  return (
    <div className="mx-auto mt-40 grid max-w-7xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-16">
      <div className="mt-20 grid items-start gap-8">
        <Skeleton className="h-8 w-72" />

        <Skeleton className="h-8 w-52" />

        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />

        <Skeleton className="mt-4 h-8 w-52" />

        <div className="mt-20 flex  gap-2">
          <Skeleton className="h-12 w-1/3 " />
          <Skeleton className="h-12 w-1/3 " />
        </div>
      </div>

      <div className="grid w-[80%] items-start gap-4">
        <Skeleton className="aspect-square w-[full] rounded-xl" />
        <div className="flex items-start gap-4 md:flex">
          <Skeleton className="h-20 w-1/5" />
          <Skeleton className="h-20 w-1/5" />
          <Skeleton className="h-20 w-1/5" />
          <Skeleton className="h-20 w-1/5" />
          <Skeleton className="h-20 w-1/5" />
        </div>
      </div>
    </div>
  );
}
