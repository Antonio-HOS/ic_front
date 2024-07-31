import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Recuperação de Senha</h1>
      <p>Digite o email utilizado para a criação da conta no sistema, lá acesse o link. (verifique o spam)</p>
      <div className={styles.form}>
        <form action="">
          <input type="text" placeholder="email"/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );  
}