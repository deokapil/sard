"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { oauthSigninAction } from "@/actions/oauth-signin-action";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type OAuthSigninButtonsProps = { signup?: boolean };

export const OAuthSigninButtons = ({ signup }: OAuthSigninButtonsProps) => {
  const [errMessage, setErrMessage] = useState("");
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (!error) return;

    if (error === "OAuthAccountNotLinked") {
      setErrMessage("This account is already in use. Please sign in.");
    } else {
      setErrMessage("An error occured. Please try again.");
    }
  }, [error]);

  const clickHandler = async (provider: "google") => {
    try {
      await oauthSigninAction(provider);
    } catch (err) {
      console.log(err);
    }
  };

  const text = signup ? "Sign up" : "Sign in";
  return (
    <div className="flex max-w-[400px] items-center justify-center">
      <Button
        variant="secondary"
        className="w-full"
        onClick={clickHandler.bind(null, "google")}
        // onClick={() => clickHandler("google")}
      >
        <FcGoogle className="h-5 w-5" />
        {text} with Google
      </Button>

      {errMessage && (
        <p className="mt-2 text-sm font-medium text-destructive">
          {errMessage}
        </p>
      )}
    </div>
  );
};

type OAuthSigninButtonsSkeletonProps = OAuthSigninButtonsProps;

export const OAuthSigninButtonsSkeleton = ({
  signup,
}: OAuthSigninButtonsSkeletonProps) => {
  const text = signup ? "Sign up" : "Sign in";

  return (
    <div className="max-w-[400px]">
      <Button variant="secondary" className="w-full">
        <FcGoogle className="h-5 w-5" />
        {text} with Google
      </Button>
    </div>
  );
};
