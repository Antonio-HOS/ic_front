"use client"

import React from "react"
import styles from "./page.module.css"

export default function Home() {

    return (
        <main className={styles.mainContent}>
            <div className={styles.links}>
                <h1>Aqua Portal</h1>
                <label htmlFor="page">
                    <a href="/comunidade">Comunidade</a>
                </label>
                <label htmlFor="page">
                    <a href="/login">Entrar</a>
                </label>
            </div>
            
        </main>
    )
}