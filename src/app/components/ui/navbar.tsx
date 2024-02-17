import Image from "next/image";
import Link from "next/link";

import { type FunctionComponent } from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <>
      <div className="flex justify-center px-48">
        <div className="font mt-8 flex w-full items-center justify-between ">
          <div className="logo text-5xl font-extrabold"> Logo </div>
          <div className="Links flex flex-row gap-9 text-lg ">
            <Link
              className="rounded-3xl px-4 py-2  transition duration-300 hover:bg-black hover:text-white hover:underline"
              href="/"
            >
              Home
            </Link>
            <Link
              className="rounded-3xl px-4 py-2  transition duration-300 hover:bg-black hover:text-white hover:underline"
              href="/"
            >
              Products
            </Link>
            <Link
              className="rounded-3xl px-4 py-2  transition duration-300 hover:bg-black hover:text-white hover:underline"
              href="/"
            >
              Services
            </Link>
            <Link
              className="rounded-3xl px-4 py-2  transition duration-300 hover:bg-black hover:text-white hover:underline"
              href="/"
            >
              Contact us
            </Link>

            <Link className="" href="/">
              <Image
                alt="Shopping Cart"
                src="/grocery-store.png"
                height={40}
                width={30}
              ></Image>
            </Link>
            <LoginLink>Sign in</LoginLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
