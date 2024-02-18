import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { type FunctionComponent } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const { sessionId } = auth();
  // console.log(sessionId);

  return (
    <>
      <div className="flex justify-center px-48">
        <div className="font mt-8 flex w-full items-center justify-between ">
          <Link className="" href="/">
            <div className="logo text-5xl font-extrabold"> Logo </div>
          </Link>
          <div className="Links flex flex-row gap-9 text-lg ">
            <Link
              className="rounded-3xl px-4 py-2  transition duration-300 hover:bg-black hover:text-white hover:underline"
              href="/"
            >
              Home
            </Link>
            <Link
              className="rounded-3xl px-4 py-2  transition duration-300 hover:bg-black hover:text-white hover:underline"
              href="/#Feature"
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

            {sessionId ? (
              <UserButton afterSignOutUrl="http://localhost:3000/" />
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
