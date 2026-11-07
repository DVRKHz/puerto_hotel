"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import RoomsSection from "@/components/RoomsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { HABITACIONES_DATA } from "@/data/rooms";
import { Habitacion } from "@/types/hotel";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHabitacion, setSelectedHabitacion] = useState<Habitacion | null>(
    HABITACIONES_DATA[0]
  );
  const [selectedHotelId, setSelectedHotelId] = useState<number>(1);
  const [bookingFechaEntrada, setBookingFechaEntrada] = useState<string>("");
  const [bookingFechaSalida, setBookingFechaSalida] = useState<string>("");
  const [bookingHuespedes, setBookingHuespedes] = useState<number>(2);

  const handleHeroSearch = (
    id_hotel: number,
    id_habitacion: number,
    fecha_entrada: string,
    fecha_salida: string,
    num_huespedes: number
  ) => {
    const hab =
      HABITACIONES_DATA.find((h) => h.id_habitacion === id_habitacion) || HABITACIONES_DATA[0];
    setSelectedHabitacion(hab);
    setSelectedHotelId(id_hotel);
    setBookingFechaEntrada(fecha_entrada);
    setBookingFechaSalida(fecha_salida);
    setBookingHuespedes(num_huespedes);
    setModalOpen(true);
  };

  const handleSelectRoom = (room: Habitacion) => {
    setSelectedHabitacion(room);
    setSelectedHotelId(room.id_hotel);
    setModalOpen(true);
  };

  const handleSelectHotel = (hotelId: number) => {
    setSelectedHotelId(hotelId);
    const habDelHotel = HABITACIONES_DATA.find((h) => h.id_hotel === hotelId);
    if (habDelHotel) {
      setSelectedHabitacion(habDelHotel);
    }
    setModalOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    if (!selectedHabitacion) {
      setSelectedHabitacion(HABITACIONES_DATA[0]);
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-sand text-slate-800">
      {/* Navbar Header */}
      <Navbar onOpenBooking={handleOpenGeneralBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Portada & Buscador */}
        <HeroSection onSearch={handleHeroSearch} />

        {/* Hoteles / Sedes en Chiapas (Tabla: hoteles) */}
        <DestinationsSection onSelectHotel={handleSelectHotel} />

        {/* Habitaciones & Suites (Tabla: habitaciones) */}
        <RoomsSection onSelectRoom={handleSelectRoom} />

        {/* Experiencias & Servicios (Tabla: servicios) */}
        <ExperiencesSection />

        {/* Reseñas de Clientes (Tabla: resenas) */}
        <TestimonialsSection />
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Modal Interactivo de Reserva conectado a SQL Server */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        habitacion={selectedHabitacion}
        hotelInicialId={selectedHotelId}
        initialFechaEntrada={bookingFechaEntrada}
        initialFechaSalida={bookingFechaSalida}
        initialHuespedes={bookingHuespedes}
      />
    </div>
  );
}
