"use client"

import React from "react"
import { useState } from "react";
import axios from "axios"
import { api } from "../global";
import { BsFillEnvelopeFill } from "react-icons/bs"
import { BiSolidLockAlt } from "react-icons/bi"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { useRouter } from 'next/navigation'
import styles from "./page.module.css"

export default function Home() {
    const router = useRouter()
    
    const [isPasswordShown, setIsPasswordShown] = React.useState(false)

    function togglePasswordVisiblity() {
        setIsPasswordShown(!isPasswordShown)
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const irParaOutraPaginaComToken = async () => {

        try {
            // Substitua 'seu_token_aqui' pelo token real
            const token = localStorage.getItem('token');

            // Configure o header 'Authorization' com o token
            const config = {
                headers: {
                    Authorization: `Token ${token}`,
                },
            };

            // Faça uma solicitação HTTP com o token no header
            const response = await axios.get('/inicio', config);
            router.push("/inicio")
            // Se a solicitação for bem-sucedida, navegue para a outra página
            if (response.status === 200) {
                router.push("/inicio")
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação com token:', error);
        }
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post(api + 'login', {
                username: username,
                password: password,
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                // toast.success("Login efetuado com sucesso!");
                irParaOutraPaginaComToken();
            }
        } catch (error) {
            console.error('Erro durante a autenticação:', error);
            // toast.error("Email ou senha incorretos!");
        }
    };

    return (
        <main className={styles.mainContent}>
            <div className={styles.login}>
                <div className={styles.titulo}>
                    <h1>Aqua<br></br>Portal</h1>
                    <p>Finding the pure water</p>
                </div>
                <form onSubmit={handleLogin}>
                    <label htmlFor="username" className={styles.caixa}>
                        <div>
                            <BsFillEnvelopeFill size={20} />
                        </div>
                        <input type="text" name="username" id="username" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label htmlFor="password" className={styles.caixa}>
                        <div>
                            <BiSolidLockAlt size={20} />
                        </div>
                        <input
                            type={isPasswordShown ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Senha" onChange={(e) => setPassword(e.target.value)}
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
                    <button id="login">Entrar</button>
                    <div className={styles.ajuda}>
                        <a href="/cadastro">Cadastro</a>
                        <a href="/recuperar">Redefinir Senha</a>
                        <a href="/help">Precisa de Ajuda?</a>
                    </div>
                </form>
            </div>
        </main>
    )
}