"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
export default function Auth() {
  const { sessionId } = useAuth();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      {show && (
        <div>
          {sessionId ? (
            <UserButton afterSignOutUrl="http://localhost:3000/" />
          ) : (
            <SignInButton />
          )}
        </div>
      )}
    </>
  );
}
