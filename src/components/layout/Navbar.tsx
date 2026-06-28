"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#solucao",       label: "Solução" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#planos",        label: "Preços" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ol-bg/90 backdrop-blur-md border-b border-ol-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" aria-label="Orquestra Live — início">
          <img
            src="/images/logo-orquestra.png"
            alt="Orquestra Live"
            style={{ height: "48px", objectFit: "contain" }}
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ol-slate hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.orquestralive.com.br"
            className="text-sm font-medium text-ol-slate hover:text-white transition-colors px-3 py-2"
          >
            Entrar
          </a>
          <a href="#planos" className="btn-primary px-5 py-2 text-sm">
            Começar agora
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="md:hidden flex flex-col gap-1.5 p-2 text-white"
        >
          <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ol-surface border-t border-ol-border px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-ol-slate hover:text-white transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-ol-border flex flex-col gap-3">
            <a
              href="https://app.orquestralive.com.br"
              className="text-sm font-medium text-ol-slate text-center py-2"
            >
              Entrar
            </a>
            <a href="#planos" className="btn-primary px-5 py-2.5 text-sm text-center">
              Começar agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
