import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useState } from "react";

export function FormLogin() {
  const router = useRouter();

  const [formError, setFormError] = useState<string>("");
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // const data = Object.fromEntries(new FormData(e.currentTarget));
      // const data = new FormData(e.currentTarget);
      // const email = data.get("email") as string;
      // const password = data.get("password") as string;

      signIn("credentials", {
        email: "deyv@email.com",
        password: "123123",
        redirect: false,
        redirectTo: "/dashboard",
      })
        .then((res) => {
          if (res && res.error === "CredentialsSignin") {
            console.error(res.error);
            setFormError("Erro ao fazer o login");
          } else {
            router.push("/dashboard");
          }
        })
        .catch((e) => console.log(e));
    },
    [router]
  );

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
