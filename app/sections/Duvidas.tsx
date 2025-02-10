"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface HeroProps {
  id: string; // Adicione a prop id
}

const faqs = [
  { question: "O que é o Union?", answer: "O Union é um ambiente prático e imersivo que busca simular o mais próximo do que você vai encontrar nas empresas, desafiando seus membros a resolver problemas reais, com cronogramas e prazos de entrega. No Union, você desenvolve as skills mais procuradas pelo mercado, trabalha com ferramentas e metodologias utilizadas pelas empresas, além de ganhar experiência trabalhando com outras pessoas de diferentes partes do Brasil." },
  { question: "Quanto custa para fazer parte do Union?", answer: "Nada! O Union é 100% gratuito." },
  { question: "Quem pode participar?", answer: "Pessoas que ainda não trabalham na área e que não participem de bootcamps ou plataformas de capacitação." },
  { question: "Preciso ter experiência para a área?", answer: "Sim. Você precisa ter no mínimo 1 ano de estudo em programação e já ter criado algum projeto sozinho, sem que seja de cursos ou eventos." },
  { question: "Qual a idade mínima para fazer parte do Union?", answer: "Você precisa ter no mínimo 18 anos." },
  { question: "Como me inscrever?", answer: "Se você se encaixa nos requisitos obrigatórios, basta preencher o nosso formulário e fazer sua pré-inscrição." },
  { question: "Existe algum processo seletivo? Como funciona?", answer: "Nosso processo seletivo consiste em algumas etapas: pré-inscrição pelo formulário, análise das informações, desafio técnico e entrevista com nosso time." },
  { question: "O que eu vou aprender?", answer: "Você aprenderá como trabalhar com metodologias e ferramentas utilizadas pelas empresas, desenvolver hard e soft skills, tudo de forma prática e mão na massa!" },
  { question: "Quanto tempo por dia preciso me dedicar nos projetos?", answer: "Você precisa ter disponibilidade de trabalhar no mínimo 1 hora por dia no projeto, além de participar das reuniões do time, que acontecem diariamente e aos finais de semana." },
];

export default function Duvidas({ id }: HeroProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 flex flex-col items-center bg-[#1F1D2B]" id={id}>
      {/* 🔹 Título */}
      <div className="flex items-center w-full justify-center mb-6">
        <span className="hidden md:block absolute left-0 w-[32%] h-[3px] rounded-[20px] bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)]"></span>
        <h2 className="text-[32px] md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] mx-4">
          Dúvidas Frequentes
        </h2>
        <span className="hidden md:block absolute right-0 w-[32%] h-[3px] rounded-[20px] bg-gradient-to-bl from-[rgb(133,29,134)] to-[rgb(0,72,254)]"></span>
      </div>

      <p className="text-[18px] md:text-[24px] text-gray-300 text-center max-w-2xl mb-8">
        Confira as perguntas mais frequentes sobre o Union
      </p>

      {/* 🔹 Lista de Perguntas e Respostas */}
      <div className="w-full max-w-[1000px] space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            {/* Pergunta */}
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-[18px] md:text-[20px] font-semibold text-white rounded-xl bg-gradient-to-r from-[#851D86] to-[#0048FE] transition-all"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
            </button>

            {/* Resposta */}
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[500px] opacity-100 p-6 bg-white text-black rounded-b-xl shadow-md" : "max-h-0 opacity-0 p-0"}`}>
              <p className="text-lg">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
