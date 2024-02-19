import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

import Link from "next/link";

import { type FunctionComponent } from "react";
import CartPopup from "./cartPopup";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const { sessionId } = auth();
  return (
    <>
      <div className="fixed  top-0 z-50 w-full bg-white py-4 shadow-lg">
        <div className="flex justify-center px-48">
          <div className="font flex w-full items-center justify-between ">
            <Link className="" href="/">
              <div className="logo text-5xl font-extrabold"> Logo </div>
            </Link>
            <div className="Links flex flex-row gap-9 text-lg ">
              <Link
                className=" border-0 border-b-4  border-transparent px-4  py-2 transition   duration-300 hover:border-black "
                href="/"
              >
                Home
              </Link>
              <Link
                className=" border-0 border-b-4  border-transparent px-4  py-2 transition   duration-300 hover:border-black "
                href="/#Feature"
              >
                Products
              </Link>
              <Link
                className=" border-0 border-b-4  border-transparent px-4  py-2 transition   duration-300 hover:border-black "
                href="/"
              >
                Services
              </Link>
              <Link
                className=" border-0 border-b-4  border-transparent px-4  py-2 transition   duration-300 hover:border-black "
                href="/"
              >
                Contact us
              </Link>

              <CartPopup />
              <div className="flex items-center">
                {sessionId ? (
                  <UserButton afterSignOutUrl="http://localhost:3000/" />
                ) : (
                  <SignInButton />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
