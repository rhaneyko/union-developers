"use client";

import Image from "next/image";

interface HeroProps {
  id: string;
}

export default function Hero({ id }: HeroProps) {
  return (
    <section
      className="relative flex flex-col mt-[114px] md:flex-row items-center justify-center 
                 min-h-screen w-full text-center md:text-left px-6 md:px-[244px] 
                 bg-[url('/images/hero-mobile.jpg')] bg-cover bg-center bg-no-repeat 
                 md:bg-[url('/images/hero-desktop.jpg')]" 
      id={id}
    >
      {/* 🔹 Texto */}
      <div className="relative z-10 max-w-3xl md:w-2/4">
        <h1 className="text-[38px] md:text-[42px] font-bold mb-6 leading-10 animate-fade-in">
          Ganhe{" "}
          <span className="text-[38px] md:text-[42px] font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            experiência
          </span>{" "}
          como desenvolvedor júnior
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 text-start mb-10 md:mb-14 w-full md:w-[650px] tracking-wider">
          Descubra como o Union oferece um ambiente prático e imersivo para desenvolvedores juniors ganharem experiência de mercado, mesmo sem estar em uma empresa. Participe dessa experiência única e impulsione sua carreira como desenvolvedor!
        </p>
        <a
          href="#inscricao"
          className="items-center px-14 md:px-32 py-5 md:py-6 text-lg md:text-xl font-bold text-white rounded-lg shadow-md
                   bg-gradient-to-r from-[#851D86] to-[#0048FE] 
                   hover:from-[#6B1570] hover:to-[#003BBC] 
                   transition-all"
        >
          Quero participar
        </a>
      </div>

      {/* 🔹 Imagem do Hero (REMOVIDA NO MOBILE) */}
      <div className="hidden md:flex md:w-2/5 md:justify-end">
        <Image
          src="/images/hero-image-desktop.svg"
          alt="Hero Illustration"
          width={500}
          height={500}
          className="w-[400px] md:w-[500px] h-auto md:h-[500px] mt-8 slow-bounce"
        />
      </div>
    </section>
  );
}
