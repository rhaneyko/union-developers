"use client";

import Image from "next/image";

const InscricaoCard = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center p-6"
            style={{ backgroundImage: "url('/images/backgroundImageInscricao.png')" }}>
            <div className="flex items-center max-h-[250px] bg-black bg-opacity-40 p-6 rounded-lg shadow-lg">
                <Image
                    src="/images/hero-image-desktop.svg"
                    alt="Logo"
                    width={160}
                    height={160}
                    className="w-[400px] md:w-[500px] h-auto md:h-[500px] mt-8 slow-bounce"
                />
                <div className="text-white">
                    <h2 className="text-lg font-bold mb-2">
                        Vivencia na prática, ambiente imersivo, desafios e muito mais!
                    </h2>
                    <p className="text-red-500 font-semibold mb-4">
                        Inscreva-se já! Vagas limitadas
                    </p>
                    <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:scale-105 transition-transform">
                        Inscrever-se agora
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InscricaoCard;
