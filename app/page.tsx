import Footer from "./components/Footer";
import Header from "./components/Header";
import Beneficios from "./sections/Beneficios";
import Depoimentos from "./sections/Depoimentos";
import Duvidas from "./sections/Duvidas";
import Etapas from "./sections/Etapas";
import Hero from "./sections/Hero";
import Inscricao from "./sections/Inscricao";
import Pilares from "./sections/Pilares";
import Sobre from "./sections/Sobre";

export default function Home() {
  return (
    <>
      <Header />
      <Hero id="hero" />
      <Sobre id="sobre" />
      <Pilares id="pilares" />
      <Beneficios id="beneficios" />
      <Etapas id="etapas" />
      <Depoimentos id="depoimentos" />
      <Inscricao id="inscricao" />
      <Duvidas id="duvidas" />
      <Footer />
    </>
  );
}