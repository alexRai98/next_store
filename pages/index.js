import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Index</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Hola index</h1>
                <Link href="/stores">
                    <a>Go stores</a>
                </Link>
            </main>
        </div>
    );
}
