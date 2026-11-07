"use client";

import { Habitacion } from "@/types/hotel";
import { HABITACIONES_DATA } from "@/data/rooms";

interface RoomsSectionProps {
  onSelectRoom: (room: Habitacion) => void;
}

export default function RoomsSection({ onSelectRoom }: RoomsSectionProps) {
  return (
    <section id="habitaciones" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-sand">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
          Catálogo de Habitaciones
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mt-2">
          Suites & Habitaciones Disponibles
        </h2>
        <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-600 mt-4 font-light">
          Diseñadas con amenidades de alta gama, textilería regional chiapaneca y la máxima comodidad.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {HABITACIONES_DATA.map((hab) => (
          <div
            key={hab.id_habitacion}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={hab.imagen_url}
                alt={`Habitación ${hab.numero}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 right-4 bg-navy-900/80 backdrop-blur-md text-gold-400 text-xs font-bold px-3 py-1 rounded-full border border-gold-500/30">
                Hab. {hab.numero}
              </span>
              <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-navy-900 text-[10px] font-bold px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                <i className="fa-solid fa-location-dot text-gold-600"></i> {hab.hotel_ciudad}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {hab.hotel_nombre}
                </span>
                <h3 className="font-serif font-bold text-xl text-navy-900 mb-2">
                  {hab.tipo_nombre}
                </h3>
                <p className="text-slate-500 text-xs mb-4">
                  Capacidad para hasta {hab.capacidad} persona{hab.capacidad && hab.capacidad > 1 ? "s" : ""}. Piso {hab.piso}.
                </p>

                {/* Amenidades */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {hab.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                    >
                      <i className={`${amenity.icon} text-gold-600 mr-1`}></i> {amenity.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-navy-900">${hab.precio_noche}</span>
                  <span className="text-xs text-slate-400">/ noche</span>
                </div>
                <button
                  onClick={() => onSelectRoom(hab)}
                  className="px-4 py-2 bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950 rounded-xl text-xs font-semibold transition-colors"
                >
                  Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
