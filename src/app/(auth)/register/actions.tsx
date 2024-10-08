"use server";

import db from "@/lib/db";
import { redirect } from "next/navigation";

export default async function registerAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    throw new Error("Os campos devem ser preenchidos");
  }

  const user = await db.user.findUnique({
    where: { email: email, id: "" },
  });

  if (user) {
    throw new Error("Usuario ja existe");
  }

  await db.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  redirect("/");
}
