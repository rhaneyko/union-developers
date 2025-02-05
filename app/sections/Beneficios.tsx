import { Rocket, Wrench, Gamepad2, Star, Globe, Users, Lightbulb, ThumbsUp } from "lucide-react";

export default function Beneficios() {
  return (
    <section className="py-12 px-6 text-center bg-[#1F1D2B]">
      {/* Título e descrição */}
      <div className="flex flex-col items-center w-full mb-6">
        <div className="flex items-center w-full justify-center">
          <span className="w-20 h-[2px] bg-gradient-to-r from-transparent to-[rgb(133,29,134)]"></span>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] mx-4">
            Benefícios
          </h2>
          <span className="w-20 h-[2px] bg-gradient-to-r from-[rgb(0,72,254)] to-transparent"></span>
        </div>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Conheça os benefícios incríveis que o Union proporciona para seus membros!
        </p>
      </div>

      {/* Lista de Benefícios */}
      <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
        
        {/* Card 1 */}
        <div className="flex flex-row items-center bg-[#141221] text-white rounded-xl p-6 shadow-lg w-full odd:flex-row even:flex-row-reverse">
          <Rocket size={160} height={160} className="text-[rgb(133,29,134)]" />
          <div className="ml-6 text-left">
            <h3 className="text-5xl font-bold">Preparação para o mercado</h3>
            <p className="text-xl text-gray-300 mt-2">
              Os membros são equipados com uma compreensão profunda das práticas de mercado, permitindo-lhes ingressar no setor com confiança e conhecimento.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-row items-center bg-[#141221] text-white rounded-xl p-6 shadow-lg w-full odd:flex-row even:flex-row-reverse">
          <Wrench size={50} className="text-[rgb(133,29,134)]" />
          <div className="ml-6 text-left">
            <h3 className="text-5xl font-bold">Aprendizado de novas tecnologias e ferramentas</h3>
            <p className="text-xl text-gray-300 mt-2">
              Os membros são expostos a uma variedade de tecnologias e ferramentas relevantes, expandindo suas habilidades e conhecimentos.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-row items-center bg-[#141221] text-white rounded-xl p-6 shadow-lg w-full odd:flex-row even:flex-row-reverse">
          <Gamepad2 size={50} className="text-[rgb(133,29,134)]" />
          <div className="ml-6 text-left">
            <h3 className="text-5xl font-bold">Desenvolvimento de hard skills</h3>
            <p className=" text-xl text-gray-300 mt-2">
              Através de projetos reais, os membros fortalecem suas habilidades técnicas, aumentando sua capacidade de contribuir de forma eficaz em ambientes profissionais.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-row items-center bg-[#141221] text-white rounded-xl p-6 shadow-lg w-full odd:flex-row even:flex-row-reverse">
          <Star size={50} className="text-[rgb(133,29,134)]" />
          <div className="ml-6 text-left">
            <h3 className="text-5xl font-bold">Desenvolvimento de soft skills</h3>
            <p className="text-xl text-gray-300 mt-2">
              Além das competências técnicas, os membros aprimoram habilidades interpessoais cruciais, como comunicação eficaz, resolução de conflitos e trabalho em equipe.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex flex-row items-center bg-[#141221] text-white rounded-xl p-6 shadow-lg w-full odd:flex-row even:flex-row-reverse">
          <Globe size={50} className="text-[rgb(133,29,134)]" />
          <div className="ml-6 text-left">
            <h3 className="text-5xl font-bold">Ambiente imersivo</h3>
            <p className="text-xl text-gray-300 mt-2">
              O Union oferece uma oportunidade única de aplicar conhecimentos teóricos em cenários do mundo real, proporcionando uma experiência diferenciada e valiosa.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex flex-row items-center bg-[#141221] text-white rounded-xl p-6 shadow-lg w-full odd:flex-row even:flex-row-reverse">
          <ThumbsUp size={50} className="text-[rgb(133,29,134)]" />
          <div className="ml-6 text-left">
            <h3 className="text-5xl font-bold">Networking</h3>
            <p className="text-xl text-gray-300 mt-2">
              A participação no Union expande sua rede de contatos, abrindo portas para colaborações futuras e oportunidades profissionais.
            </p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="flex flex-row items-center bg-[#141221] text-white rounded-xl p-6 shadow-lg w-full odd:flex-row even:flex-row-reverse">
          <Lightbulb size={50} className="text-[rgb(133,29,134)]" />
          <div className="ml-6 text-left">
            <h3 className="text-5xl font-bold">Domínio de metodologias ágeis</h3>
            <p className="text-xl text-gray-300 mt-2">
              Através da vivência prática, os membros aprendem a aplicar metodologias ágeis como Scrum, preparando-os para ambientes de trabalho colaborativos.
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="flex flex-row items-center bg-[#141221] text-white rounded-xl p-6 shadow-lg w-full odd:flex-row even:flex-row-reverse">
          <Users size={50} className="text-[rgb(133,29,134)]" />
          <div className="ml-6 text-left">
            <h3 className="text-5xl font-bold">Mentoria</h3>
            <p className="text-xl text-gray-300 mt-2">
              Os mentores experientes oferecem orientação valiosa, proporcionando uma trajetória de aprendizado mais suave e eficiente.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
