export default function RegisterPage() {
  return (
    <form>
      <input type="text" placeholder="Nome" id="name" />
      <input type="email" placeholder="E-mail" id="email" />
      <input type="password" placeholder="Senha" id="password" />

      <button>Cadastrar</button>
    </form>
  );
}
