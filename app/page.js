import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1> welcome to homepage</h1>
        <ol>
          <li>
            login account click <Link href={'/login'}>here</Link>
          </li>
          <li>github <a href="https://github.com/rifqirafifakbar/myApp-cms">here</a></li>
        </ol>

      </main>

    </div>
  );
}
