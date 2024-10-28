

// import Image from "next/image";

// export function Header() {
//   return (
//     <div className="fixed top-0 left-0 flex items-center justify-between w-full h-20 bg-white flex-row z-30 px-10 ">
//       <div>
//         <a href="/" className="text-[#333333] no-underline flex justify-center items-center space-x-[-20px]">
//           <Image src="/logos/logo3.png" alt="Logo" width={220} height={110} />
//         </a>
        
//       </div>
 
//       <div className="space-x-4">
//         <a
//           href="/comunidade"
//           className=" p-3 rounded-lg transition duration-300 hover:bg-[#e0e0e0] hover:shadow-2xl hover:scale-150"
//         >
//           Comunidade
//         </a>
//         <a
//           href="/login"
//           className=" p-3 rounded-lg transition duration-300 hover:bg-[#e0e0e0] hover:shadow-2xl hover:scale-150"
//         >
//           Entrar
//         </a>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones de menu e fechar
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 flex items-center justify-between w-full h-20 bg-white flex-row z-30 px-10 ">
      <h1>
        <Image width={220} height={110} src="/logos/logo3.png" alt="Logo" />
      </h1>
      <button
        className="md:hidden" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
        color="black"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav
        className={`${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } absolute top-[60px] left-0 w-full bg-white px-2 z-50 transition-all duration-300 ease-in-out md:static md:flex md:max-h-none md:opacity-100 md:w-auto`}
      >
        <ul className="flex flex-col items-center md:flex-row md:space-x-4">
          <li className="w-full md:w-auto">
            <Link href="/comunidade" className="block py-2 px-2 md:px-4 hover:bg-slate-200 rounded-xl transition-all">
              Comunidade
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              href="/login"
              className="block py-2 px-2 md:px-4 hover:bg-slate-200 rounded-xl transition-all"
            >
              Login
            </Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}
