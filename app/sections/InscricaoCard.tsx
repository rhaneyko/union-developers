"use client";

import Image from "next/image";

const InscricaoCard = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center p-6 opac"
            style={{ backgroundImage: "url('/images/backgroundImageInscricao.png')" }}>
            <div className="flex items-center w-[1224px] h-[321px] bg-black bg-opacity-40 p-10 rounded-lg shadow-lg">
                <Image
                    src="/images/hero-image-desktop.svg"
                    alt="Logo"
                    width={160}
                    height={160}
                    className="w-[400px] md:w-[500px] h-auto md:h-[500px] mt-8 slow-bounce"
                />
                <div className="flex flex-col items-center text-white w-full">
                    <div className="text-center w-[500px]">
                        <h2 className="text-[32px] font-bold mb-2">
                            Vivencia na prática, ambiente imersivo, desafios e muito mais!
                        </h2>
                        <p className="text-[28px] text-red-500 font-semibold mb-4">
                            Inscreva-se já! Vagas limitadas
                        </p>
                    </div>
                    <a href="#inscricao"
                        className="items-center px-14 md:px-24 py-5 md:py-6 text-lg md:text-xl font-bold text-white rounded-lg shadow-md
                                   bg-gradient-to-r from-[#851D86] to-[#0048FE] 
                                   hover:from-[#6B1570] hover:to-[#003BBC] 
                                   transition-all">
                        Inscrever-se agora
                    </a>
                </div>
            </div>
        </div>
    );
};

export default InscricaoCard;
