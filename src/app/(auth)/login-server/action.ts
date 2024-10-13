"use server";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn } from "../../../../auth";

export default async function loginServer(formData: FormData) {
  const { email, password } = Object.fromEntries(formData.entries());

  try {
    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        error.message = "Credenciais invalidas";
        throw error;
      }
    }
  }

  redirect("/");
}
