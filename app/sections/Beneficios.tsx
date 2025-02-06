import Image from "next/image";

export default function Beneficios() {
  return (
    <section className="py-32 px-6 text-center">
      {/* Título e descrição */}
      <div className="flex flex-col items-center w-full mb-6">
        <div className="flex items-center w-full justify-center">
          <span className="absolute ml-[-920px] block w-[32%] h-[3px] rounded-[20px] 
                 bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)]"></span>
          <h2 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] mx-4">
            Benefícios
          </h2>
          <span className="absolute ml-[920px] block w-[32%] h-[3px] rounded-[20px] 
                 bg-gradient-to-bl from-[rgb(133,29,134)] to-[rgb(0,72,254)]"></span>
        </div>

        <p className="text-[24px] text-gray-300 w-[750px] mx-auto mt-10 mb-10">
          Conheça os benefícios incríveis que o Union proporciona para seus membros!
        </p>
      </div>

      {/* Lista de Benefícios */}
      <div className="flex flex-col items-center gap-6 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="flex flex-row items-center text-white w-full odd:flex-row even:flex-row-reverse w-[1129px] p-12">
          <Image src={"/images/preparacaoImage.svg"} width={160} height={160} alt="" />
          <span></span>
          <div className="ml-4 text-left w-[674px]">
            <h3 className="text-[32px] font-bold">Preparação para o mercado</h3>
            <p className="text-[24px] text-gray-300 mt-2">
              Os membros são equipados com uma compreensão profunda das práticas de mercado, permitindo-lhes ingressar no setor com confiança e conhecimento.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-row items-center text-white p-6 w-full odd:flex-row even:flex-row-reverse w-[1129px] p-12">
          <Image src={"/images/tecnologiasImage.svg"} width={160} height={160} alt="" />
          <div className="mr-8 text-left w-[674px]">
            <h3 className="text-[32px] text-right font-bold">Aprendizado de novas tecnologias e ferramentas</h3>
            <p className="text-[24px] text-right text-gray-300 mt-2">
              Os membros são expostos a uma variedade de tecnologias e ferramentas relevantes, expandindo suas habilidades e conhecimentos.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-row items-center text-white p-6 w-full odd:flex-row even:flex-row-reverse w-[1129px] p-12">
        <Image src={"/images/hardSkillsImage.svg"} width={160} height={160} alt="" />
          <div className="ml-4 text-left w-[674px]">
            <h3 className="text-[32px] font-bold">Desenvolvimento de hard skills</h3>
            <p className=" text-[24px] text-gray-300 mt-2">
              Através de projetos reais, os membros fortalecem suas habilidades técnicas, aumentando sua capacidade de contribuir de forma eficaz em ambientes profissionais.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-row items-center text-white p-6 w-full odd:flex-row even:flex-row-reverse w-[1129px] p-12">
        <Image src={"/images/softSkillsImage.svg"} width={160} height={160} alt="" />
          <div className="ml-4 text-left w-[674px]">
            <h3 className="text-[32px] text-right font-bold">Desenvolvimento de soft skills</h3>
            <p className="text-[24px] text-right text-gray-300 mt-2">
              Além das competências técnicas, os membros aprimoram habilidades interpessoais cruciais, como comunicação eficaz, resolução de conflitos e trabalho em equipe.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex flex-row items-center text-white p-6 w-full odd:flex-row even:flex-row-reverse w-[1129px] p-12">
        <Image src={"/images/ambienteImage.svg"} width={160} height={160} alt="" />
          <div className="ml-4 text-left w-[674px]">
            <h3 className="text-[32px] font-bold">Ambiente imersivo</h3>
            <p className="text-[24px] text-gray-300 mt-2">
              O Union oferece uma oportunidade única de aplicar conhecimentos teóricos em cenários do mundo real, proporcionando uma experiência diferenciada e valiosa.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex flex-row items-center text-white p-6 w-full odd:flex-row even:flex-row-reverse w-[1129px] p-12">
        <Image src={"/images/networkingImage.svg"} width={160} height={160} alt="" />
          <div className="ml-4 text-left w-[674px]">
            <h3 className="text-[32px] text-right font-bold">Networking</h3>
            <p className="text-[24px] text-right text-gray-300 mt-2">
              A participação no Union expande sua rede de contatos, abrindo portas para colaborações futuras e oportunidades profissionais.
            </p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="flex flex-row items-center text-white p-6 w-full odd:flex-row even:flex-row-reverse w-[1129px] p-12">
        <Image src={"/images/metodologiasImage.svg"} width={160} height={160} alt="" />
          <div className="ml-4 text-left w-[674px]">
            <h3 className="text-[32px] font-bold">Domínio de metodologias ágeis</h3>
            <p className="text-[24px] text-gray-300 mt-2">
              Através da vivência prática, os membros aprendem a aplicar metodologias ágeis como Scrum, preparando-os para ambientes de trabalho colaborativos.
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="flex flex-row items-center text-white p-6 w-full odd:flex-row even:flex-row-reverse w-[1129px] p-12">
        <Image src={"/images/mentoriaImage.svg"} width={160} height={160} alt="" />
          <div className="ml-4 text-left w-[674px]">
            <h3 className="text-[32px] text-right font-bold">Mentoria</h3>
            <p className="text-[24px] text-right text-gray-300 mt-2">
              Os mentores experientes oferecem orientação valiosa, proporcionando uma trajetória de aprendizado mais suave e eficiente.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
