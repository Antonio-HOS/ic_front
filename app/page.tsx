"use client"

import React from "react"
import styles from "./page.module.css"

export default function Home() {
    return (
        <main className="flex items-center justify-center flex-col h-screen">
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-20 bg-[#4a90e2] gap-40">
                <h1>
                    <a href="/" className="text-[#333333] no-underline">Aqua Portal</a>
                </h1>
                <a href="/comunidade" className="bg-[#f5f5f5] p-5 rounded-lg transition duration-500 hover:bg-[#e0e0e0]">Comunidade</a>
                <a href="/login" className="bg-[#f5f5f5] p-5 rounded-lg transition duration-500 hover:bg-[#e0e0e0]">Entrar</a>
            </div>
            <div className="w-3/5 flex items-center justify-center gap-8">
                <div className="w-2/5 flex flex-col items-start justify-center">
                    <h1>Bem vindo ao</h1>
                    <h2 className="text-6xl">Aqua Portal</h2>
                    <h3>Sua base de dados comunitária com auxílio de IA</h3>
                </div>
                <div className="flex flex-col text-lg text-justify w-1/2">
                    <p>
                        Temos o intuito de ser a maior comunidade de laudos da região, para auxiliar todos os
                        analistas, especialistas e as empresas do ramo da qualidade de água, que é necessária para a vida, não é mesmo?
                        Junte-se a nós também, submeta um laudo e contribua para melhores análises da sua região; você está salvando não
                        somente o planeta, mas vidas também, e cada ato conta. Contribua, ou consuma; é importante que você também seja auxiliado no que deseja!
                    </p>
                </div>
            </div>
        </main>
    );
}
