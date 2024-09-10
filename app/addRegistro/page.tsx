"use client"

import React from "react"
import { useState } from "react";
import axios from "axios"
import { api } from "../global";
import { useRouter } from 'next/navigation'
import styles from "./page.module.css"
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { RiTreasureMapLine } from "react-icons/ri";
import { FaFileImport } from "react-icons/fa";

export default function Home() {
  const router = useRouter()

  const goBack = () => {
    router.back();
  };

  const [Titulo, setTitulo] = useState('');
  const [Descricao, setDescricao] = useState('');
  const [X, setX] = useState('');
  const [Y, setY] = useState('');
  const [Arq, setArq] = useState('');

  return (
    <main className={styles.mainContent}>
      <button className={styles.Sair} onClick={goBack}>Voltar</button>
      <div className={styles.login}>
        <form >
          <label htmlFor="Titulo" className={styles.caixa}>
            <div>
              <MdDriveFileRenameOutline size={20} />
            </div>
            <input type="text" name="Titulo" id="Titulo" placeholder="Título" onChange={(e) => setTitulo(e.target.value)} />
          </label>
          <label htmlFor="Descricao" className={styles.caixa}>
            <div>
              <TbFileDescription size={20} />
            </div>
            <input type="text" name="Descricao" id="Descricao" placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)} />
          </label>
          <label htmlFor="X" className={styles.caixa}>
            <div>
              <RiTreasureMapLine size={20} />
            </div>
            <input type="text" name="X" id="X" placeholder="Coordenada X" onChange={(e) => setX(e.target.value)} />
          </label>
          <label htmlFor="Y" className={styles.caixa}>
            <div>
              <RiTreasureMapLine size={20} />
            </div>
            <input type="text" name="Y" id="Y" placeholder="Coordenada Y" onChange={(e) => setY(e.target.value)} />
          </label>
          <label htmlFor="Y" className={styles.caixa}>
            <div>
              <FaFileImport size={20} />
            </div>
            <input type="file" name="arq" id="arq" onChange={(e) => setArq(e.target.value)} />
          </label>
          <button id="login">Registrar</button>
        </form>
      </div>
    </main>
  )
}