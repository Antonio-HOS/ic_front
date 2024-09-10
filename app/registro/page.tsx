"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  const goBack = () => {
    router.back();
  };

  return (
    <main className={styles.main}>
      
      <button className={styles.Sair} onClick={goBack}>Voltar</button>
      <h1>Nome do registro</h1>
      <div className={styles.box}>
        <h3>Descrição</h3>
        <p>
          Lorem Impsulm Lorem Impsulm Lorem Impsulm Lorem Impsulm
          Lorem ImpsulmLorem ImpsulmLorem ImpsulmLorem ImpsulmLorem Impsulm
          Lorem ImpsulmLorem ImpsulmLorem ImpsulmLorem ImpsulmLorem Impsulm
        </p>
        <h3>Coordenadas</h3>
        <ul>
          <li>X: 0000000000000</li>
          <li>Y: 0000000000000</li>
        </ul>
        <a href="/" target="blank">Acessar Laudo</a>
        <a href="/" target="blank">Acessar Análise</a>
      </div>
    </main>
  );  
}