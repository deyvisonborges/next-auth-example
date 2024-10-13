import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function FormLogin() {
  const [formError, setFormError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    // const data = new FormData(e.currentTarget);
    // const email = data.get("email") as string;
    // const password = data.get("password") as string;

    signIn("credentials", {
      email: "dev@dev.com",
      password: "123123",
      redirect: false,
      redirectTo: "/",
    })
      .then((res) => {
        if (res && res.error === "CredentialsSignin") {
          setFormError("Erro ao fazer o login");
        } else {
          router.push("/dashboard");
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <p>{formError}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Informe seu email" />
        <input
          type="password"
          name="password"
          placeholder="Informe sua senha"
        />
        <button>Logar</button>
      </form>
    </>
  );
}
