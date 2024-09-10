"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { IoSearchCircle } from "react-icons/io5";
import { useRouter } from 'next/navigation'

export default function Home() {
  // Fazer botao acessar e implementar caixa de busca
  // renderizar a pagina com os laudos subidos do usuario logado
  const router = useRouter()

  const goBack = () => {
    router.back();
  };

  const goLaudo = () => {
    router.push("/registro");
  };

  return (
    <main className={styles.main}>
      <button className={styles.Sair} onClick={goBack}>Sair</button>
      <h1>Bem Vindo, Usuario!</h1>
      <button><a href="/addRegistro">Adicionar registro</a></button>
      <div className={styles.box}>
        <div className={styles.boxText}>
          <h3>Nome do registro</h3>
          <p>Descrição</p>
          <h4>Coordenadas</h4>
          <ul>
            <li>X: 0000000000000</li>
            <li>Y: 0000000000000</li>
          </ul>
        </div>
        <button onClick={goLaudo}>Acessar</button>
      </div>
    </main>
  );
}