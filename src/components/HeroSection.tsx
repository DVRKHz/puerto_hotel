"use client";

import { useState, useEffect } from "react";
import { HOTELES_DATA, HABITACIONES_DATA } from "@/data/rooms";

interface HeroSectionProps {
  onSearch: (
    id_hotel: number,
    id_habitacion: number,
    fecha_entrada: string,
    fecha_salida: string,
    num_huespedes: number
  ) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [selectedHotelId, setSelectedHotelId] = useState<number>(1);
  const [selectedHabitacionId, setSelectedHabitacionId] = useState<number>(1);
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [numHuespedes, setNumHuespedes] = useState<number>(2);

  useEffect(() => {
    const today = new Date();
    const future = new Date(today);
    future.setDate(future.getDate() + 2);

    const format = (d: Date) => d.toISOString().split("T")[0];
    setFechaEntrada(format(today));
    setFechaSalida(format(future));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(
      Number(selectedHotelId),
      Number(selectedHabitacionId),
      fechaEntrada,
      fechaSalida,
      Number(numHuespedes)
    );
  };

  return (
    <section
      id="inicio"
      className="relative hero-bg min-h-screen pt-28 pb-16 flex items-center justify-center text-white px-4"
    >
      <div className="max-w-6xl mx-auto text-center mt-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
          <i className="fa-solid fa-water text-xs mr-1"></i> Cadena Hotelera Puerto Hotel • Chiapas
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
          Donde la Costa y la Selva Encuentran el Confort
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          Explora la magia viva de Chiapas hospedándote en nuestras sedes de lujo: playas doradas en
          <strong> Puerto Arista</strong>, el encanto de <strong>San Cristóbal</strong>, la grandeza maya de <strong>Palenque</strong> y la naturaleza de <strong>Tuxtla Gutiérrez</strong>.
        </p>

        {/* Barra de Reserva Rápida conectada al esquema de la Base de Datos */}
        <div className="mt-10 glass-panel rounded-2xl p-5 sm:p-7 text-navy-900 shadow-2xl border border-gold-500/30 text-left">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 items-end">
            {/* Hotel en Chiapas (Tabla: hoteles) */}
            <div className="lg:col-span-2">
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5">
                <i className="fa-solid fa-hotel text-gold-600 mr-1"></i> Hotel en Chiapas
              </label>
              <select
                value={selectedHotelId}
                onChange={(e) => {
                  const newHotelId = Number(e.target.value);
                  setSelectedHotelId(newHotelId);
                  const habs = HABITACIONES_DATA.filter((h) => h.id_hotel === newHotelId);
                  if (habs.length > 0) setSelectedHabitacionId(habs[0].id_habitacion);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none bg-white font-medium"
              >
                {HOTELES_DATA.map((h) => (
                  <option key={h.id_hotel} value={h.id_hotel}>
                    📍 {h.nombre} ({h.ciudad})
                  </option>
                ))}
              </select>
            </div>

            {/* Fecha Entrada */}
            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5">
                <i className="fa-regular fa-calendar-check text-gold-600 mr-1"></i> Entrada
              </label>
              <input
                type="date"
                required
                value={fechaEntrada}
                onChange={(e) => setFechaEntrada(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none bg-white"
              />
            </div>

            {/* Fecha Salida */}
            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5">
                <i className="fa-regular fa-calendar-xmark text-gold-600 mr-1"></i> Salida
              </label>
              <input
                type="date"
                required
                value={fechaSalida}
                onChange={(e) => setFechaSalida(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none bg-white"
              />
            </div>

            {/* Huéspedes */}
            <div>
              <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-1.5">
                <i className="fa-solid fa-user-group text-gold-600 mr-1"></i> Huéspedes
              </label>
              <select
                value={numHuespedes}
                onChange={(e) => setNumHuespedes(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none bg-white font-medium"
              >
                <option value={1}>1 Huésped</option>
                <option value={2}>2 Huéspedes</option>
                <option value={3}>3 Huéspedes</option>
                <option value={4}>4 Huéspedes</option>
              </select>
            </div>

            {/* Botón Buscar y Reservar */}
            <div className="lg:col-span-1">
              <button
                type="submit"
                className="w-full h-[42px] gold-gradient text-navy-950 font-bold rounded-xl shadow-md hover:brightness-105 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <i className="fa-solid fa-magnifying-glass"></i> Reservar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
