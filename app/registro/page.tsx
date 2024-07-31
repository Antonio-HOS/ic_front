import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Test</h1>
      <div className={styles.form}>
        <form action="">
          <input type="text" placeholder="email"/>
          <input type="password" placeholder="senha" />
          <button type="submit">Entrar</button>
        </form>
        <a href="/recuperar">Recuperar Senha</a>
      </div>
    </main>
  );  
}