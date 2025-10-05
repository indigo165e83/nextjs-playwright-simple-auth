import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

// ダミーユーザー：普通は DB から取得
// password: password123 （bcrypt ハッシュ）
const users = [
  {
    id: "1",
    name: "Test User",
    email: "test@example.com",
    passwordHash: "$2b$10$6pWGeOwnAKMQc1VUZD4dOeeJyA0d/ohvgOwBY1o5kVF3QDH2SL5oy" // bcrypt でハッシュ済みパスワード
  }
];

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = users.find(u => u.email === credentials?.email);
        if (!user) return null;

        const isValid = credentials && await compare(credentials.password, user.passwordHash);
        if (!isValid) return null;

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login", // カスタムログインページ
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };