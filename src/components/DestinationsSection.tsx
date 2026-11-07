"use client";

import { HOTELES_DATA } from "@/data/rooms";

interface DestinationsSectionProps {
  onSelectHotel: (hotelId: number) => void;
}

export default function DestinationsSection({ onSelectHotel }: DestinationsSectionProps) {
  return (
    <section id="destinos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
          Nuestras Sedes en Chiapas
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mt-2">
          Hoteles en los Destinos Más Bellos
        </h2>
        <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-600 mt-4 font-light">
          Disfruta la hospitalidad de <strong>Puerto Hotel</strong> en cada rincón de Chiapas: costas paradisíacas, selvas milenarias, ciudades coloniales y lagos de ensueño.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HOTELES_DATA.map((h) => (
          <div
            key={h.id_hotel}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col justify-end h-88 bg-navy-900"
          >
            {/* Background Image */}
            <img
              src={h.imagen_url || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"}
              alt={h.nombre}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/65 to-transparent"></div>

            {/* Content */}
            <div className="relative p-6 z-10 flex flex-col justify-end">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 bg-gold-500/20 px-2.5 py-1 rounded-full border border-gold-500/30">
                  📍 {h.ciudad}, {h.estado}
                </span>
                <div className="flex text-gold-400 text-xs gap-0.5">
                  {[...Array(h.estrellas)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
              </div>

              <h3 className="font-serif font-bold text-2xl text-white mb-1.5">{h.nombre}</h3>
              <p className="text-[11px] text-slate-300 line-clamp-2 mb-4 leading-relaxed font-light">
                {h.descripcion}
              </p>

              <button
                onClick={() => onSelectHotel(h.id_hotel)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white font-semibold text-xs tracking-wider uppercase transition-all backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2"
              >
                <i className="fa-regular fa-calendar-check text-gold-400 group-hover:text-navy-950"></i>
                Ver Habitaciones y Reservar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
