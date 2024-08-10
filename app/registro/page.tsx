import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
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
        <img src="/" alt="Imagem"/>
        <button>Acessar Laudo</button>
        <button>Acessar Análise</button>
      </div>
      <button><a href="/inicio">Voltar</a></button>
    </main>
  );  
}