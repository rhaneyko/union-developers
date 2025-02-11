"use client";

import Image from "next/image";

interface HeroProps {
  id: string;
}

export default function Hero({ id }: HeroProps) {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-center 
                 min-h-screen w-full text-center md:text-left px-6 md:px-[244px] 
                 bg-[url('/images/hero-mobile.jpg')] md:bg-[url('/images/hero-desktop.jpg')] 
                 bg-cover bg-center bg-no-repeat"
      id={id}
    >
      {/* Texto */}
      <div className="relative z-10 max-w-3xl md:w-2/4">
        <h1 className="text-[32px] sm:text-[36px] md:text-[42px] font-bold mb-6 leading-tight animate-fade-in">
          Ganhe{" "}
          <span className="text-[32px] sm:text-[36px] md:text-[42px] font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            experiência
          </span>{" "}
          como desenvolvedor júnior
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-300 text-center md:text-start mb-6 md:mb-10 w-full md:w-[650px] tracking-wider">
          Descubra como o Union oferece um ambiente prático e imersivo para desenvolvedores juniores ganharem experiência de mercado, mesmo sem estar em uma empresa. Participe dessa experiência única e impulsione sua carreira como desenvolvedor!
        </p>
        <a
          href="#inscricao"
          className="inline-block px-10 sm:px-14 md:px-32 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-bold text-white rounded-lg shadow-md
                     bg-gradient-to-r from-[#851D86] to-[#0048FE] 
                     hover:from-[#6B1570] hover:to-[#003BBC] 
                     transition-all"
        >
          Quero participar
        </a>
      </div>

      {/* Imagem do Hero (Exibida apenas em telas médias e grandes) */}
      <div className="hidden sm:flex md:w-2/5 md:justify-end mt-8 md:mt-0">
        <Image
          src="/images/hero-image-desktop.svg"
          alt="Hero Illustration"
          width={400}
          height={400}
          className="w-[300px] sm:w-[400px] md:w-[500px] h-auto slow-bounce"
        />
      </div>
    </section>
  );
}
