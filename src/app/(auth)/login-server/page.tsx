import loginServer from "./action"

export default function Login() {
  return <form action={loginServer}>
    <input type="text" name="email" placeholder="Informe seu email" />
    <input type="password" name="password" placeholder="Informe sua senha" />
    <button>Logar</button>
  </form>
}