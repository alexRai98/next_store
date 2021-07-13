import { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react"
import Head from "next/head";
import Link from "next/link";

import styles from "@styles/Home.module.css";
import ButtonLogin from "@components/Button";

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
                <h3>Handler your buy prices</h3>
                {user === null && (
                    <ButtonLogin onClick={handleLogin}>Login with google</ButtonLogin>
                )}
                {user && (
                    <>
                        <h1>Welcome!!! {user.name}</h1>
                        <img alt="Avatar" src={user.avatar} />
                        <Button colorScheme="red" variant="solid" onClick={logout} marginY="15px">Logout</Button>
                        <Link href="stores">
                            <Button colorScheme="teal" variant="outline">Dashboard</Button>
                        </Link>
                    </>
                )}
            </main>
        </div>
    );
}
