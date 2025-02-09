"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function Inscricao() {
  const [showForm, setShowForm] = useState(false); // Controla a tela inicial
  const [step, setStep] = useState(1); // Controla os passos do formulário
  const [isOpen, setIsOpen] = useState(false);
  const [status] = useState("error");


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
                <div className="w-[1042px] h-[1206px] p-14 bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">

                  <div className="flex flex-col justify-between items-center mt-3">
                    <div className="flex flex-col items-center text-center w-[400px]">
                      <h2 className="text-[40px] font-bold mb-4">Junte-se ao time!</h2>
                      <p className="text-white-400 text-[20px]">
                        Ficamos felizes em saber que você tem interesse em fazer parte do Union! Agora é só responder o nosso formulário
                      </p>
                    </div>

                    {/* 🔹 Barra de Progresso */}
                    <div className="flex justify-between items-center mt-6 w-full relative">
  {["Dados pessoais", "Informações técnicas", "Sobre você", "Enviar"].map((title, index) => (
    <div key={index} className="flex flex-col items-center w-[150px] relative">

      {/* Nome da etapa */}
      <span className={`text-[20px] font-bold ${step >= index + 1 ? "text-white" : "text-[#BDBDBD]"}`}>
        {title}
      </span>

      {/* Linha de conexão ANTES do número */}
      {index > 0 && (
        <div className={`absolute top-[50%] right-[100%] w-[120px] h-[6px] rounded-lg 
          ${step > index ? "bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)]" : "bg-[#BDBDBD]"}`} />
      )}

      {/* Número da etapa */}
      <div
        className={`w-[50px] h-[50px] flex items-center justify-center rounded-full font-bold text-[24px] mt-2
        ${step >= index + 1 ? "bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)] text-white" : "bg-[#BDBDBD] text-gray-800"}`}
      >
        {index + 1}
      </div>
    </div>
  ))}
</div>

                  </div>
                  <label className="block text-[18px] font-300 mb-[8px]"><span className="text-[#EB5757]">*</span> Nome completo</label>
                  <input type="text" placeholder="Digite seu nome" className="w-full p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500" />

                  <label className="block text-[18px] font-300 mt-4 mb-[8px]"><span className="text-[#EB5757]">*</span> Idade</label>
                  <input type="number" placeholder="Digite sua idade" className="w-full p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500" />

                  <label className="block text-[18px] font-300 mt-4 mb-[8px]"><span className="text-[#EB5757]">*</span> Email</label>
                  <input type="email" placeholder="Digite seu email" className="w-full p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500" />

                  <label className="block text-[18px] font-300 mt-4 mb-[8px]"><span className="text-[#EB5757]">*</span> Github</label>
                  <input type="text" placeholder="Digite seu Github?" className="w-full p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500" />

                  <label className="block text-[18px] font-300 mt-4 mb-[8px]"><span className="text-[#EB5757]">*</span> Linkedin</label>
                  <input type="text" placeholder="Digite seu Linkedin?" className="w-full p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500" />
                  <p className="mt-5 text-[#E2E2E2] text-[18px]" ><span className="text-[#EB5757]">*</span> Onde você mais gosta de trabalhar?</p>



                  <div className="flex flex-col space-y-2 mt-2">
                    <label className="relative flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="opcao"
                        className="hidden peer"
                      />
                      <div className="w-[20px] h-[20px] border-2 border-gray-400 rounded-full flex items-center justify-center relative peer-checked:border-gray-400 peer-checked:bg-gradient-to-bl from-[#0048FE] to-[#851D86]"></div>
                      <span className="text-white">Frontend</span>
                    </label>

                    <label className="relative flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="opcao"
                        className="hidden peer"
                      />
                      <div className="w-[20px] h-[20px] border-2 border-gray-400 rounded-full flex items-center justify-center relative peer-checked:border-gray-400 peer-checked:bg-gradient-to-bl from-[#0048FE] to-[#851D86]"></div>
                      <span className="text-white">Backend</span>
                    </label>
                  </div>


                  {/* 🔹 Botões de Navegação */}
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevStep}
                      className="w-[457px] h-[69px] text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] p-[2px]
                                 hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white">
                      <span className="bg-transparent w-full h-full flex items-center justify-center rounded-lg">
                        Voltar
                      </span>
                    </button>

                    <button
                      onClick={nextStep}
                      className="w-[457px] h-[69px] text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] 
                                 hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white">
                      Próximo
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="w-[1042px] h-[1092px] p-8 bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">
                  <div className="w-full flex justify-center">
                    <div className="flex flex-col items-center text-center w-[400px]">
                      <h2 className="text-[40px] font-bold mb-4">Junte-se ao time!</h2>
                      <p className="text-white-400 text-[20px]">
                        Ficamos felizes em saber que você tem interesse em fazer parte do Union! Agora é só responder o nosso formulário
                      </p>
                    </div>
                  </div>

                  {/* 🔹 Barra de Progresso */}
                  <div className="flex justify-between items-center mt-6 w-full relative">
  {["Dados pessoais", "Informações técnicas", "Sobre você", "Enviar"].map((title, index) => (
    <div key={index} className="flex flex-col items-center w-[150px] relative">

      {/* Nome da etapa */}
      <span className={`text-[20px] font-bold ${step >= index + 1 ? "text-white" : "text-[#BDBDBD]"}`}>
        {title}
      </span>

      {/* Linha de conexão ANTES do número */}
      {index > 0 && (
        <div className={`absolute top-[50%] right-[100%] w-[120px] h-[6px] rounded-lg 
          ${step > index ? "bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)]" : "bg-[#BDBDBD]"}`} />
      )}

      {/* Número da etapa */}
      <div
        className={`w-[50px] h-[50px] flex items-center justify-center rounded-full font-bold text-[24px] mt-2
        ${step >= index + 1 ? "bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)] text-white" : "bg-[#BDBDBD] text-gray-800"}`}
      >
        {index + 1}
      </div>
    </div>
  ))}
