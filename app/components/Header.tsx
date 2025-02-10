"use client"; // Certifique-se de que este componente é renderizado no lado do cliente

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Configuração do Intersection Observer para cada seção
  const [heroRef, heroInView] = useInView({ threshold: 0.5 });
  const [sobreRef, sobreInView] = useInView({ threshold: 0.5 });
  const [pilaresRef, pilaresInView] = useInView({ threshold: 0.5 });
  const [beneficiosRef, beneficiosInView] = useInView({ threshold: 0.5 });
  const [etapasRef, etapasInView] = useInView({ threshold: 0.5 });
  const [depoimentosRef, depoimentosInView] = useInView({ threshold: 0.5 });
  const [duvidasRef, duvidasInView] = useInView({ threshold: 0.5 });

  // Atualiza o link ativo com base na seção visível
  useEffect(() => {
    if (heroInView) setActiveLink("");
    if (sobreInView) setActiveLink("sobre");
    if (pilaresInView) setActiveLink("pilares");
    if (beneficiosInView) setActiveLink("beneficios");
    if (etapasInView) setActiveLink("etapas");
    if (depoimentosInView) setActiveLink("depoimentos");
    if (duvidasInView) setActiveLink("duvidas");
  }, [heroInView, sobreInView, pilaresInView, beneficiosInView, etapasInView, depoimentosInView, duvidasInView]);

  const menuItems = [
    { name: "Sobre", href: "#sobre", ref: sobreRef },
    { name: "Pilares", href: "#pilares", ref: pilaresRef },
    { name: "Benefícios", href: "#beneficios", ref: beneficiosRef },
    { name: "Etapas", href: "#etapas", ref: etapasRef },
    { name: "Depoimentos", href: "#depoimentos", ref: depoimentosRef },
    { name: "Dúvidas", href: "#duvidas", ref: duvidasRef },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[114px] bg-[rgb(18,17,25)] shadow-lg flex items-center">
      <div className="container mx-auto flex items-center px-32 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logoUnionDeveloper.svg" alt="Union Developers" width={263} height={35} />
        </Link>

        {/* Menu Desktop - Centralizado */}
        <nav className="hidden md:flex items-center flex-1 justify-center space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-xl font-bold font-poppins transition-all ${
                activeLink === item.href.slice(1) // Remove o '#' do href
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#851D86] to-[#0048FE]"
                  : "text-white hover:text-blue-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Botão Gradiente - Alinhado à Direita */}
        <Link
          href="#inscricao"
          className="hidden md:flex items-center justify-center w-[299px] h-[59px] tracking-[1.5px] text-lg font-poppins font-bold text-white rounded-lg shadow-md 
                     bg-gradient-to-r from-[#851D86] to-[#0048FE] 
                     hover:from-[#6B1570] hover:to-[#003BBC] 
                     transition-all"
        >
          Junte-se a nós
        </Link>

        {/* Botão Hamburguer para Mobile */}
        <button className="md:hidden text-white flex items-center ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`absolute top-[114px] left-0 w-full bg-[rgb(18,17,25)] transition-all ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-2xl font-semibold hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#inscricao"
            className="px-6 py-3 text-xl font-bold text-white rounded-lg shadow-md 
                       bg-gradient-to-r from-[#851D86] to-[#0048FE] 
                       hover:from-[#6B1570] hover:to-[#003BBC] 
                       transition-all"
          >
            Junte-se a nós
          </Link>
        </nav>
      </div>

      {/* Referências para o Intersection Observer */}
      <div ref={heroRef} id="hero" />
      <div ref={sobreRef} id="sobre" />
      <div ref={pilaresRef} id="pilares" />
      <div ref={beneficiosRef} id="beneficios" />
      <div ref={etapasRef} id="etapas" />
      <div ref={depoimentosRef} id="depoimentos" />
      <div ref={duvidasRef} id="duvidas" />
    </header>
  );
}