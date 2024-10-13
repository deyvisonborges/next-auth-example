import db from "@/lib/db";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    GitHub({
      clientId: "",
      clientSecret: "",
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "E-mail",
          placeholder: "Informe seu e-mail",
        },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        console.log(
          "Ao clicar em signIn no login server componentes, eu passo aqui"
        );

        const user = await db.user.findFirst({
          where: { email: String(credentials.email) },
        });

        if (!user) {
          return null;
        }

        return { ...user };
      },
    }),
  ],
});
