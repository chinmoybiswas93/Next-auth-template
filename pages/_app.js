import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import "../styles/style.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Header></Header>
      <div className="main-app">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
