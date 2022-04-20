import Head from "next/head";
import Image from "next/image";

import utilStyles from "../styles/utils.module.css";

import { auth, signInWithGoogle } from "../services/firebase";
import { useEffect, useState } from "react";
import { MessageView } from "../components/MessageView";

export default function Home() {
  const [, rerender] = useState(0);

  // hacky workaround to force rerender
  useEffect(() => {
    auth.onAuthStateChanged(() => {
      rerender((r) => r + 1);
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <meta name="og:title" content={"React Chat App"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <div className="header">
          <a href="#default" className="logo">
            React Chat App Demo
          </a>
          {auth.currentUser && (
            <div className="header-right">
              {auth?.currentUser?.photoURL && (
                <Image
                  priority
                  src={auth.currentUser.photoURL}
                  className={utilStyles.borderCircle}
                  height={30}
                  width={30}
                />
              )}
              <div className="header-right-item">
                {auth.currentUser.displayName}
              </div>
              <button
                className="header-right-item"
                onClick={() => auth.signOut()}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
      <body>
        {auth.currentUser ? (
          <MessageView />
        ) : (
          <div className="login-container">
            <h1>Login</h1>
            <p>
              <button onClick={signInWithGoogle}>Login with Google</button>
            </p>
          </div>
        )}
      </body>
    </>
  );
}
