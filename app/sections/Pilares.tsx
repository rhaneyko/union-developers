export default function Pilares() {
    return (
        <section className="flex justify-center text-center bg-[#1F1D2B]" id="pilares">

            {/* Título principal */}
            <div className="flex flex-col justify-center items-center p-[2px] rounded-xl 
                      bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)]
                      w-[1250px] md:max-w-[1400px]">
                <div className="flex flex-col items-center relative w-full h-auto p-4 md:p-6 bg-[#1F1D2B] text-white rounded-xl">
                    <div className="mt-[-50px] bg-[#1F1D2B]  md:w-[340px]">
                        <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] mx-4">
                            Pilares
                        </h1>
                    </div>
                    <p className="text-2xl text-gray-300 max-w-4xl mx-auto mt-8 mb-24">
                        Os pilares que sustentam o formato inovador de aprendizagem do Union é a junção de incríveis metodologias!
                    </p>

                    {/* Grid de Cards */}
                    <div className="flex justify-center flex-col md:flex-row md:gap-8 rounded-xl w-[1450px] max-w-[1450px] mb-[-30px] bg-[#1F1D2B]">

                        <div className="bg-[#141221] w-[396px] min-w-[337px] text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group">
                            {/* Título - Apenas essa parte terá o fundo branco no hover */}
                            <div className="p-[50px] text-xl font-bold text-white bg-gradient-to-r from-[#851D86] to-[#0048FE]
                    transition-all duration-300 group-hover:bg-white group-hover:text-black">
                                Ativa
                            </div>

                            {/* Conteúdo */}
                            <div className="p-6 text-gray-300">
                                <p>
                                    Metodologia ativa é uma abordagem educacional que coloca o aluno como protagonista, onde ele é o responsável
                                    por ir atrás dos conhecimentos necessários, ficando o professor como um mentor, que vai mostrar o caminho
                                    para que ele possa ter sucesso no aprendizado.
                                </p>
                            </div>
                        </div>



                        {/* Card 2 - Andragogia */}
                        <div className="bg-[#141221] w-[396px] min-w-[337px] text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group">
                            <div className="p-[50px] text-xl font-bold text-white bg-gradient-to-r from-[#851D86] to-[#0048FE]
                    transition-all duration-300 group-hover:bg-white group-hover:text-black">
                                Andragogia
                            </div>
                            <div className="p-6 text-gray-300">
                                <p>
                                    É uma metodologia de ensino para adultos, que tem mais liberdade e colaboração, permitindo que o aluno
                                    decida quando, como e o que estudar, tornando o processo de aprendizagem mais sólido e eficaz,
                                    a andragogia valoriza a autonomia e a experiência dos adultos como base para a aprendizagem.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 - Ágil */}
                        <div className="bg-[#141221] w-[396px] min-w-[337px]   text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group">
                            <div className="p-[50px] text-xl font-bold text-white bg-gradient-to-r from-[#851D86] to-[#0048FE]
                    transition-all duration-300 group-hover:bg-white group-hover:text-black">
                                Ágil
                            </div>
                            <div className="p-6 text-gray-300">
                                <p>
                                    A metodologia ágil é uma metodologia que estimula a colaboração entre o time, permitindo que tenha uma visão
                                    mais transparente, liberdade para fazer escolhas e tomar decisões, buscando a melhora contínua entre os membros,
                                    os processos e a qualidade geral do trabalho.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
