"use client";

import React from "react";
import { Header } from "@/componentes/header";
import Image from "next/image";
import styles from "./page.module.css";
import { BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex items-center  lg:justify-center flex-col h-screen  `}
    >
      <Header />
      <div className="flex h-16"></div>
      <div className="w-full lg:w-3/5 flex items-center lg:justify-center gap-8 flex-col lg:flex-row pb-7">
        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center space-y-[-28px] mt-32">
          <h1 className="text-3xl  abel">Bem vindo ao</h1>
          <Image
            className="drop-shadow-2xl"
            src="/logos/logo.png"
            alt="Logo"
            width={250}
            height={250}
          />
          <div className="flex flex-col justify-center">
            <h3 className="abel text-xl ">Sua base de dados comunitária</h3>
            <div className="flex justify-center space-x-4">
              <h3 className="abel text-xl flex">com auxílio de IA</h3>
              <BrainCircuit className="w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-lg text-justify w-full px-3  lg:px-0 lg:w-2/3 abel space-y-4 items-center">
          <p>
            Nosso propósito é construir a maior comunidade de laudos da região,
            dedicando-se a apoiar analistas, especialistas e empresas que atuam
            na área de qualidade da água — um recurso essencial para a vida.
          </p>
          <p>
            Convidamos você a se juntar a nós! Submeta um laudo e ajude a
            aprimorar as análises em sua comunidade. Com sua colaboração, você
            estará contribuindo não apenas para a preservação do planeta, mas
            também para a proteção de vidas. Cada gesto conta!
          </p>
          <p>
            Participe, consuma com consciência e saiba que estamos aqui para
            auxiliá-lo em suas necessidades!
          </p>
          <Link href={"/login"}>
            <div className="bg-gradient-to-r from-[#1791c8] to-purple-500 hover:shadow-2xl hover:scale-125 shadow-sm transition-all duration-300 rounded-2xl w-40 py-2 flex justify-center">
              <p className="text-center text-white">Entrar</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
