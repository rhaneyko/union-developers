import Header from "./components/Header";
import Beneficios from "./sections/Beneficios";
import Depoimentos from "./sections/Depoimentos";
import Etapas from "./sections/Etapas";
import Hero from "./sections/Hero";
import Inscricao from "./sections/Inscricao";
import Pilares from "./sections/Pilares";
import Sobre from "./sections/Sobre";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Pilares/>
      <Beneficios/>
      <Etapas/>
      <Depoimentos/>
      <Inscricao/>
    </>
  );
}
