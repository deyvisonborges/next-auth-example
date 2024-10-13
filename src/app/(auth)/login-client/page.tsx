import { useRouter } from "next/navigation";
import { FormLogin } from "./form-login";
import { useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const session = useSession();

  if (session.status == "authenticated") {
    router.push("/dashboard");
  }

  return <FormLogin />;
}
