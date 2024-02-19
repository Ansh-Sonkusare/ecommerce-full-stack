import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { create } from "zustand";
import { type Product } from "@prisma/client";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = Product & { quantity: number };
export const useCart = create<{
  cart: Array<CartItem>;
  addProduct: (product: CartItem) => void;
  removeProduct: (id: string) => void;
  getProduct: (id: string) => number;
  count: () => number;
}>()(
  persist(
    (set, get) => ({
      cart: [],
      count: () => {
        const { cart } = get();
        if (cart.length)
          return cart
            .map((item) => item.quantity)
            .reduce((prev, curr) => prev + curr);
        return 0;
      },

      addProduct: (product) => {
        const { cart } = get();

        const cartItem = updateCart(product, cart);
        set(() => ({ cart: cartItem }));
      },
      getProduct: (id) => {
        const { cart } = get();

        return getQuantity(id, cart);
      },
      removeProduct: (id) => {
        const { cart } = get();

        const cartItem = removeCart(id, cart);

        set(() => ({ cart: cartItem }));
      },
    }),
    { name: "ProductCart", storage: createJSONStorage(() => localStorage) },
  ),
);

const updateCart = (product: Product, cart: CartItem[]): CartItem[] => {
  const cartItem: CartItem = { ...product, quantity: 1 };
  const productOnCart = cart.map((item) => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }
  return cart;
};
function removeCart(idProduct: string, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct)
        return { ...item, quantity: item.quantity - 1 };
      return item;
    })
    .filter((item) => {
      return item.quantity;
    });
}

function getQuantity(idProduct: string, cart: CartItem[]): number {
  return cart
    .map((item) => {
      if (item.id === idProduct) return item.quantity;
      return 0;
    })
    .reduce((x, y) => x + y, 0);
}
