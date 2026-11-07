export interface Hotel {
  id_hotel: number;
  nombre: string;
  ciudad: string;
  estado: string;
  direccion: string;
  telefono?: string;
  estrellas: number;
  descripcion?: string;
  activo: boolean;
  imagen_url?: string;
}

export interface TipoHabitacion {
  id_tipo: number;
  nombre: string;
  descripcion?: string;
  capacidad: number;
}

export interface Habitacion {
  id_habitacion: number;
  id_hotel: number;
  id_tipo: number;
  numero: string;
  piso?: number;
  precio_noche: number;
  estado: "disponible" | "mantenimiento";
  hotel_nombre?: string;
  hotel_ciudad?: string;
  tipo_nombre?: string;
  capacidad?: number;
  imagen_url: string;
  amenities: { icon: string; label: string }[];
}

export interface Cliente {
  id_cliente?: number;
  nombre: string;
  apellidos: string;
  correo: string;
  telefono?: string;
}

export type MetodoPago = "tarjeta" | "transferencia" | "paypal" | "efectivo";

export interface ReservationRequest {
  id_habitacion: number;
  id_hotel: number;
  fecha_entrada: string;
  fecha_salida: string;
  num_huespedes: number;
  nombre: string;
  apellidos: string;
  correo: string;
  telefono?: string;
  metodo_pago?: MetodoPago;
}

export interface ReservationResponse {
  success: boolean;
  id_reservacion: number;
  folio: string;
  cliente: {
    nombre_completo: string;
    correo: string;
  };
  hotel: {
    nombre: string;
    ciudad: string;
  };
  habitacion: {
    numero: string;
    tipo: string;
    precio_noche: number;
  };
  fecha_entrada: string;
  fecha_salida: string;
  num_huespedes: number;
  noches: number;
  total: number;
  estado: string;
  metodo_pago: string;
  source: "SQL_SERVER" | "SIMULATED_LOCAL";
  message: string;
}
