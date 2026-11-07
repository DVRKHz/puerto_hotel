"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-navy-900/90 backdrop-blur-md border-b border-gold-500/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-gold-500 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300 shadow-md">
            <i className="fa-solid fa-water text-lg"></i>
          </div>
          <div>
            <span className="block text-xl font-serif tracking-wider text-white font-semibold">
              PUERTO HOTEL
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-gold-400 uppercase font-sans">
              Chiapas • México
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium tracking-wide">
          <Link href="#inicio" className="hover:text-gold-400 transition-colors">
            Inicio
          </Link>
          <Link href="#destinos" className="hover:text-gold-400 transition-colors">
            Destinos Chiapas
          </Link>
          <Link href="#habitaciones" className="hover:text-gold-400 transition-colors">
            Habitaciones
          </Link>
          <Link href="#experiencias" className="hover:text-gold-400 transition-colors">
            Experiencias
          </Link>
          <Link href="#testimonios" className="hover:text-gold-400 transition-colors">
            Opiniones
          </Link>
          <Link href="#contacto" className="hover:text-gold-400 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+529611234567"
            className="text-xs text-slate-300 hover:text-gold-400 flex items-center gap-2"
          >
            <i className="fa-solid fa-phone text-gold-400"></i> +52 (961) 123-4567
          </a>
          <button
            onClick={() => {
              if (onOpenBooking) {
                onOpenBooking();
              } else {
                const el = document.getElementById("habitaciones");
                el?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="gold-gradient text-navy-950 font-semibold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-gold-500/20 transition-all transform hover:-translate-y-0.5 text-xs uppercase tracking-wider"
          >
            Reservar
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
          className="md:hidden text-slate-300 hover:text-white focus:outline-none p-2"
        >
          <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950 border-b border-gold-500/20 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-gold-400"
          >
            Inicio
          </Link>
          <Link
            href="#destinos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-gold-400"
          >
            Destinos Chiapas
          </Link>
          <Link
            href="#habitaciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-gold-400"
          >
            Habitaciones
          </Link>
          <Link
            href="#experiencias"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-gold-400"
          >
            Experiencias
          </Link>
          <Link
            href="#testimonios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-gold-400"
          >
            Opiniones
          </Link>
          <Link
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-gold-400"
          >
            Contacto
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenBooking) {
                onOpenBooking();
              } else {
                const el = document.getElementById("habitaciones");
                el?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="block w-full text-center gold-gradient text-navy-950 font-bold py-3 rounded-lg text-sm"
          >
            RESERVAR AHORA
          </button>
        </div>
      )}
    </header>
  );
}
