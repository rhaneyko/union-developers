"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "O que é o Union?",
    answer:
      "O Union é um ambiente prático e imersivo que busca simular o mais próximo do que você vai encontrar nas empresas, desafiando seus membros a resolver problemas reais, com cronogramas e prazos de entrega.",
  },
  {
    question: "Como funciona a participação no Union?",
    answer:
      "Você trabalha em projetos reais, com ferramentas modernas e metodologias ágeis. É uma experiência prática para desenvolver suas habilidades técnicas e interpessoais.",
  },
  {
    question: "Preciso pagar para participar?",
    answer:
      "Não! O Union é uma iniciativa gratuita para ajudar desenvolvedores juniores a adquirirem experiência real de mercado.",
  },
];

export default function Duvidas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 flex flex-col items-center bg-[#1F1D2B]">
      <h2 className="text-3xl font-bold text-white mb-6">Dúvidas Frequentes</h2>
      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            {/* Pergunta */}
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-[#851D86] to-[#0048FE] transition-all"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <Minus className="text-white" size={24} />
              ) : (
                <Plus className="text-white" size={24} />
              )}
            </button>

            {/* Resposta */}
            {openIndex === index && (
              <div className="bg-white text-black p-6 rounded-b-xl shadow-md">
                <p className="text-lg">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
