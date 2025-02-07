"use client";

import Image from "next/image";
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
      <div className="">

        {/* 🔹 Se NÃO clicou no botão Inscrever-se, exibe a tela inicial */}
        {!showForm ? (
          <div className="w-[1042px] h-[697px] p-8 bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">

            <h2 className="text-[40px] font-bold mb-4">Junte-se ao time!</h2>
            <p className="text-white-400 mb-6 text-[20px]">
              Tem interesse em participar do Union?
              <br />
              Confira abaixo os requisitos para participar:
            </p>
            <ul className="text-left space-y-5 text-white-400 text-[20px]">
              <li className="flex items-center space-x-3">
                <Image src="images/checkIcon.svg" alt="" width={30} height={30} />
                Ter mais que 18 anos
              </li>

              <li className="flex items-center space-x-3">
                <Image src="images/checkIcon.svg" alt="" width={30} height={30} />
                Ter 1 ano ou mais de estudo em programação
              </li>

              <li className="flex items-center space-x-3">
                <Image src="images/checkIcon.svg" alt="" width={30} height={30} />
                Ainda não trabalhar na área
              </li>

              <li className="flex items-center space-x-3">
                <Image src="images/checkIcon.svg" alt="" width={30} height={30} />
                Já ter criado projetos sozinho que não sejam de cursos ou eventos
              </li>

              <li className="flex items-center space-x-3">
                <Image src="images/checkIcon.svg" alt="" width={30} height={30} />
                Não participar de bootcamps ou programas de capacitação
              </li>

              <li className="flex items-center space-x-3">
                <Image src="images/checkIcon.svg" alt="" width={30} height={30} />
                Ter disponibilidade para trabalhar no mínimo 1 hora por dia no projeto
              </li>

              <li className="flex items-center space-x-3">
                <Image src="images/checkIcon.svg" alt="" width={30} height={30} />
                Ter disponibilidade para reuniões do time, incluindo finais de semana
              </li>
            </ul>
            <button
              onClick={() => setShowForm(true)} // Ao clicar, exibe o formulário
              className="mt-10 w-full h-[69px]  font-bold text-[22px] rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] 
                     hover:from-[#6B1570] hover:to-[#003BBC] 
                     transition-all">
              Inscrever-se
            </button>
          </div>
        ) : (
          <>
            {/* 🔹 Renderização dinâmica dos formulários */}
            <div className="mt-6">
              {step === 1 && (
                <div className="w-[1042px] h-[1206px] p-8 bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">
                  {/* 🔹 Barra de Progresso */}
                  <div className="flex flex-col justify-between items-center mt-6">
                    <div className="flex flex-col items-center">
                      <h2 className="text-[40px] font-bold mb-4">Junte-se ao time!</h2>
                      <p className="text-white-400 mb-6 text-[20px]">
                        Tem interesse em participar do Union?
                        <br />
                        Confira abaixo os requisitos para participar:
                      </p>
                    </div>
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
                  </div>
                  <label className="block text-lg font-bold mb-2"><span className="text-[#eb5757]">*</span> Nome completo</label>
                  <input type="text" placeholder="Digite seu nome" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500" />

                  <label className="block text-lg font-bold mt-4 mb-2"><span className="text-[#eb5757]">*</span> Idade</label>
                  <input type="number" placeholder="Digite sua idade" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500" />

                  <label className="block text-lg font-bold mt-4 mb-2"><span className="text-[#eb5757]">*</span> Email</label>
                  <input type="email" placeholder="Digite seu email" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500" />

                  <label className="block text-lg font-bold mt-4 mb-2"><span className="text-[#eb5757]">*</span> Github</label>
                  <input type="text" placeholder="Digite seu Github?" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500" />

                  <label className="block text-lg font-bold mt-4 mb-2"><span className="text-[#eb5757]">*</span> Linkedin</label>
                  <input type="text" placeholder="Digite seu Linkedin?" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500" />
                  <p><span className="text-[#eb5757]">*</span> Onde você mais gosta de trabalhar?</p>
                  <div className="flex flex-col space-y-2 mt-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="trabalho"
                        id="frontend"
                        className="w-5 h-5 border-2 border-white-500 text-purple-500 bg-[#000] 
                 focus:ring-2 focus:ring-purple-400 checked:bg-gradient-to-r checked:from-[rgb(0, 0, 2)] checked:to-[rgb(0, 0, 2)]"
                      />
                      <span className="text-white">Frontend</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="trabalho"
                        id="backend"
                        className="w-5 h-5 border-2 border-purple-500 text-purple-500 bg-[#1F1D2B] 
                 focus:ring-2 focus:ring-purple-400 checked:bg-gradient-to-r checked:from-purple-500 checked:to-blue-500"
                      />
                      <span className="text-white">Backend</span>
                    </label>
                  </div>
                  {/* 🔹 Botões de Navegação */}
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevStep}
                      className="w-[457px] h-[69px] text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] p-[2px]
             hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white"
                    >
                      <span className="bg-none w-full h-full flex items-center justify-center rounded-lg">
                        Voltar
                      </span>
                    </button>

                    <button
                      onClick={nextStep}
                      className="w-[457px] h-[69px] text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] 
                     hover:from-[#6B1570] hover:to-[#003BBC] 
                     transition-all text-white">
                      Próximo
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="w-[1042px] h-[1206px] p-8 bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">
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
                  {/* 🔹 Botões de Navegação */}
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevStep}
                      className="px-6 py-3 font-bold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      Voltar
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-6 py-3 font-bold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      Próximo
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="w-[1042px] h-[1206px] p-8 bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">
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
                  <label className="block text-lg font-bold mb-2">Por que você gosta de programar?</label>
                  <textarea rows={3} placeholder="Escreva aqui" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500"></textarea>

                  <label className="block text-lg font-bold mt-4 mb-2">Como você lida com feedbacks?</label>
                  <textarea rows={3} placeholder="Escreva aqui" className="w-full p-3 rounded-lg bg-[#1F1D2B] border border-gray-600 focus:outline-none focus:border-purple-500"></textarea>
                  <p className="text-lg text-gray-300 text-center mb-4">
                    Revise todas as informações antes de enviar sua inscrição.
                  </p>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox text-purple-500" />
                    <span>Li e concordo com os termos</span>
                  </label>

                  {/* 🔹 Botões de Navegação */}
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevStep}
                      className="px-6 py-3 font-bold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      Voltar
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-6 py-3 font-bold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      Enviar
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="w-[1042px] h-[1206px] p-8 bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">
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
                  <h2>Incrição realizada com sucesso!</h2>

                  <p>Obrigado NOME USUARIO por requer fazer parte da Union, em breve nossa equipe vai entrar em contato pelo email EMAIL@EMAIL.COM, fique atento.</p>
                </div>
              )}


            </div>
          </>
        )}
      </div>
    </section>
  );
}
