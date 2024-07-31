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
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

export default function Home() {
    const router = useRouter()
    
    const [isPasswordShown, setIsPasswordShown] = React.useState(false)

    function togglePasswordVisiblity() {
        setIsPasswordShown(!isPasswordShown)
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');

    return (
        <main className={styles.mainContent}>
            <div className={styles.login}>
                <div className={styles.titulo}>
                    <h1>Aqua<br></br>Portal</h1>
                    <p>Finding the pure water</p>
                </div>
                <form >
                    <label htmlFor="username" className={styles.caixa}>
                          <div>
                            <MdDriveFileRenameOutline size={20} />
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
                    <label htmlFor="Email" className={styles.caixa}>
                          <div>
                            <BsFillEnvelopeFill size={20} />
                          </div>
                          <input type="text" name="Email" id="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="FirstName" className={styles.caixa}>
                          <div>
                            <FaRegUserCircle size={20} />
                          </div>
                          <input type="text" name="FirstName" id="FirstName" placeholder="Nome Completo" onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                    <button id="login">Cadastrar</button>
                    <div className={styles.ajuda}>
                        <a href="/">Login</a>
                        <a href="/help">Precisa de Ajuda?</a>
                    </div>
                </form>
            </div>
        </main>
    )
}