"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface HeroProps {
  id: string;
}

// Esquemas de validação com Zod
const personalDataSchema = z.object({
  fullName: z.string().min(1, "Nome completo é obrigatório"),
  age: z.number().min(18, "Você deve ter mais de 18 anos"),
  email: z.string().email("Email inválido"),
  github: z.string().url("Link do GitHub inválido"),
  linkedin: z.string().url("Link do LinkedIn inválido"),
  preferredArea: z.enum(["Frontend", "Backend"], {
    required_error: "Selecione uma área de preferência",
  }),
});

const technicalDataSchema = z.object({
  studyTime: z.enum(["1 ano", "2 anos", "3 anos", "Mais de 3 anos"], {
    required_error: "Selecione o tempo de estudo",
  }),
  projectRepo: z.string().url("Link do repositório inválido"),
  projectDescription: z.string().min(10, "Descreva seu projeto com mais detalhes"),
});

const aboutYouSchema = z.object({
  motivation: z.string().min(10, "Descreva sua motivação"),
  responsibilities: z.string().min(10, "Descreva como lida com responsabilidades"),
  feedback: z.string().min(10, "Descreva como lida com feedback"),
  howDidYouHear: z.string().min(10, "Descreva como ficou sabendo do Union"),
  whyJoin: z.string().min(10, "Descreva por que quer participar"),
  whyShouldYouJoin: z.string().min(10, "Descreva por que deveria ser selecionado"),
});

