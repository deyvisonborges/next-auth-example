"use server";

import { signIn } from "../../../../auth";

export async function loginEmail(formData: FormData) {
  const email = formData.get("email") as string;
  await signIn("mailgun", { email });
}
