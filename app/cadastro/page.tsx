"use client"

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./page.module.css";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../global";

export default function Home() {
    const router = useRouter();
    
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    function togglePasswordVisiblity() {
        setIsPasswordShown(!isPasswordShown);
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setname] = useState('');

    const handleRegister = async (e: any) => {
        e.preventDefault();

        const userData = {
            username: username,
            password: password,
            email: email,
            name: name
        };

        try {
            const response = await axios.post(api + "/Register/", userData);

            if (response.status == 200) {
                // Cadastro realizado com sucesso, redirecionar para página de login
                toast.success("Cadastro realizado com sucesso!");
                router.push("/login");
            }
        } catch (error) {
            // Mostrar erro usando toast
            toast.error("Ocorreu um erro durante o cadastro. Verifique os dados e tente novamente.");
            console.error("Erro no cadastro:", error);
        }
    };

    return (
        <main className={styles.mainContent}>
            <div className={styles.login}>
                <div className={styles.titulo}>
                    <h1>Aqua<br />Portal</h1>
                    <p>Finding the pure water</p>
                </div>
                <form onSubmit={handleRegister}>
                    <label htmlFor="username" className={styles.caixa}>
                        <div>
                            <MdDriveFileRenameOutline size={20} />
                        </div>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Usuário" 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </label>
                    <label htmlFor="password" className={styles.caixa}>
                        <div>
                            <BiSolidLockAlt size={20} />
                        </div>
                        <input
                            type={isPasswordShown ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Senha" 
                            onChange={(e) => setPassword(e.target.value)}
                            required
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
                    <label htmlFor="email" className={styles.caixa}>
                        <div>
                            <BsFillEnvelopeFill size={20} />
                        </div>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </label>
                    <label htmlFor="name" className={styles.caixa}>
                        <div>
                            <FaRegUserCircle size={20} />
                        </div>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Nome Completo" 
                            onChange={(e) => setname(e.target.value)} 
                            required
                        />
                    </label>
                    <button type="submit" className={styles.btnCadastrar}>Cadastrar</button>
                    <div className={styles.ajuda}>
                        <a href="/">Login</a>
                        <a href="/help">Precisa de Ajuda?</a>
                    </div>
                </form>
                <Toaster /> {/* Componente para exibir os toasts */}
            </div>
        </main>
    );
}