const formSchema = z.object({
  personalData: personalDataSchema,
  technicalData: technicalDataSchema,
  aboutYou: aboutYouSchema,
  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos para continuar",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function Inscricao({ id }: HeroProps) {
  const [showForm, setShowForm] = useState(false);
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    trigger,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("formData") || "{}") : {},
    mode: "onChange",
  });
  
  // Salvar dados no localStorage a cada mudança
  useEffect(() => {
    if (typeof window !== "undefined") {
      const subscription = watch((value) => {
        localStorage.setItem("formData", JSON.stringify(value));
      });
      return () => subscription.unsubscribe();
    }
  }, [watch]);

  const nextStep = async () => {
    let isValid = false;

    if (step === 1) {
      isValid = await trigger("personalData");
    } else if (step === 2) {
      isValid = await trigger("technicalData");
    } else if (step === 3) {
      isValid = await trigger("aboutYou");
    }

    if (isValid && step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step === 1) {
      setShowForm(false);
    } else {
      setStep(step - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {

      console.log("Dados do formulário:", data)
      // Simulação de validação do formulário
      const isFormValid = await trigger(); // Valida todos os campos do formulário

      if (isFormValid) {
        // Se o formulário estiver válido, exibe a tela de sucesso
        setStatus("success");
        setStep(4); // Atualiza o estado `step` para 4
        localStorage.removeItem("formData"); // Limpa o localStorage
      } else {
        // Se o formulário estiver inválido, exibe a tela de erro
        setStatus("error");
        setStep(4); // Atualiza o estado `step` para 4
      }
    } catch (error) {
      console.error("Erro ao processar o formulário:", error);
      setStatus("error"); // Exibe a tela de erro em caso de exceção
      setStep(4); // Atualiza o estado `step` para 4
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 flex flex-col items-center bg-[#1F1D2B]" id={id}>
      <div className="w-full max-w-4xl">
        {!showForm ? (
          <div className="flex flex-col  items-center w-full p-6 sm:p-8 bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">
            <h2 className="text-3xl sm:text-[40px] font-bold mb-4">Junte-se ao time!</h2>
            <p className="text-white-400 mb-6 text-lg sm:text-[20px]">
              Tem interesse em participar do Union?
              <br />
              Confira abaixo os requisitos para participar:
            </p>
            
            <ul className="w-full text-left space-y-5 text-white-400 text-lg sm:text-[20px]">
              {[
                "Ter mais que 18 anos",
                "Ter 1 ano ou mais de estudo em programação",
                "Ainda não trabalhar na área",
                "Já ter criado projetos sozinho que não sejam de cursos ou eventos",
                "Não participar de bootcamps ou programas de capacitação",
                "Ter disponibilidade para trabalhar no mínimo 1 hora por dia no projeto",
                "Ter disponibilidade para reuniões do time, incluindo finais de semana",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Image src="images/icons/checkIcon.svg" alt="" width={30} height={30} />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowForm(true)}
              className="mt-10 w-full h-14 sm:h-[69px] font-bold text-lg sm:text-[22px] rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] hover:from-[#6B1570] hover:to-[#003BBC] transition-all"
            >
              Inscrever-se
            </button>
          </div>
        ) : (
          <>
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

                    {/* Barra de Progresso */}
                    <div className="flex justify-between items-center mt-12 mb-8 w-[1042px] px-8">
                      {["Dados pessoais", "Informações técnicas", "Sobre você", "Enviar"].map((title, index) => (
                        <div key={index} className="flex flex-col w-[150px]  items-center">
                          <div className="h-[60px] w-[100px] text-center">
                            {/* Nome da etapa */}
                            <span className={`text-[20px] font-bold ${step >= index + 1 ? "text-white" : "text-[#BDBDBD]"}`}>
                              {title}
                            </span>
                          </div>
                          <div className="w-[150px] h-[60px] flex items-center justify-center relative">
                            {/* Linha de conexão antes do número */}
                            {index > 0 && (
                              <div className={`absolute w-[120px] h-[6px] rounded-lg right-[100%] top-[50%]
                                ${step >= index + 0 ? "bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)]" : "bg-[#BDBDBD]"}`} />
                            )}

                            {/* Número da etapa */}
                            <div
                              className={`w-[50px] h-[50px] flex items-center justify-center rounded-full font-bold text-[24px] mt-2
                                ${step >= index + 1 ? "bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)] text-white" : "bg-[#BDBDBD] text-gray-800"}`}>
                              {index + 1}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Campo Nome Completo */}
                  <label className="block text-lg sm:text-[18px] font-300 mb-2">
                    <span className="text-[#EB5757]">*</span> Nome completo
                  </label>
                  <input
                    {...register("personalData.fullName")}
                    placeholder="Digite seu nome"
                    className="w-full p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.personalData?.fullName?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.personalData.fullName.message}</p>
                  )}

                  {/* Campo Idade */}
                  <label className="block text-lg sm:text-[18px] font-300 mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> Idade
                  </label>
                  <input
                    type="number"
                    {...register("personalData.age", { valueAsNumber: true })}
                    placeholder="Digite sua idade"
                    className="w-full p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.personalData?.age?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.personalData.age.message}</p>
                  )}

                  {/* Campo Email */}
                  <label className="block text-lg sm:text-[18px] font-300 mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> Email
                  </label>
                  <input
                    {...register("personalData.email")}
                    placeholder="Digite seu email"
                    className="w-full p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.personalData?.email?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.personalData.email.message}</p>
                  )}

                  {/* Campo GitHub */}
                  <label className="block text-lg sm:text-[18px] font-300 mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> GitHub
                  </label>
                  <input
                    {...register("personalData.github")}
                    placeholder="Digite seu GitHub"
                    className="w-full p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.personalData?.github?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.personalData.github.message}</p>
                  )}

                  {/* Campo LinkedIn */}
                  <label className="block text-lg sm:text-[18px] font-300 mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> LinkedIn
                  </label>
                  <input
                    {...register("personalData.linkedin")}
                    placeholder="Digite seu LinkedIn"
                    className="w-full p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.personalData?.linkedin?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.personalData.linkedin.message}</p>
                  )}

                  {/* Campo Área de Preferência */}
                  <p className="mt-5 text-[#E2E2E2] text-lg sm:text-[18px]">
                    <span className="text-[#EB5757]">*</span> Onde você mais gosta de trabalhar?
                  </p>
                  <div className="flex flex-col space-y-2 mt-2">
                    {["Frontend", "Backend"].map((option) => (
                      <label key={option} className="relative flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          value={option}
                          {...register("personalData.preferredArea")}
                          className="hidden peer"
                        />
                        <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center relative peer-checked:border-gray-400 peer-checked:bg-gradient-to-bl from-[#0048FE] to-[#851D86]"></div>
                        <span className="text-white">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.personalData?.preferredArea?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.personalData.preferredArea.message}</p>
                  )}

                  {/* Botões de Navegação */}
                  <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
                    <button
                      onClick={prevStep}
                      className="w-full sm:w-[48%] h-14 sm:h-[69px] text-lg sm:text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white"
                    >
                      Voltar
                    </button>
                    <button
                      onClick={nextStep}
                      className="w-full sm:w-[48%] h-14 sm:h-[69px] text-lg sm:text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white"
                    >
                      Próximo
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="w-[1042px] p-6 sm:p-8 bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">
                  <div className="w-full flex justify-center">
                    <div className="flex flex-col items-center text-center w-full sm:w-[400px]">
                      <h2 className="text-3xl sm:text-[40px] font-bold mb-4">Junte-se ao time!</h2>
                      <p className="text-white-400 text-lg sm:text-[20px]">
                        Ficamos felizes em saber que você tem interesse em fazer parte do Union! Agora é só responder o nosso formulário
                      </p>
                    </div>
                  </div>

                  {/* Barra de Progresso */}
                  <div className="flex justify-between items-center mt-12 mb-8 w-[1042px] px-8">
                    {["Dados pessoais", "Informações técnicas", "Sobre você", "Enviar"].map((title, index) => (
                      <div key={index} className="flex flex-col w-[150px]  items-center">
                        <div className="h-[60px] w-[100px] text-center">
                          {/* Nome da etapa */}
                          <span className={`text-[20px] font-bold ${step >= index + 1 ? "text-white" : "text-[#BDBDBD]"}`}>
                            {title}
                          </span>
                        </div>
                        <div className="w-[150px] h-[60px] flex items-center justify-center relative">
                          {/* Linha de conexão antes do número */}
                          {index > 0 && (
                            <div className={`absolute w-[120px] h-[6px] rounded-lg right-[100%] top-[50%]
                                ${step >= index + 0 ? "bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)]" : "bg-[#BDBDBD]"}`} />
                          )}

                          {/* Número da etapa */}
                          <div
                            className={`w-[50px] h-[50px] flex items-center justify-center rounded-full font-bold text-[24px] mt-2
                                ${step >= index + 1 ? "bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)] text-white" : "bg-[#BDBDBD] text-gray-800"}`}>
                            {index + 1}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Campo Tempo de Estudo */}
                  <label className="block text-lg sm:text-[18px] text-[#E2E2E2] mb-2 mt-3">
                    <span className="text-[#EB5757]">*</span> Quanto tempo você estuda programação?
                  </label>
                  <div className="flex flex-col space-y-2 mt-2">
                    {["1 ano", "2 anos", "3 anos", "Mais de 3 anos"].map((option) => (
                      <label key={option} className="relative flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          value={option}
                          {...register("technicalData.studyTime")}
                          className="hidden peer"
                        />
                        <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center relative peer-checked:border-gray-400 peer-checked:bg-gradient-to-bl from-[#0048FE] to-[#851D86]"></div>
                        <span className="text-white">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.technicalData?.studyTime?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.technicalData.studyTime.message}</p>
                  )}

                  {/* Campo Link do Repositório */}
                  <label className="block text-lg sm:text-[18px] text-[#E2E2E2] mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> Link do repositório do seu melhor projeto
                  </label>
                  <input
                    {...register("technicalData.projectRepo")}
                    placeholder="Digite o link do repositório"
                    className="w-full p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.technicalData?.projectRepo?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.technicalData.projectRepo.message}</p>
                  )}

                  {/* Campo Descrição do Projeto */}
                  <label className="block text-lg sm:text-[18px] text-[#E2E2E2] mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> Fale sobre como foi construir esse projeto
                  </label>
                  <textarea
                    {...register("technicalData.projectDescription")}
                    placeholder="Fale sobre o seu melhor projeto, nos conte como foi trabalhar nesse projeto?"
                    className="resize-none w-full min-h-[150px] p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.technicalData?.projectDescription?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.technicalData.projectDescription.message}</p>
                  )}

                  {/* Botões de Navegação */}
                  <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
                    <button
                      onClick={prevStep}
                      className="w-full sm:w-[48%] h-14 sm:h-[69px] text-lg sm:text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white"
                    >
                      Voltar
                    </button>
                    <button
                      onClick={nextStep}
                      className="w-full sm:w-[48%] h-14 sm:h-[69px] text-lg sm:text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white"
                    >
                      Próximo
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="w-full p-6 sm:p-8 bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">
                  <div className="w-full flex justify-center">
                    <div className="flex flex-col items-center text-center w-full sm:w-[400px]">
                      <h2 className="text-3xl sm:text-[40px] font-bold mb-4">Junte-se ao time!</h2>
                      <p className="text-white-400 text-lg sm:text-[20px]">
                        Ficamos felizes em saber que você tem interesse em fazer parte do Union! Agora é só responder o nosso formulário
                      </p>
                    </div>
                  </div>

                  {/* Barra de Progresso */}
                  <div className="flex justify-between items-center mt-12 mb-8 w-[1042px] px-8">
                    {["Dados pessoais", "Informações técnicas", "Sobre você", "Enviar"].map((title, index) => (
                      <div key={index} className="flex flex-col w-[150px]  items-center">
                        <div className="h-[60px] w-[100px] text-center">
                          {/* Nome da etapa */}
                          <span className={`text-[20px] font-bold ${step >= index + 1 ? "text-white" : "text-[#BDBDBD]"}`}>
                            {title}
                          </span>
                        </div>
                        <div className="w-[150px] h-[60px] flex items-center justify-center relative">
                          {/* Linha de conexão antes do número */}
                          {index > 0 && (
                            <div className={`absolute w-[120px] h-[6px] rounded-lg right-[100%] top-[50%]
                                ${step >= index + 0 ? "bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)]" : "bg-[#BDBDBD]"}`} />
                          )}

                          {/* Número da etapa */}
                          <div
                            className={`w-[50px] h-[50px] flex items-center justify-center rounded-full font-bold text-[24px] mt-2
                                ${step >= index + 1 ? "bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)] text-white" : "bg-[#BDBDBD] text-gray-800"}`}>
                            {index + 1}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Campo Motivação */}
                  <label className="block text-lg sm:text-[18px] text-[#E2E2E2] mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> Por que você gosta de programar? Qual sua maior motivação?
                  </label>
                  <textarea
                    {...register("aboutYou.motivation")}
                    placeholder="Qual é a sua maior motivação para fazer o que faz?"
                    className="resize-none w-full min-h-[150px] p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.aboutYou?.motivation?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.aboutYou.motivation.message}</p>
                  )}

                  {/* Campo Responsabilidades */}
                  <label className="block text-lg sm:text-[18px] text-[#E2E2E2] mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> Como você faz para conseguir cumprir todas as suas responsabilidades do dia a dia?
                  </label>
                  <textarea
                    {...register("aboutYou.responsibilities")}
                    placeholder="Como você faz para conseguir cumprir todas as suas responsabilidades do dia a dia?"
                    className="resize-none w-full min-h-[150px] p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.aboutYou?.responsibilities?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.aboutYou.responsibilities.message}</p>
                  )}

                  {/* Campo Feedback */}
                  <label className="block text-lg sm:text-[18px] text-[#E2E2E2] mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> Quando você recebe um feedback, como é para você?
                  </label>
                  <textarea
                    {...register("aboutYou.feedback")}
                    placeholder="Nos conte como é para você receber feedback?"
                    className="resize-none w-full min-h-[150px] p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.aboutYou?.feedback?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.aboutYou.feedback.message}</p>
                  )}

                  {/* Campo Como Ficou Sabendo do Union */}
                  <label className="block text-lg sm:text-[18px] text-[#E2E2E2] mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> Como você ficou sabendo sobre o Union?
                  </label>
                  <textarea
                    {...register("aboutYou.howDidYouHear")}
                    placeholder="Como você ficou sabendo sobre o Union?"
                    className="resize-none w-full min-h-[150px] p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.aboutYou?.howDidYouHear?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.aboutYou.howDidYouHear.message}</p>
                  )}

                  {/* Campo Por Que Quer Participar */}
                  <label className="block text-lg sm:text-[18px] text-[#E2E2E2] mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> Por que você quer fazer parte do Union?
                  </label>
                  <textarea
                    {...register("aboutYou.whyJoin")}
                    placeholder="Por que você quer fazer parte do Union?"
                    className="resize-none w-full min-h-[150px] p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.aboutYou?.whyJoin?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.aboutYou.whyJoin.message}</p>
                  )}

                  {/* Campo Por Que Deveria Ser Selecionado */}
                  <label className="block text-lg sm:text-[18px] text-[#E2E2E2] mt-4 mb-2">
                    <span className="text-[#EB5757]">*</span> Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?
                  </label>
                  <textarea
                    {...register("aboutYou.whyShouldYouJoin")}
                    placeholder="Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?"
                    className="resize-none w-full min-h-[150px] p-3 rounded-lg bg-transparent border border-[#BDBDBD] focus:outline-none focus:border-purple-500"
                  />
                  {errors.aboutYou?.whyShouldYouJoin?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.aboutYou.whyShouldYouJoin.message}</p>
                  )}

                  {/* Campo Aceitar Termos */}
                  <label className="flex items-center space-x-2 cursor-pointer mt-6">
                    <input
                      type="checkbox"
                      {...register("acceptedTerms")}
                      className="hidden peer"
                    />
                    <div className="relative w-10 h-10 rounded-md p-[2px] border-2 border-gray-400 bg-transparent appearance-none flex items-center justify-center cursor-pointer peer-checked:bg-gradient-to-bl peer-checked:from-[#0048FE] peer-checked:to-[#851D86] peer-checked:border-transparent transition-all duration-200 ease-in-out peer-checked:before:content-[''] peer-checked:before:w-[1rem] peer-checked:before:h-[1.5rem] peer-checked:before:border-r-[4px] peer-checked:before:border-b-[4px] peer-checked:before:border-white peer-checked:before:rotate-45 peer-checked:before:absolute peer-checked:before:top-[2px] peer-checked:before:opacity-100"></div>
                    <span className="text-white text-lg sm:text-[20px] font-bold">
                      Li e concordo com os{" "}
                      <button
                        onClick={() => setIsOpen(true)}
                        className="underline"
                      >
                        termos
                      </button>.
                    </span>
                  </label>
                  {errors.acceptedTerms?.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.acceptedTerms.message}</p>
                  )}

                  {/* Modal dos Termos */}
                  {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                      <div className="bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)] p-6 w-full sm:w-[600px] rounded-xl shadow-lg text-white relative">
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
                            <strong>1. Autorização para coleta de informações:</strong> Ao fornecer suas informações pessoais no formulário de inscrição, você autoriza o Union a coletar, armazenar e utilizar os dados fornecidos para fins de avaliação de inscrição e para a organização das atividades no âmbito do programa. Comprometemo-nos a proteger a privacidade e confidencialidade dos seus dados, em conformidade com as leis aplicáveis de proteção de dados.
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

                  {/* Botões de Navegação */}
                  <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
                    <button
                      onClick={prevStep}
                      className="w-full sm:w-[48%] h-14 sm:h-[69px] text-lg sm:text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white"
                    >
                      Voltar
                    </button>
                    <button
                      onClick={handleSubmit(onSubmit)}
                      className="w-full sm:w-[48%] h-14 sm:h-[69px] text-lg sm:text-[22px] font-bold rounded-lg bg-gradient-to-r from-[#851D86] to-[#0048FE] hover:from-[#6B1570] hover:to-[#003BBC] transition-all text-white"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="w-[1042px] sm:p-8 flex flex-col items-center justify-center bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">
                  <div className="w-full flex justify-center">
                    <div className="flex flex-col items-center text-center w-full sm:w-[400px]">
                      <h2 className="text-3xl sm:text-[40px] font-bold mb-4">Junte-se ao time!</h2>
                      <p className="text-white-400 text-lg sm:text-[20px]">
                        Ficamos felizes em saber que você tem interesse em fazer parte do Union! Agora é só responder o nosso formulário
                      </p>
                    </div>
                  </div>

                  {/* Barra de Progresso */}
                  <div className="flex justify-between items-center mt-12 mb-8 w-[1042px] px-8">
                    {["Dados pessoais", "Informações técnicas", "Sobre você", "Enviar"].map((title, index) => (
                      <div key={index} className="flex flex-col w-[150px]  items-center">
                        <div className="h-[60px] w-[100px] text-center">
                          {/* Nome da etapa */}
                          <span className={`text-[20px] font-bold ${step >= index + 1 ? "text-white" : "text-[#BDBDBD]"}`}>
                            {title}
                          </span>
                        </div>
                        <div className="w-[150px] h-[60px] flex items-center justify-center relative">
                          {/* Linha de conexão antes do número */}
                          {index > 0 && (
                            <div className={`absolute w-[120px] h-[6px] rounded-lg right-[100%] top-[50%]
                                ${step >= index + 0 ? "bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)]" : "bg-[#BDBDBD]"}`} />
                          )}

                          {/* Número da etapa */}
                          <div
                            className={`w-[50px] h-[50px] flex items-center justify-center rounded-full font-bold text-[24px] mt-2
                                ${step >= index + 1 ? "bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)] text-white" : "bg-[#BDBDBD] text-gray-800"}`}>
                            {index + 1}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Tela de Sucesso */}
                  {status === "success" && (
                    <div className="w-[1042px] p-6 sm:p-8 flex flex-col items-center justify-center bg-transparent text-white">
                      <Image src="/images/successSubscriptionIcon.svg" width={100} height={100} alt="Imagem de sucesso!" />
                      <h2 className="text-3xl font-bold mt-4">Inscrição realizada com sucesso!</h2>
                      <div className="w-full sm:w-[580px] mt-10 mb-10">
                        <p className="text-lg text-white-300 text-center mt-2">
                        Obrigado <span className="font-bold">{getValues("personalData.fullName")}</span> por querer fazer parte do Union! Em breve nossa equipe vai entrar em contato pelo seu email <span className="font-bold">{getValues("personalData.email")}</span>, fique atento.
                        </p>
                      </div>
                    </div>
                  )}


                  {/* Tela de Erro */}
                  {status === "error" && (
                    <div className="w-full p-6 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-bl from-[rgb(0,72,254,0.2)] to-[rgb(133,29,134,0.2)] rounded-xl shadow-lg text-white">

                      <Image src="/images/successSubscriptionIcon.svg" width={10} height={10} alt="Imagem de sucesso!" />
                      <h2 className="text-3xl font-bold mt-4">Ocorreu um erro na inscrição</h2>
                      <div className="w-full sm:w-[580px] mt-10 mb-10">
                        <p className="text-lg text-white-300 text-center mt-2">
                          Infelizmente ocorreu um erro ao processar sua inscrição. Tente novamente mais tarde ou entre em contato com o suporte.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}