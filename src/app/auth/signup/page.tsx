import { Button } from "@/components/ui/button";
import { SignupForm } from "./_components/signup-form";
import Link from "next/link";
import { CardWrapper } from "../_components/card-wrapper";

export default function SignupPage() {
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/signin"
      showSocial
      signup
    >
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight">Sign Up</h1>

        {/* Signup Form */}
        <div className="my-4 h-1 bg-muted" />
        <SignupForm />
      </div>
    </CardWrapper>
  );
}
