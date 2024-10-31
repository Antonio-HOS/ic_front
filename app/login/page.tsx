"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";
import { api } from "../global";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const [isPasswordShown, setIsPasswordShown] = React.useState(false);

  function togglePasswordVisiblity() {
    setIsPasswordShown(!isPasswordShown);
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const irParaOutraPaginaComToken = async () => {
    try {
      // Substitua 'seu_token_aqui' pelo token real
      const token = localStorage.getItem("token");

      // Configure o header 'Authorization' com o token
      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };

      // Faça uma solicitação HTTP com o token no header
      const response = await axios.get("/inicio", config);
      router.push("/inicio");
      // Se a solicitação for bem-sucedida, navegue para a outra página
      if (response.status === 200) {
        router.push("/inicio");
      }
    } catch (error) {
      console.error("Erro ao fazer a solicitação com token:", error);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(api + "/login", data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        // toast.success("Login efetuado com sucesso!");
        irParaOutraPaginaComToken();
      }
    } catch (error) {
      toast.error(
        "Ocorreu um erro durante o login. Verifique os dados e tente novamente."
      );
      console.error("Erro no cadastro:", error);
      // toast.error("Email ou senha incorretos!");
    }
  };

  return (
    <main className={styles.mainContent}>
      <Image
        className="drop-shadow-2xl md:hidden"
        src="/logos/logo.png"
        alt="Logo"
        width={120}
        height={120}
      />
      <div
        className={`${styles.login} w-[95%] md:w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black`}
      >
        <div className="md:flex flex-col items-center justify-center w-full border-r-2 border-r-white border-opacity-20 mr-8 hidden">
          <Image
            className="drop-shadow-2xl"
            src="/logos/logo.png"
            alt="Logo"
            width={250}
            height={250}
          />

          <p className="text-2xl font-abel">Finding the pure water</p>
        </div>
        <form onSubmit={handleLogin}>
          <h2 className="text-3xl">Login</h2>
          <label htmlFor="username" className={`${styles.caixa}`}>
            <div>
              <BsFillEnvelopeFill size={20} />
            </div>
            <input
              className={styles.input}
              type="text"
              name="username"
              id="username"
              placeholder="Usuário"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="password" className={styles.caixa}>
            <div>
              <BiSolidLockAlt size={20} />
            </div>
            <input
              className={styles.input}
              type={isPasswordShown ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            {isPasswordShown ? (
              <button
                onClick={togglePasswordVisiblity}
                className={styles.togglePassword}
                type="button"
              >
                <AiFillEyeInvisible size={20} />
              </button>
            ) : (
              <button
                onClick={togglePasswordVisiblity}
                className={styles.togglePassword}
                type="button"
              >
                <AiFillEye size={20} />
              </button>
            )}
          </label>
          <button className={styles.button} type="submit" id="login">
            Entrar
          </button>
          <div className={styles.ajuda}>
            <a href="/">Início</a>
            <a href="/cadastro">Cadastro</a>
          </div>
        </form>
        <Toaster /> {/* Componente para exibir os toasts */}
      </div>
    </main>
  );
}