</div>



                  <label className="block text-[18px] text-[#E2E2E2] mb-2 mt-3">Quanto tempo você estuda programação?</label>
                  <div className="flex flex-col space-y-2 mt-2">
                    {["1 ano", "2 anos", "3 anos", "Mais de 3 anos"].map((option) => (

                      <label key={option} className="relative flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="opcao"
                          className="hidden peer"
                        />
                        <div className="w-[20px] h-[20px] border-2 border-gray-400 rounded-full flex items-center justify-center relative peer-checked:border-gray-400 peer-checked:bg-gradient-to-bl from-[#0048FE] to-[#851D86]"></div>
                        <span className="text-white">{option}</span>
                      </label>
                    ))}
                  </div>

                  <label className="block text-[18px] text-[#E2E2E2] mt-4 mb-2"><span className="text-[#EB5757]">* </span>Link do respositório do seu melhor projeto</label>
                  <input type="url" placeholder="Digite o link do repositório" className="w-full p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500" />

                  <label className="block text-[18px] text-[#E2E2E2] mt-4 mb-2"><span className="text-[#EB5757]">* </span>Fale sobre como foi construir esse projeto? Quais foram os aprendizados e dificuldades que teve durante o desenvolvimento?</label>
                  <textarea placeholder="Fale sobre o seu melhor projeto, nos conte como foi trabalhar nesse projeto?" className="resize-none w-full min-h-[150px] p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD]  focus:outline-none focus:border-purple-500" />
                  {/* 🔹 Botões de Navegação */}
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevStep}
                      className="w-[457px] h-[69px] text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] p-[2px]
                                 hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white">
                      <span className="bg-none w-full h-full flex items-center justify-center rounded-lg">
                        Voltar
                      </span>
                    </button>

                    <button
                      onClick={nextStep}
                      className="w-[457px] h-[69px] text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] 
                                 hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white">
                      Próximo
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="w-[1042px] h-auto p-8 bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">
                  <div className="w-full flex justify-center">
                    <div className="flex flex-col items-center text-center w-[400px]">
                      <h2 className="text-[40px] font-bold mb-4">Junte-se ao time!</h2>
                      <p className="text-white-400 text-[20px]">
                        Ficamos felizes em saber que você tem interesse em fazer parte do Union! Agora é só responder o nosso formulário
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6 w-full relative">
  {["Dados pessoais", "Informações técnicas", "Sobre você", "Enviar"].map((title, index) => (
    <div key={index} className="flex flex-col items-center w-[150px] relative">

      {/* Nome da etapa */}
      <span className={`text-[20px] font-bold ${step >= index + 1 ? "text-white" : "text-[#BDBDBD]"}`}>
        {title}
      </span>

      {/* Linha de conexão ANTES do número */}
      {index > 0 && (
        <div className={`absolute top-[50%] right-[100%] w-[120px] h-[6px] rounded-lg 
          ${step > index ? "bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)]" : "bg-[#BDBDBD]"}`} />
      )}

      {/* Número da etapa */}
      <div
        className={`w-[50px] h-[50px] flex items-center justify-center rounded-full font-bold text-[24px] mt-2
        ${step >= index + 1 ? "bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)] text-white" : "bg-[#BDBDBD] text-gray-800"}`}
      >
        {index + 1}
      </div>
    </div>
  ))}
