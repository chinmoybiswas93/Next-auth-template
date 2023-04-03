import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: {
        //   label: "Password",
        //   type: "password",
        //   placeholder: "password",
        // },
      },
      async authorize(credentials, req) {
        // const {user} = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        const { username, password } = credentials;
        if (username == "chinmoy" && password == "1234") {
          return { username };
        } else {
          throw new Error("Invalid Credential");
        }
      },
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
