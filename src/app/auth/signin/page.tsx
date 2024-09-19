import { Button } from "@/components/ui/button";
import { SigninForm } from "./_components/signin-form";
import Link from "next/link";
import { Suspense } from "react";
import { ForgotPasswordForm } from "./_components/forgot-password-form";
import { CardWrapper } from "../_components/card-wrapper";

export default function SigninPage() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/signup"
      showSocial
    >
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight">Sign In</h1>

        {/* Signin Form */}
        <div className="my-4 h-1 bg-muted" />
        <SigninForm />

        {/* OAuth Links */}

        {/* Forgot Password Dialog */}
        <ForgotPasswordForm />
      </div>
    </CardWrapper>
  );
}
