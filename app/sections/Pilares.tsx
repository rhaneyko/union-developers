
interface HeroProps {
    id: string; 
  }
  

export default function Pilares({ id }: HeroProps) {
    return (
        <section className="flex justify-center text-center bg-[#1F1D2B] px-4 sm:px-0 py-8" id={id}>

            {/* Container Principal */}
            <div className="w-full max-w-[1250px] md:max-w-[1400px] bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] p-[2px] rounded-xl">
                <div className="flex flex-col items-center bg-[#1F1D2B] text-white rounded-xl px-6 py-8 sm:py-12">
                    
                    {/* Título */}
                    <div className="mt-[-20px] sm:mt-[-80px] bg-[#1F1D2B] px-4">
                        <h1 className="text-[28px] sm:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)]">
                            Pilares
                        </h1>
                    </div>

                    {/* Descrição */}
                    <p className="text-[16px] sm:text-2xl text-gray-300 max-w-md sm:max-w-4xl mx-auto mt-4 sm:mt-8 mb-8 sm:mb-24">
                        Os pilares que sustentam o formato inovador de aprendizagem do Union é a junção de incríveis metodologias!
                    </p>

                    {/* Grid de Cards */}
                    <div className="flex flex-col sm:flex-row sm:gap-8 rounded-xl w-full sm:w-[1450px] max-w-[1450px] sm:mb-[-50px] sm:px-[100px] bg-[#1F1D2B] ">

                        {/* Card 1 */}
                        <div className="bg-[#141221] w-full sm:w-[396px] min-w-[250px] sm:min-w-[337px] text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group mb-6 sm:mb-0">
                            <div className="p-[30px] sm:p-[50px] text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-[#851D86] to-[#0048FE]
                            transition-all duration-300 group-hover:bg-white group-hover:text-black">
                                Ativa
                            </div>
                            <div className="p-4 sm:p-6 text-gray-300 text-sm sm:text-base">
                                <p>
                                    Metodologia ativa é uma abordagem educacional que coloca o aluno como protagonista, onde ele é responsável
                                    por buscar conhecimento, enquanto o professor atua como mentor, auxiliando no aprendizado.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#141221] w-full sm:w-[396px] min-w-[250px] sm:min-w-[337px] text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group mb-6 sm:mb-0">
                            <div className="p-[30px] sm:p-[50px] text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-[#851D86] to-[#0048FE]
                            transition-all duration-300 group-hover:bg-white group-hover:text-black">
                                Andragogia
                            </div>
                            <div className="p-4 sm:p-6 text-gray-300 text-sm sm:text-base">
                                <p>
                                    É uma metodologia de ensino para adultos, que tem mais liberdade e colaboração, permitindo que o aluno
                                    decida quando, como e o que estudar, tornando o processo de aprendizagem mais sólido e eficaz.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#141221] w-full sm:w-[396px] min-w-[250px] sm:min-w-[337px] text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group">
                            <div className="p-[30px] sm:p-[50px] text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-[#851D86] to-[#0048FE]
                            transition-all duration-300 group-hover:bg-white group-hover:text-black">
                                Ágil
                            </div>
                            <div className="p-4 sm:p-6 text-gray-300 text-sm sm:text-base">
                                <p>
                                    A metodologia ágil é uma abordagem que estimula a colaboração entre o time, permitindo que tenha uma visão
                                    mais transparente e liberdade para tomar decisões, buscando a melhora contínua.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
