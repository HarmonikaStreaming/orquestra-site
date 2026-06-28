import { Navbar }         from "@/components/layout/Navbar";
import { Footer }         from "@/components/layout/Footer";
import { Hero }           from "@/components/sections/Hero";
import { Problema }       from "@/components/sections/Problema";
import { Pilares }        from "@/components/sections/Pilares";
import { ComoFunciona }   from "@/components/sections/ComoFunciona";
import { Funcionalidades } from "@/components/sections/Funcionalidades";
import { CasosDeUso }     from "@/components/sections/CasosDeUso";
import { Producao }       from "@/components/sections/Producao";
import { Planos }         from "@/components/sections/Planos";
import { FAQ }            from "@/components/sections/FAQ";
import { CTAFinal }       from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Pilares />
        <ComoFunciona />
        <Funcionalidades />
        <CasosDeUso />
        <Producao />
        <Planos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
