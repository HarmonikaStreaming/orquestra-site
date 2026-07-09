import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Orquestra Academy — Em breve",
  description: "A Orquestra Academy está a caminho. Em breve, sua plataforma própria de educação continuada.",
};

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <div className="badge">Orquestra Academy</div>
        <h1 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight">
          Em <span className="text-gradient">breve</span>.
        </h1>
        <p className="mt-4 max-w-lg text-ol-slate">
          Estamos preparando uma plataforma própria de educação continuada.
          Volte em breve para conhecer a Orquestra Academy.
        </p>
      </main>
      <Footer />
    </>
  );
}
