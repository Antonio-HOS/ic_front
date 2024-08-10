import Image from "next/image";
import styles from "./page.module.css";
import { IoSearchCircle } from "react-icons/io5";

export default function Home() {
  // Fazer botao acessar e implementar caixa de busca
  // renderizar a pagina com os laudos subidos do usuario logado

  return (
    <main className={styles.main}>
      <h1>Test</h1>
      <div className={styles.boxSearch}>
        <label htmlFor="">
          <input type="text" name="" id="" placeholder="Digite o nome do registro..." />
          <button>
            <IoSearchCircle size={40}/>
          </button>
        </label>
      </div>
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
        <img src="/" alt="Imagem" />
        <button>Acessar</button>
      </div>
    </main>
  );  
}