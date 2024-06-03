"use client";

import { signIn } from "next-auth/react";
import { PrimaryButton } from "./Button";

export const LoginButton = () => {
  return <PrimaryButton onClick={() => signIn()}>로그인</PrimaryButton>;
};
