export default function Pilares() {
    return (
        <section className="py-12 px-6 text-center bg-[#1F1D2B]" id="pilares">

            {/* Título principal */}
            <div className="flex items-center justify-center w-full mb-6 bg-gradient">
                <span className="flex-1 h-[4px] bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(133,29,134)]"></span>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] mx-4">
                    Pilares
                </h1>
                <span className="flex-1 h-[4px] bg-gradient-to-r from-[rgb(0,72,254)] to-[rgb(0,72,254)]"></span>
            </div>


            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
                Os pilares que sustentam o formato inovador de aprendizagem do Union é a junção de incríveis metodologias!
            </p>

            {/* Grid de Cards */}
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">

                <div className="bg-[#141221] text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group">
                    {/* Título - Apenas essa parte terá o fundo branco no hover */}
                    <div className="py-4 text-xl font-bold text-white bg-gradient-to-r from-[#851D86] to-[#0048FE]
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
                <div className="bg-[#141221] text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group">
                    <div className="py-4 text-xl font-bold text-white bg-gradient-to-r from-[#851D86] to-[#0048FE]
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
                <div className="bg-[#141221] text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group">
                    <div className="py-4 text-xl font-bold text-white bg-gradient-to-r from-[#851D86] to-[#0048FE]
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
        </section>
    );
}
