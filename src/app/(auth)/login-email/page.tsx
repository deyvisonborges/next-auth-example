import { auth } from "../../../../auth";
import { loginEmail } from "./action";

export default async function LoginEmail() {
  const session = await auth();
  console.log(session);

  return (
    <form action={loginEmail}>
      <button>Receba seu login por email</button>
    </form>
  );
}
