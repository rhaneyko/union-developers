"use client";

import Image from "next/image";

const InscricaoCard = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center p-6 sm:p-10 md:p-12 lg:p-16"
            style={{ backgroundImage: "url('/images/backgroundImageInscricao.png')" }}>
            <div className="flex flex-col md:flex-row items-center w-full max-w-6xl bg-black bg-opacity-40 p-6 md:p-10 rounded-lg shadow-lg">
                <Image
                    src="/images/hero-image-desktop.svg"
                    alt="Logo"
                    width={160}
                    height={160}
                    className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto slow-bounce"
                />
                <div className="flex flex-col items-center text-white w-full mt-6 md:mt-0 md:ml-6">
                    <div className="text-center w-full max-w-lg">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold mb-2">
                            Vivência na prática, ambiente imersivo, desafios e muito mais!
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-red-500 font-semibold mb-4">
                            Inscreva-se já! Vagas limitadas
                        </p>
                    </div>
                    <a href="#inscricao"
                        className="flex items-center justify-center px-6 sm:px-10 md:px-14 lg:px-24 py-3 sm:py-4 md:py-5 lg:py-6 text-base sm:text-lg md:text-xl font-bold text-white rounded-lg shadow-md
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