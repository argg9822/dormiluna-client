'use client'
import { Description } from "../components/Description";
import { Hero } from "../components/Hero";
import { MainProducts } from "../components/MainProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Description /> */}
      <MainProducts />
    </main>
  );
}
