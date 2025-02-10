interface HeroProps {
  id: string; // Adicione a prop id
}


export default function Sobre({ id }: HeroProps) {
  return (
    <section className="py-10 px-4 flex flex-col justify-center items-center bg-[#1F1D2B]" id={id}>

      {/* Container externo com borda gradiente */}
      <div className="flex flex-col justify-center items-center p-[2px] rounded-xl 
                      bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] 
                      w-full max-w-full md:max-w-[1100px] h-full">

        {/* Card interno */}
        <div className="relative w-full h-auto p-6 sm:p-10 bg-[#1F1D2B] text-white rounded-xl">

        <div className="flex items-center w-full md:w-[340px] mb-4 mt-[-75px] mx-auto md:ml-[30px] px-4 md:px-6 relative bg-[#1F1D2B]">
            <h2 className="text-[28px] md:text-[40px] font-bold text-transparent bg-clip-text 
                           bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] 
                           text-center md:text-left">
              Quem somos?
            </h2>
          </div>

          {/* Parágrafos responsivos */}
          <div className="space-y-4 px-4 sm:px-10 max-w-full sm:max-w-[900px] text-[16px] sm:text-[24px] leading-relaxed">
            <p>
              O Union é uma oportunidade única para desenvolvedores juniores, nossa missão é proporcionar a
              você um ambiente prático e imersivo, semelhante ao que você encontrará no mercado. Aqui,
              você vai vivenciar como é o dia a dia de um desenvolvedor de software, trabalhando lado a lado
              com líderes experientes e outros talentosos desenvolvedores que estão no mesmo caminho que você.
            </p>
            <p>
              No Union, você não apenas ganhará experiência, mas também estará pronto para enfrentar as
              demandas do mercado de tecnologia. Nossa abordagem holística enfatiza não apenas o conhecimento
              técnico, mas também habilidades interpessoais e práticas ágeis.
            </p>
          </div>

        </div>
      </div>

      {/* Barra gradiente abaixo */}
      <div className="relative p-[2px] w-1 h-24 sm:h-32 bg-gradient-to-b from-[rgb(67,44,160)] to-transparent 
                after:content-[''] after:absolute after:w-full after:h-full after:rounded-inherit 
                after:bg-gradient-to-tl after:from-[rgb(31,29,43)] after:to-transparent"></div>

    </section>
  );
}
