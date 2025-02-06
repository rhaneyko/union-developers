export default function Etapas() {
    return (
        <section className="py-12 px-6 flex flex-col justify-center items-center bg-[#1F1D2B]">
            <h2 className="text-white text-lg font-semibold mb-8">
                Conheça as etapas do nosso processo seletivo
            </h2>

            {/* 🔥 Container das Etapas */}
            <ul className="relative w-full max-w-[800px] space-y-12">

                {/* 🔹 Etapa 1 */}
                <li className="relative flex items-center">
                    <span className="absolute left-0 text-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[rgb(133,29,134)] to-[rgb(0,72,254)]">
                        1
                    </span>
                    <div className="relative ml-16 p-6 w-[300px] bg-[#141221] text-white rounded-tl-lg 
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] 
                before:bg-gradient-to-r before:from-[rgb(133,29,134)] before:to-[rgb(0,72,254)] before:rounded-tl-lg">
                        <h3 className="text-lg font-bold">Pré-Inscrição</h3>
                        <p className="text-sm text-gray-300">Inicie a sua inscrição preenchendo o nosso formulário</p>
                    </div>

                    {/* Linha de conexão */}
                    <span className="absolute left-[60px] mt-[-115px] ml-[304px] w-[100px] h-[2px] 
                bg-gradient-to-r from-[rgb(0,72,254)] to-[rgb(133,29,134)]">
                    </span>
                </li>

                {/* 🔹 Etapa 2 */}
                <li className="relative flex items-center justify-end">
                    <div className="mr-16 p-6 w-[300px] bg-[#141221] text-white rounded-xl border border-blue-500">
                        <h3 className="text-lg font-bold">Análise do formulário</h3>
                        <p className="text-sm text-gray-300">O nosso time irá analisar suas informações</p>
                    </div>
                    <span className="absolute right-[60px] top-full w-[2px] h-12 bg-gradient-to-b from-blue-500 to-purple-500"></span>
                    <span className="absolute right-0 text-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-blue-500">
                        2
                    </span>
                </li>

                {/* 🔹 Etapa 3 */}
                <li className="relative flex items-center">
                    <span className="absolute left-0 text-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500">
                        3
                    </span>
                    <div className="ml-16 p-6 w-[300px] bg-[#141221] text-white rounded-xl border border-purple-500">
                        <h3 className="text-lg font-bold">Desafio técnico</h3>
                        <p className="text-sm text-gray-300">Após a análise, você receberá um desafio prático</p>
                    </div>
                    <span className="absolute left-[60px] top-full w-[2px] h-12 bg-gradient-to-b from-purple-500 to-blue-500"></span>
                </li>

                {/* 🔹 Etapa 4 */}
                <li className="relative flex items-center justify-end">
                    <div className="mr-16 p-6 w-[300px] bg-[#141221] text-white rounded-xl border border-blue-500">
                        <h3 className="text-lg font-bold">Entrevista</h3>
                        <p className="text-sm text-gray-300">Nessa fase, iremos bater um papo para que possamos conhecer melhor você</p>
                    </div>
                    <span className="absolute right-0 text-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-blue-500">
                        4
                    </span>
                </li>

            </ul>
        </section>
    );
}
