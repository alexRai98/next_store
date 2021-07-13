import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "@styles/Home.module.css";
import Button from "@components/Button";

import { loginWithGoogle, onAuthStateChange, logout } from "@firebase/client";

export default function Home() {
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        onAuthStateChange(setUser);
    }, []);
    const handleLogin = () => {
        loginWithGoogle();
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>home</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Welcome</h1>
                <h3>Handle your buy prices</h3>
                {user === null && (
                    <Button onClick={handleLogin}>Login with google</Button>
                )}
                {user && (
                    <>
                        <h2>Welcome {user.name}</h2>
                        <img alt="Avatar" src={user.avatar} />
                        <button onClick={logout}>Logout</button>
                        <Link href="stores">
                            <a>Dashboard</a>
                        </Link>
                    </>
                )}
            </main>
        </div>
    );
}
