

import Image from "next/image";

export function Header() {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-between w-full h-20 bg-white flex-row  px-10 ">
      <div>
        <a href="/" className="text-[#333333] no-underline flex justify-center items-center space-x-[-20px]">
          <Image src="/logos/logo3.png" alt="Logo" width={220} height={110} />
        </a>
        
      </div>
 
      <div className="space-x-4">
        <a
          href="/comunidade"
          className=" p-3 rounded-lg transition duration-300 hover:bg-[#e0e0e0] hover:shadow-2xl hover:scale-150"
        >
          Comunidade
        </a>
        <a
          href="/login"
          className=" p-3 rounded-lg transition duration-300 hover:bg-[#e0e0e0] hover:shadow-2xl hover:scale-150"
        >
          Entrar
        </a>
      </div>
    </div>
  );
}
