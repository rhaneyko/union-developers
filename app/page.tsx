import Header from "./components/Header";
import Beneficios from "./sections/Beneficios";
import Hero from "./sections/Hero";
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
    </>
  );
}
