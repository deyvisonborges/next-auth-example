import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { githubLogin } from "./action";

export default async function Github() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <form action={githubLogin}>
      <button>login com github</button>
    </form>
  );
}
