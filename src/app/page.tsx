'use client'
import { Description } from "../components/Description";
import { Hero } from "../components/Hero";
import { MainProducts } from "../components/MainProducts";
import { Dormiluna } from "../components/Dormiluna";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Description /> */}
      <Dormiluna />
      {/* <Productos /> */}  {/* Si existe el componente, importarlo y usarlo correctamente */}
      <MainProducts />
    </main>
  );
}
