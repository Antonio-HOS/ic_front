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

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');

    return (
        <main className={styles.mainContent}>
            <div className={styles.login}>
                <form >
                    <label htmlFor="username" className={styles.caixa}>
                          <div>
                            <MdDriveFileRenameOutline size={20} />
                          </div>
                          <input type="text" name="username" id="username" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} />
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
                </form>
            </div>
        </main>
    )
}