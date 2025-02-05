export default function Sobre() {
  return (
    <section className="py-12 px-6 flex flex-col justify-center items-center bg-[#1F1D2B]">
      
      {/* 🔥 Container externo que cria a borda gradiente */}
      <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)]">
        
        {/* 🔥 Card interno com fundo sólido */}
        <div className="relative max-w-3xl p-6 bg-[#1F1D2B] text-white rounded-xl">
          
          {/* Linha com gradiente no topo */}
          <div className="flex items-center w-full mb-6 relative">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] mx-6 text-left">
              Quem somos?
            </h2>
          </div>

          {/* Texto dentro do card */}
          <p className="text-lg leading-relaxed">
            O Union é uma oportunidade única para desenvolvedores juniores, nossa missão é proporcionar a
            você um ambiente prático e imersivo, semelhante ao que você encontrará no mercado. Aqui,
            você vai vivenciar como é o dia a dia de um desenvolvedor de software, trabalhando lado a lado
            com líderes experientes e outros talentosos desenvolvedores que estão no mesmo caminho que você.
          </p>
          <br />
          <p className="text-lg leading-relaxed">
            No Union, você não apenas ganhará experiência, mas também estará pronto para enfrentar as
            demandas do mercado de tecnologia. Nossa abordagem holística enfatiza não apenas o conhecimento
            técnico, mas também habilidades interpessoais e práticas ágeis.
          </p>
        </div>
      </div>
      <span className="border-2 h-[50px]"></span>

    </section>
  );
}
