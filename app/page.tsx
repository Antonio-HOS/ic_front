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
            <div className={styles.BoxTexts}>
                <div className={styles.titles}>
                    <h1>Lorem Ipslum</h1>
                    <h1>Lorem Ipslum</h1>
                    <h1>Lorem Ipslum</h1>
                    <h1>Lorem Ipslum</h1>
                </div>
                <div className={styles.Texts}>
                    <p>
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                    </p>
                </div>
            </div>
            <div className={styles.Texts}>
                    <p>
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                    </p>
                    <br />
                    <p>
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                    </p>
                    <br />
                    <p>
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                        Lorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem IpslumLorem Ipslum
                    </p>
            </div>
        </main>
    )
}