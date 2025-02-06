export default function Etapas() {
    return (
        <section className="py-12 px-6 flex flex-col justify-center items-center bg-[#1F1D2B]" id="etapas">

            <div className="flex items-center w-full justify-center">
                <span className="absolute ml-[-920px] block w-[32%] h-[3px] rounded-[20px] 
                 bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)]"></span>
                <h2 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] mx-4">
                    Etapas
                </h2>
                <span className="absolute ml-[920px] block w-[32%] h-[3px] rounded-[20px] 
                 bg-gradient-to-bl from-[rgb(133,29,134)] to-[rgb(0,72,254)]"></span>
            </div>
            <p className="text-[24px] text-gray-300 w-[750px] mx-auto mt-10 mb-10">Conheça as etapas do nosso processo seletivo</p>
            <div className="relative flex flex-col items-center justify-center w-[1100px]">

                {/* Container das Etapas */}
                <ul className="relative w-full max-w-[800px] space-y-12">

                    {/* 🔹 Etapa 1 */}
                    <li className="relative flex left-[-140px] top-5 ">
                        <div className="flex items-center relative w-[441px] bg-[rgb(18,17,25)] text-white rounded-[10px]
                                        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] 
                                        before:bg-gradient-to-r before:from-[rgb(133,29,134)] before:to-[rgb(0,72,254)] before:rounded-tl-lg">
                            <span className="absolute left-[-51] text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[rgb(133,29,134)] to-[rgb(0,72,254)]">
                                1
                            </span>
                            <div className="p-16 text-center">
                                <h3 className="text-[24px] font-bold">Pré-Inscrição</h3>
                                <p className="text-[22px] text-gray-300">Inicie a sua inscrição preenchendo o nosso formulário</p>
                            </div>
                        </div>

                        {/* Linha de conexão */}
                        <span className="absolute left-[137px] ml-[304px] w-[100px] h-[2px] 
                bg-gradient-to-r from-[rgb(0,72,254)] to-[rgb(133,29,134)]"></span>
                    </li>

                    {/* 🔹 Etapa 2 */}
                    <li className="relative flex items-center justify-end left-[140px] top-5">
                        <div className="flex items-center relative w-[441px] bg-[rgb(18,17,25)] text-white rounded-[10px]
                                        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] 
                                        before:bg-gradient-to-r before:from-[rgb(133,29,134)] before:to-[rgb(0,72,254)] before:rounded-tl-lg">
                            <span className="absolute left-[-51] text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[rgb(133,29,134)] to-[rgb(0,72,254)]">
                                2
                            </span>
                            <div className="p-16 text-center">
                                <h3 className="text-[24px] font-bold">Análise do formulário</h3>
                                <p className="text-[22px] text-gray-300">O nosso time irá analisar suas informações</p>
                            </div>
                        </div>
                        <span className="absolute left-[70px] mt-[-228px] ml-[190px] w-[100px] h-[2px] bg-gradient-to-r from-[rgb(0,72,254)] to-[rgb(133,29,134)]"></span>
                    </li>

                    {/* 🔹 Etapa 3 */}
                    <li className="relative flex left-[-140px] top-5">
                        <div className="flex items-center relative w-[441px] bg-[rgb(18,17,25)] text-white rounded-[10px]
                                        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] 
                                        before:bg-gradient-to-r before:from-[rgb(133,29,134)] before:to-[rgb(0,72,254)] before:rounded-tl-lg">
                            <span className="absolute left-[-51] text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[rgb(133,29,134)] to-[rgb(0,72,254)]">
                                3
                            </span>
                            <div className="p-16 text-center">
                                <h3 className="text-[24px] font-bold">Desafio técnico</h3>
                                <p className="text-[22px] text-gray-300">Após a análise, você receberá um desafio prático</p>
                            </div>
                        </div>
                        <span className="absolute left-[137px] ml-[304px] w-[100px] h-[2px] 
                                         bg-gradient-to-r from-[rgb(0,72,254)] to-[rgb(133,29,134)]"></span>
                    </li>

                    {/* 🔹 Etapa 4 */}
                    <li className="relative flex items-center justify-end left-[140px] top-1">
                        <div className="flex items-center relative w-[441px] top-4 bg-[rgb(18,17,25)] text-white rounded-[10px]
                                        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] 
                                        before:bg-gradient-to-r before:from-[rgb(133,29,134)] before:to-[rgb(0,72,254)] before:rounded-tl-lg">
                            <span className="absolute left-[-51] text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[rgb(133,29,134)] to-[rgb(0,72,254)]">
                                4
                            </span>
                            <div className="p-16 text-center">
                                <h3 className="text-[24px] font-bold">Entrevista</h3>
                                <p className="text-[22px] text-gray-300">Nessa fase iremos bater um papo para que possamos conhecer melhor você</p>
                            </div>
                        </div>
                        <span className="absolute left-[70px] mt-[-230px] ml-[190px] w-[100px] h-[2px] bg-gradient-to-r from-[rgb(0,72,254)] to-[rgb(133,29,134)]"></span>
                    </li>

                </ul>

                <span className="absolute   top-[20px] w-[.225rem] h-[77%] 
                bg-gradient-to-r from-[rgb(0,72,254)] to-[rgb(133,29,134)] 
                rounded-[10px]"></span>
            </div>
        </section>
    );
}
