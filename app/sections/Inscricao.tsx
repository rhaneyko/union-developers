"use client";

import { useState } from "react";

export default function Inscricao() {
  const [showForm, setShowForm] = useState(false); // Controla a tela inicial
  const [step, setStep] = useState(1); // Controla os passos do formulário

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step === 1) {
      setShowForm(false); // Retorna para a tela inicial
    } else {
      setStep(step - 1); // Volta um passo no formulário
    }
  };

  return (
    <section className="py-12 px-6 flex flex-col items-center bg-[#1F1D2B]">
      <div className="max-w-3xl w-full p-8 bg-gradient-to-b from-[#1F1D2B] to-[#141221] rounded-xl shadow-lg text-white">

        {/* 🔹 Se NÃO clicou no botão Inscrever-se, exibe a tela inicial */}
        {!showForm ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Junte-se ao time!</h2>
            <p className="text-gray-300 mb-6">
              Tem interesse em participar do Union? Confira abaixo os requisitos para participar:
            </p>
            <ul className="text-left space-y-2 text-gray-400">
              <li>✅ Ter mais que 18 anos</li>
              <li>✅ Ter 1 ano ou mais de estudo em programação</li>
              <li>✅ Ainda não trabalhar na área</li>
              <li>✅ Já ter criado projetos sozinho que não sejam de cursos ou eventos</li>
              <li>✅ Não participar de bootcamps ou programas de capacitação</li>
              <li>✅ Ter disponibilidade para trabalhar no mínimo 1 hora por dia no projeto</li>
              <li>✅ Ter disponibilidade para reuniões do time, incluindo finais de semana</li>
            </ul>
            <button
              onClick={() => setShowForm(true)} // Ao clicar, exibe o formulário
              className="mt-6 px-8 py-3 font-bold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white"
            >
              Inscrever-se
            </button>
          </div>
        ) : (
          <>
            {/* 🔹 Barra de Progresso */}
            <div className="flex justify-between items-center mt-6">
              {["Dados pessoais", "Informações técnicas", "Sobre você", "Enviar"].map((title, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold 
                    ${step === index + 1 ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-gray-700"}`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm mt-2">{title}</span>
                </div>
              ))}
            </div>

            {/* 🔹 Renderização dinâmica dos formulários */}
            <div className="mt-6">
              {step === 1 && (
                <div>
                  <label className="block text-lg font-bold mb-2">Nome completo</label>
                  <input type="text" placeholder="Digite seu nome" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500" />

                  <label className="block text-lg font-bold mt-4 mb-2">Idade</label>
                  <input type="number" placeholder="Digite sua idade" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500" />

                  <label className="block text-lg font-bold mt-4 mb-2">Email</label>
                  <input type="email" placeholder="Digite seu email" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500" />
                  <p>Onde você mais gosta de trabalhar?</p>
                <div>
                  <input type="radio" id="frontend" />
                  <label>Frontend</label>
                </div>
                <div>
                  <input type="radio" id="backend" />
                  <label>Backend</label>
                </div>
            
                </div>
                
              )}

              {step === 2 && (
                <div>
                  <label className="block text-lg font-bold mb-2">Quanto tempo você estuda programação?</label>
                  <div className="flex flex-col space-y-2">
                    {["1 ano", "2 anos", "3 anos", "Mais de 3 anos"].map((option) => (
                      <label key={option} className="flex items-center space-x-3">
                        <input type="radio" name="tempo_estudo" className="form-radio text-purple-500" />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>

                  <label className="block text-lg font-bold mt-4 mb-2">Link do seu melhor projeto</label>
                  <input type="url" placeholder="Digite o link do repositório" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500" />
                </div>
              )}

              {step === 3 && (
                <div>
                  <label className="block text-lg font-bold mb-2">Por que você gosta de programar?</label>
                  <textarea rows={3} placeholder="Escreva aqui" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500"></textarea>

                  <label className="block text-lg font-bold mt-4 mb-2">Como você lida com feedbacks?</label>
                  <textarea rows={3} placeholder="Escreva aqui" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500"></textarea>
                </div>
              )}

              {step === 4 && (
                <div>
                  <p className="text-lg text-gray-300 text-center mb-4">
                    Revise todas as informações antes de enviar sua inscrição.
                  </p>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox text-purple-500" />
                    <span>Li e concordo com os termos</span>
                  </label>
                </div>
              )}
            </div>

            {/* 🔹 Botões de Navegação */}
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="px-6 py-3 font-bold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              >
                {step === 1 ? "Voltar para Inscrição" : "Voltar"}
              </button>
              <button
                onClick={nextStep}
                className="px-6 py-3 font-bold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              >
                {step === 4 ? "Enviar" : "Próximo"}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