</div>



                  <label className="block text-[18px] text-[#E2E2E2] mt-4 mb-2"><span className="text-[#EB5757]">* </span>Por que você gosta de programar? Qual sua maior motivação?</label>
                  <textarea placeholder="Qual é a sua maior motivação para fazer o que faz?" className="resize-none w-full min-h-[150px] p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD]  focus:outline-none focus:border-purple-500" />

                  <label className="block text-[18px] text-[#E2E2E2] mt-4 mb-2"><span className="text-[#EB5757]">* </span>Como você faz para conseguir cumprir todos as suas responsabilidades do dia a dia?</label>
                  <textarea placeholder="Como você faz para conseguir cumprir todas as suas responsabilidades do dia a dia?" className="resize-none w-full min-h-[150px] p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD]  focus:outline-none focus:border-purple-500" />

                  <label className="block text-[18px] text-[#E2E2E2] mt-4 mb-2"><span className="text-[#EB5757]">* </span>Quando você recebe um feedback, como é para você?</label>
                  <textarea placeholder="Nos conte como é para você receber feedback?" className="resize-none w-full min-h-[150px] p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD]  focus:outline-none focus:border-purple-500" />

                  <label className="block text-[18px] text-[#E2E2E2] mt-4 mb-2"><span className="text-[#EB5757]">* </span>Como você ficou sabendo sobre o Union?</label>
                  <textarea placeholder="Como você ficou sabendo sobre o Union?" className="resize-none w-full min-h-[150px] p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD]  focus:outline-none focus:border-purple-500" />

                  <label className="block text-[18px] text-[#E2E2E2] mt-4 mb-2"><span className="text-[#EB5757]">* </span>Por que você quer fazer parte do Union?</label>
                  <textarea placeholder="Por que você quer fazer parte do Union?" className="resize-none w-full min-h-[150px] p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD]  focus:outline-none focus:border-purple-500" />

                  <label className="block text-[18px] text-[#E2E2E2] mt-4 mb-2"><span className="text-[#EB5757]">* </span>Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?</label>
                  <textarea placeholder="Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?" className="resize-none w-full min-h-[150px] p-[.75rem] pl-[1rem] rounded-lg bg-transparent border border-[#BDBDBD]  focus:outline-none focus:border-purple-500" />

                  <p className="text-lg text-gray-300 text-center mb-4">
                    Revise todas as informações antes de enviar sua inscrição.
                  </p>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden peer"
                    />
                    <div className="relative w-[40px] h-[40px] rounded-md p-[2px] border-2 border-gray-400
                                    bg-transparent appearance-none flex items-center justify-center 
                                    cursor-pointer peer-checked:bg-gradient-to-bl peer-checked:from-[#0048FE] peer-checked:to-[#851D86] 
                                    peer-checked:border-transparent transition-all duration-200 ease-in-out 
                                    peer-checked:before:content-[''] peer-checked:before:w-[1rem] peer-checked:before:h-[1.5rem]
                                    peer-checked:before:border-r-[4px] peer-checked:before:border-b-[4px] 
                                    peer-checked:before:border-white peer-checked:before:rotate-45 peer-checked:before:absolute peer-checked:before:top-[2px] 
                                    peer-checked:before:opacity-100"></div>
                    <span className="text-white text-[20px] font-bold">
                      Li e concordo com os{" "}
                      <button
                        onClick={() => setIsOpen(true)}
                        className="underline"
                      >
                        termos
                      </button>.
                    </span>
                  </label>
                  {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                      <div className="bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)] p-6 w-[600px] rounded-xl shadow-lg text-white relative">
                        {/* Título e Botão de Fechar */}
                        <div className="flex justify-between items-center border-b border-gray-500 pb-2">
                          <h2 className="text-2xl font-bold text-center flex-1">Termos e Condições</h2>
                          <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-400 transition-all"
                          >
                            <X size={24} />
                          </button>
                        </div>

                        <div className="mt-4 max-h-[400px] overflow-y-auto text-gray-300 space-y-3 text-sm">
                          <span className="font-bold">Ao prosseguir com o preenchimento do formulário de inscrição, você concorda com os seguintes termos e condições do Union:</span>

                          {/* Conteúdo dos Termos */}
                          <p>
                            <strong>1. Autorização para coleta de informações:</strong>  Ao fornecer suas informações pessoais no formulário de inscrição, você autoriza o Union a coletar, armazenar e utilizar os dados fornecidos para fins de avaliação de inscrição e para a organização das atividades no âmbito do programa. Comprometemo-nos a proteger a privacidade e confidencialidade dos seus dados, em conformidade com as leis aplicáveis de proteção de dados.
                          </p>
                          <p>
                            <strong>2. Idade mínima:</strong> Todos os membros do Union devem ter 18 anos de idade ou mais para participar do programa.
                          </p>
                          <p>
                            <strong>3. Utilização de webcam:</strong> Os membros do Union devem possuir uma webcam para participar de entrevistas, reuniões e atividades do programa. A utilização de webcam é fundamental para promover um ambiente de interação e colaboração entre os membros.
                          </p>
                          <p>
                            <strong>4. Gravação de entrevistas e reuniões:</strong> Você concorda que todas as entrevistas e reuniões realizadas no âmbito do Union poderão ser gravadas para fins de registro e acompanhamento das atividades do programa. Essas gravações poderão ser utilizadas internamente pelo Union para fins de análise, feedback e melhoria contínua do programa. Além disso, o Union poderá utilizar essas gravações de forma selecionada para divulgar em suas redes sociais ou outros meios de comunicação, sempre com o objetivo de promover a transparência e compartilhar a experiência do programa.
                          </p>
                          <p>
                            <strong>5. Remoção de membros:</strong> O Union se reserva o direito de remover membros do programa caso seja identificado algum comportamento inadequado ou em desacordo com as regras e valores estabelecidos. Nossa intenção é manter um ambiente colaborativo e respeitoso para todos os participantes do Union.
                          </p>
                          <p>
                            <strong>6. Uso das informações para fins de divulgação:</strong> Ao participar do Union, você concorda que poderemos utilizar seu nome e depoimentos para fins de divulgação, tais como posts em redes sociais, artigos no blog, e outras formas de comunicação sobre o programa. No entanto, qualquer informação pessoal sensível será mantida em sigilo e não será divulgada publicamente sem sua autorização prévia.
                          </p>
                          <p>
                            <strong>7. Atualização dos termos e condições:</strong> Os termos e condições do Union podem ser atualizados periodicamente. Quaisquer alterações serão comunicadas aos membros e publicadas na landing page do Union. Ao continuar participando do programa após a atualização dos termos, você estará concordando com as novas condições.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}



                  {/* 🔹 Botões de Navegação */}
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevStep}
                      className="w-[457px] h-[69px] text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] p-[2px]
                                 hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white">
                      <span className="bg-none w-full h-full flex items-center justify-center rounded-lg">
                        Voltar
                      </span>
                    </button>

                    <button
                      onClick={nextStep}
                      className="w-[457px] h-[69px] text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] 
                                 hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white">
                      Próximo
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="w-[1042px] p-8 flex flex-col items-center justify-center bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">

                  <div className="w-full flex justify-center">
                    <div className="flex flex-col items-center text-center w-[400px]">
                      <h2 className="text-[40px] font-bold mb-4">Junte-se ao time!</h2>
                      <p className="text-white-400 text-[20px]">
                        Ficamos felizes em saber que você tem interesse em fazer parte do Union! Agora é só responder o nosso formulário
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6 w-full relative">
  {["Dados pessoais", "Informações técnicas", "Sobre você", "Enviar"].map((title, index) => (
    <div key={index} className="flex flex-col items-center w-[150px] relative">

      {/* Nome da etapa */}
      <span className={`text-[20px] font-bold ${step >= index + 1 ? "text-white" : "text-[#BDBDBD]"}`}>
        {title}
      </span>

      {/* Linha de conexão ANTES do número */}
      {index > 4 && (
        <div className={`absolute top-[50%] right-[100%] w-[120px] h-[6px] rounded-lg 
          ${step > index ? "bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)]" : "bg-[#BDBDBD]"}`} />
      )}

      {/* Número da etapa */}
      <div
        className={`w-[50px] h-[50px] flex items-center justify-center rounded-full font-bold text-[24px] mt-2
        ${step >= index + 1 ? "bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)] text-white" : "bg-[#BDBDBD] text-gray-800"}`}
      >
        {index + 1}
      </div>
    </div>
  ))}
</div>


                  {/* Ícone de sucesso ou erro */}
                  {status === "success" ? (
                    <Image
                      src="/images/successSubscriptionIcon.svg"
                      alt="Sucesso"
                      width={80}
                      height={80}
                    />
                  ) : (
                    <Image
                      src="/images/errorSubscriptionIcon.svg"
                      alt="Erro"
                      width={80}
                      height={80}
                    />
                  )}

                  {/* Mensagem de feedback */}
                  <h2 className="text-3xl font-bold mt-4">
                    {status === "success" ? "Inscrição realizada com sucesso!" : "Ocorreu um erro na inscrição"}
                  </h2>

                  <div className="w-[580px] mt-10 mb-10">
                    <p className="text-lg text-white-300 text-center mt-2">
                      {status === "success"
                        ? "Obrigado NOME USUARIO por querer fazer parte da Union, em breve nossa equipe vai entrar em contato pelo seu email EMAIL@EMAIL.COM, fique atento."
                        : "Infelizmente ocorreu um erro ao processar sua inscrição. Tente novamente mais tarde ou entre em contato com o suporte."}
                    </p>
                  </div>
                </div>
              )}


            </div>
          </>
        )}
      </div>
    </section>
  );
}
