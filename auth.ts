import db from "@/lib/db";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";

const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  //o adapter ajuda a grabar na base de dados
  adapter: PrismaAdapter(prisma), // por padroa ele bate na dtabase
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHub({
      // permitir linkagem de email caso ja haja registro previamente do usuario
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
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

        const user = await db.user.findUnique({
          where: { email: String(credentials.email) },
        });

        if (user) {
          return { ...user };
        }
        return null;
      },
    }),
  ],
});
