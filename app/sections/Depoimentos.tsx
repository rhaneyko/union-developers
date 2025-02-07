"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Depoimentos() {
  const testimonials = [
    {
      name: "Matheus Oliveira",
      image: "/images/matheusOliveiraImage.png",
      feedback:
        "Antes de participar do Union, eu não tinha a mínima ideia de como era trabalhar em equipe e foi muito importante ter essa experiência.",
      linkedin: "/images/linkedinIcon.svg",
      github: "/images/githubIcon.svg",
    },
    {
      name: "Luiz Meraki",
      image: "/images/luizMerakiImage.png",
      feedback:
        "No Union você consegue ter muita evolução em pouco tempo, desenvolvendo tanto sua parte técnica como as habilidades interpessoais.",
      linkedin: "/images/linkedinIcon.svg",
      github: "/images/githubIcon.svg",
    },
    {
      name: "José Ronaldo",
      image: "/images/joseRonaldoImage.png",
      feedback:
        "O principal benefício do Union é ter uma pessoa mais experiente junto, que vai te direcionando. No Union, você encontra um ambiente muito profissional.",
      linkedin: "/images/linkedinIcon.svg",
      github: "/images/githubIcon.svg",
    },
    {
      name: "Petrus Borges",
      image: "/images/petrusBorgesImage.jpg",
      feedback:
        "No Union eu consegui desenvolver minhas hard skills, aprendendo novas tecnologias e melhorando a escrita do meu código.",
      linkedin: "/images/linkedinIcon.svg",
      github: "/images/githubIcon.svg",
    },
    {
      name: "Salomão Leal",
      image: "/images/salomaoLealImage.jpg",
      feedback:
        "No Union você consegue ter muita evolução em pouco tempo, desenvolvendo tanto sua parte técnica como as habilidades interpessoais.",
      linkedin: "/images/linkedinIcon.svg",
      github: "/images/githubIcon.svg",
    },
  ];

  const totalSlides = testimonials.length;
  const [activeIndex, setActiveIndex] = useState(Math.floor(totalSlides / 2));

  return (
    <section className="py-12 px-6 flex flex-col justify-center items-center" id="depoimentos">
      <div className="flex items-center w-full justify-center">
                <span className="absolute ml-[-920px] block w-[32%] h-[3px] rounded-[20px] 
                 bg-gradient-to-bl from-[rgb(0,72,254)] to-[rgb(133,29,134)]"></span>
                <h2 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(133,29,134)] to-[rgb(0,72,254)] mx-4">
                    Depoimentos
                </h2>
                <span className="absolute ml-[920px] block w-[32%] h-[3px] rounded-[20px] 
                 bg-gradient-to-bl from-[rgb(133,29,134)] to-[rgb(0,72,254)]"></span>
            </div>
                 <p className="text-[24px] font-400 m-[40px]">Veja o que quem já passou por essa experiência fala</p>

      {/* 🔹 Carousel */}
      <div className="relative w-full max-w-[1200px]">
        <Swiper
          modules={[Navigation]}
          slidesPerView={"auto"} 
          centeredSlides={true}
          spaceBetween={35}
          initialSlide={Math.floor(totalSlides / 2)}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center mt-[70px]">
              <div
                className={`relative max-w-md rounded-lg bg-gradient-to-tr from-[rgb(133,29,134)] to-[rgb(0,72,254)] p-0.5 shadow-lg transition-all duration-300 m-12
                ${
                  index === activeIndex
                    ? "w-[398px] h-[732px] right-14 bottom-20" 
                    : "w-[286px] h-[550px]"
                }`}
              >
                <div className="flex flex-col items-center justify-between h-full rounded-lg bg-[#1F1D2B] text-white p-6">
                  <div className="flex justify-center mt-10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-[24px] font-bold text-center mt-4">
                    {testimonial.name}
                  </h3>
                  <p className="text-[18px] text-gray-300 text-center mt-2">
                    {testimonial.feedback}
                  </p>
                  <div className="flex justify-center space-x-4 mt-4 text-gray-400">
                    <a href={testimonial.linkedin} className="">
                      <Image src={testimonial.linkedin} alt="LinkedIn" width={24} height={24} />
                      <p className="text-xs">LinkedIn</p>
                    </a>
                    <a href={testimonial.github} className="">
                      <Image src={testimonial.github} alt="Github" width={24} height={24} />
                      <p className="text-xs">Github</p>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔹 Botões de Navegação */}
        <button className="swiper-button-prev absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 text-purple-400 hover:text-white">
          <ChevronLeft size={32} />
        </button>
        <button className="swiper-button-next absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 text-purple-400 hover:text-white">
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
