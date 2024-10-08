"use client";

import registerAction from "./actions";

export default function RegisterPage() {
  return (
    <form action={registerAction}>
      <input type="text" placeholder="Nome" id="name" name="name" />
      <input type="email" placeholder="E-mail" id="email" name="email"/>
      <input type="password" placeholder="Senha" id="password" name="password" />

      <button>Cadastrar</button>
    </form>
  );
}
