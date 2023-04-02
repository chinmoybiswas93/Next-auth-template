import { useSession, signIn } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>Welcome to Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque
          facere magni deleniti odio libero, iure id sapiente nesciunt
          similique?
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Sorry Your are not Permitted</h1>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
}
