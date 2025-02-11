import Image from "next/image";

interface HeroProps {
  id: string;
}
export default function Beneficios({ id }: HeroProps) {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 text-center w-full" id={id}>
      {/* Título e descrição */}
      <div className="flex flex-col items-center w-full mb-6">
        <div className="flex items-center w-full justify-center relative">
          <span className="hidden sm:block absolute left-0 w-[20%] h-[3px] rounded-[20px] bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)]"></span>
          <h2 className="text-2xl sm:text-[32px] md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] mx-4">
            Benefícios
          </h2>
          <span className="hidden sm:block absolute right-0 w-[20%] h-[3px] rounded-[20px] bg-gradient-to-bl from-[rgb(133,29,134)] to-[rgb(0,72,254)]"></span>
        </div>

        <p className="text-[16px] sm:text-[18px] md:text-[24px] text-gray-300 max-w-[750px] mx-auto mt-6 md:mt-10 mb-6 md:mb-10">
          Conheça os benefícios incríveis que o Union proporciona para seus membros!
        </p>
      </div>


      {/* Lista de Benefícios */}
      <div className="flex flex-col items-center gap-6 max-w-6xl mx-auto">

        {[
          {
            title: "Preparação para o mercado",
            text: "Os membros são equipados com uma compreensão profunda das práticas de mercado, permitindo-lhes ingressar no setor com confiança e conhecimento.",
            image: "/images/preparacaoImage.svg",
          },
          {
            title: "Aprendizado de novas tecnologias e ferramentas",
            text: "Os membros são expostos a uma variedade de tecnologias e ferramentas relevantes, expandindo suas habilidades e conhecimentos.",
            image: "/images/tecnologiasImage.svg",
          },
          {
            title: "Desenvolvimento de hard skills",
            text: "Através de projetos reais, os membros fortalecem suas habilidades técnicas, aumentando sua capacidade de contribuir de forma eficaz em ambientes profissionais.",
            image: "/images/hardSkillsImage.svg",
          },
          {
            title: "Desenvolvimento de soft skills",
            text: "Além das competências técnicas, os membros aprimoram habilidades interpessoais cruciais, como comunicação eficaz, resolução de conflitos e trabalho em equipe.",
            image: "/images/softSkillsImage.svg",
          },
          {
            title: "Ambiente imersivo",
            text: "O Union oferece uma oportunidade única de aplicar conhecimentos teóricos em cenários do mundo real, proporcionando uma experiência diferenciada e valiosa.",
            image: "/images/ambienteImage.svg",
          },
          {
            title: "Networking",
            text: "A participação no Union expande sua rede de contatos, abrindo portas para colaborações futuras e oportunidades profissionais.",
            image: "/images/networkingImage.svg",
          },
          {
            title: "Domínio de metodologias ágeis",
            text: "Através da vivência prática, os membros aprendem a aplicar metodologias ágeis como Scrum, preparando-os para ambientes de trabalho colaborativos.",
            image: "/images/metodologiasImage.svg",
          },
          {
            title: "Mentoria",
            text: "Os mentores experientes oferecem orientação valiosa, proporcionando uma trajetória de aprendizado mais suave e eficiente.",
            image: "/images/mentoriaImage.svg"
          },
        ].map((benefit, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center text-white w-full max-w-[1129px] p-6 md:p-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            <Image src={benefit.image} width={120} height={120} alt={benefit.title} className="w-[100px] sm:w-[120px] md:w-[160px] h-auto" />
            <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left w-full md:w-[674px]">
              <h3 className="text-[24px] md:text-[32px] font-bold">{benefit.title}</h3>
              <p className="text-[18px] md:text-[24px] text-gray-300 mt-2">{benefit.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
