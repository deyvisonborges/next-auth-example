"use server";
import { useSession } from "next-auth/react";
import { auth, signOut } from "../../../auth";
import logout from "./action";
import { useEffect } from "react";

export default async function Dashboard() {
  const session = await auth();

  console.log(session);

  return (
    <>
      Bem vindo
      <form action={logout}>
        <button formAction={logout}>Logout</button>
      </form>
    </>
  );
}
