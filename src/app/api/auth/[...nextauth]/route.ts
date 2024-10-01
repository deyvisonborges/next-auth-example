import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
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
      authorize: () => {
        console.log("op");
        return null;
      },
    }),
  ],
});
