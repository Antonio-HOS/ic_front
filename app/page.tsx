"use client"

import React from "react"
import styles from "./page.module.css"

export default function Home() {

    return (
        <main className={styles.mainContent}>
            <div className={styles.links}>
                <h1><a href="/">Aqua Portal</a></h1>
                <label htmlFor="page">
                    <a href="/comunidade">Comunidade</a>
                </label>
                <label htmlFor="page">
                    <a href="/login">Entrar</a>
                </label>
            </div>
            <div className={styles.BoxTexts}>
                <div className={styles.titles}>
                    <h1>Bem vindo ao</h1>
                    <h2>Aqua Portal</h2>
                    <h3>Sua base de dados comunitária com auxilio de IA</h3>
                </div>
                <div className={styles.Texts}>
                    <p>
                        Temos o intuito de ser a maior comuindade de laudos da região, para auxiliar todos os
                        analistas, especialistas e as empresas do ramo da qualidade de água, que é necessária para a vida não é mesmo?
                        Junte-se a nos também, submeta um laudo e contribua para melhores analises da sua região, você está salvando não
                        somente o planeta, mas vidas também, e cada ato conta, contribua, ou consuma é importante que você também seja auxiliado no que deseja!
                    </p>
                </div>
            </div>
        </main>
    )
}