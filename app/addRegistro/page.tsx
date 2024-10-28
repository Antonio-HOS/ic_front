"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ArrowBigLeft, ArrowLeft, LogOut } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const [Titulo, setTitulo] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [Arq, setArq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the token from localStorage
    const token = localStorage.getItem("token");

    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append("title", Titulo);
    formData.append("description", Descricao);
    formData.append("entrada", Arq); // Ensure the file is appended

    try {
      const res = await axios.post("http://127.0.0.1:8000/Record/", formData, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data", // Important for file upload
        },
      });
      console.log("Record created:", res.data);
      toast.success("Registro realizado com sucesso!");
      // You can redirect or show a success message here
    } catch (error) {
      toast.error(
        "Ocorreu um erro durante o registro. Verifique os dados e tente novamente."
      );
      console.error("Error creating record:", error);
    }
  };

  return (
    <main className={styles.mainContent}>
      <button
        className={
          "absolute top-7 left-7 cursor-pointer  hover:bg-white   transition-all duration-500 p-4 rounded-full"
        }
        onClick={goBack}
      >
        <ArrowLeft className="w-8 h-8" />
      </button>
      <div
        className={`${styles.login} w-[95%] md:w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black`}
      >
        <div className="lg:flex flex-col items-center justify-center w-full border-r-2 border-r-white border-opacity-20 mr-8 hidden">
          <Image
            className="drop-shadow-2xl"
            src="/logos/logo.png"
            alt="Logo"
            width={250}
            height={250}
          />

          <p className="text-2xl font-abel">Finding the pure water</p>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl">Registrar</h2>
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
          <button className={styles.button} type="submit" id="login">
            Registrar
          </button>
        </form>
        <Toaster /> {/* Componente para exibir os toasts */}
      </div>
      {/* <button className={styles.Sair} onClick={goBack}>Voltar</button>
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
        <Toaster />
      </div> */}
    </main>
  );
}
