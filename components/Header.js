import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();
//   console.log(session);
  return (
    <div className="header">
      <Link href={"/"}>Home</Link>
      {!session ? (
        <button onClick={() => signIn()}>Login</button>
      ) : (
        <button onClick={() => signOut()}>Log Out</button>
      )}
      <Link href={"/register"}>Register</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
