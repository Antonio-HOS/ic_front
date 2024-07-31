import Image from "next/image";
import styles from "./page.module.css";
import { IoSearchCircle } from "react-icons/io5";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Test</h1>
      <div className={styles.boxSearch}>
        <input type="text" name="" id="" placeholder="Digite o nome do registro..." />
        <button>
          <IoSearchCircle style={{scale: 3}}/>
        </button>
      </div>
      <button>Adicionar registro</button>
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
        <img src="/" alt="Imagem" />
        <button>Acessar</button>
      </div>
    </main>
  );  
}