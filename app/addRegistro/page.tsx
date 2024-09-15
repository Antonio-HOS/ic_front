"use client"

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const [Titulo, setTitulo] = useState('');
  const [Descricao, setDescricao] = useState('');
  const [Arq, setArq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the token from localStorage
    const token = localStorage.getItem('token');

    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append('title', Titulo);
    formData.append('description', Descricao);
    formData.append('entrada', Arq);  // Ensure the file is appended

    try {
      const res = await axios.post('http://127.0.0.1:8000/Record/', formData, {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'multipart/form-data',  // Important for file upload
        },
      });
      console.log('Record created:', res.data);
      toast.success("Registro realizado com sucesso!");
      // You can redirect or show a success message here
    } catch (error) {
      toast.error("Ocorreu um erro durante o registro. Verifique os dados e tente novamente.");
      console.error('Error creating record:', error);
    }
  };

  return (
    <main className={styles.mainContent}>
      <button className={styles.Sair} onClick={goBack}>Voltar</button>
      <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Titulo" className={styles.caixa}>
            <div>
              <MdDriveFileRenameOutline size={20} />
            </div>
            <input 
              type="text" 
              name="Titulo" 
              id="Titulo" 
              placeholder="Título" 
              value={Titulo}
              onChange={(e) => setTitulo(e.target.value)} 
              required
            />
          </label>
          <label htmlFor="Descricao" className={styles.caixa}>
            <div>
              <TbFileDescription size={20} />
            </div>
            <input 
              type="text" 
              name="Descricao" 
              id="Descricao" 
              placeholder="Descrição" 
              value={Descricao}
              onChange={(e) => setDescricao(e.target.value)} 
              required
            />
          </label>
          <label htmlFor="arq" className={styles.caixa}>
            <input 
              type="file" 
              name="arq" 
              id="arq" 
              onChange={(e) => setArq(e.target.files[0])} 
              required
            />
          </label>
          <button type="submit" id="login">Registrar</button>
        </form>
        <Toaster /> {/* Componente para exibir os toasts */}
      </div>
    </main>
  );
}
